const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const QuoteRequest = require('./models/QuoteRequest');
const ContactForm = require('./models/ContactForm');
require('dotenv').config();
const result = require('dotenv').config()
const { Parser } = require('json2csv');
const multer = require('multer');
const path = require('path');
const Order = require('./models/Order'); // Update the path according to your structure
const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.static('dist'));
app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;





if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Stripe secret key is missing.');
  process.exit(1);
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Ticket = require('./models/Ticket');
const Line = require('./models/Line')
const authenticateToken = require('./middleware/authenticateToken')
const router = express.Router();

function calculateOrderAmount(items) {
  // For simplicity, let's assume each item has a 'price' field
  return items.reduce((total, item) => total + item.price, 0);
}

function jsonToCsv(jsonArray) {
  if (jsonArray.length === 0) {
    return '';
  }
  const headers = Object.keys(jsonArray[0]).join(',');
  const rows = jsonArray.map(obj => Object.values(obj).join(','));
  return [headers, ...rows].join('\n');
}






// SMTP Transporter
const transporter = nodemailer.createTransport({
  host: 'shamuscoachbus.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});



app.get('/', (req, res) => {
  res.send('Welcome to the tristate-coach-backend!')
})


// Login Route
app.post('/login', async (req, res) => {
  // Log the environment variable for debugging purposes (consider removing this in production)
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  // Destructure username and password from request body
  const { username, password } = req.body;

  // Log incoming credentials for debugging (remove sensitive data logging in production)
  console.log('Attempting login with:', { username, password });

  try {
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      // User authenticated, create a token
      const accessToken = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '15m' }); // short-lived
      const refreshToken = jwt.sign({ userId: 1 }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); // long-lived
      res.json({ accessToken, refreshToken });
    } else {
      // Log invalid login attempt
      console.log('Invalid credentials attempt:', { username });
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    // Log the error
    console.error('Error during login:', error.message);
    // Send a generic error message client-side
    res.status(500).json({ error: 'An error occurred during the login process' });
  }
});


app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const newAccessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
    res.json({ accessToken: newAccessToken });
  });
});



// Example of a protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the protected route, authenticated user!' });
});


// Route to handle form submission
app.post('/quote-request', async (req, res) => {
  try {
    const newQuoteRequest = new QuoteRequest(req.body);
    await newQuoteRequest.save();

    // Sending email
    const mailOptions = {
      from: 'contact@shamuscoachbus.com',
      to: 'rechceltoledo@gmail.com',
      subject: 'New Quote Request',
      text: `You have a new quote request: \nName: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
      // You can format the email body as per your requirements
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).send('Quote request submitted and email sent successfully');
  } catch (error) {
    console.log(error);
    res.status(400).send('Error processing request');
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new document using the ContactForm model
  const newContactForm = new ContactForm({ name, email, message });

  try {
    // Save the document to the database
    await newContactForm.save();

    // Send the email using Nodemailer (as previously set up)
    // ...

    res.status(200).send('Form submitted and email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing your request');
  }
});

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return res.status(400).send({ error: "Amount is required" });
  }

  try {
    const orderAmount = amount * 100; // $1 per count, amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: 'Error creating payment intent' });
  }
});

// Endpoint to get a single ticket by ID
app.get('/api/tickets/:id', async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      // If no ticket is found with the given ID, return a 404 error
      return res.status(404).send({ message: 'Ticket not found' });
    }
    // If a ticket is found, return it in the response
    res.status(200).json(ticket);
  } catch (error) {
    console.error('Error fetching ticket by ID:', error);
    res.status(500).send({ message: 'Error fetching ticket' });
  }
});


// Endpoint to create a new ticket
app.post('/api/tickets', async (req, res) => {
  try {
    // Preprocess request data as necessary, e.g., converting price strings to numbers
    const processedData = preprocessTicketData(req.body);

    // Check for SKU uniqueness if necessary
    const existingTicket = await Ticket.findOne({ variantSku: processedData.variantSku });
    if (existingTicket) {
      return res.status(400).json({ message: 'A ticket with this SKU already exists.' });
    }

    const newTicket = new Ticket(processedData);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error creating new ticket:', error);
    res.status(400).json({ error: error.message });
  }
});


app.post('/api/tickets/check-slug', async (req, res) => {
  const { slug } = req.body;
  const ticket = await Ticket.findOne({ slug: slug });
  if (ticket) {
    res.json({ isUnique: false });
  } else {
    res.json({ isUnique: true });
  }
});

app.get('/api/tickets', async (req, res) => {
  try {
    // Find all tickets in the database
    const tickets = await Ticket.find({});

    // Modify each ticket to include only the first image as the logo
    const modifiedTickets = tickets.map(ticket => {
      const images = ticket.images || []; // Handle undefined images
      const logoUrl = images.length > 0 ? `${req.protocol}://${req.get('host')}/uploads/${images[0].replace(/^uploads\//, '')}` : '';
      return {
        ...ticket.toObject(), // Convert document to a plain JavaScript object
        logoUrl // Add logoUrl property with corrected path
      };
    });

    res.status(200).send(modifiedTickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).send('Error fetching tickets');
  }
});




// Update a ticket's status
app.put('/api/tickets/:id', authenticateToken, async (req, res) => {
  const updateData = req.body; // This should ideally only contain the fields that need to be updated
  try {
      const updatedTicket = await Ticket.findByIdAndUpdate(
          req.params.id,
          updateData,
          { new: true, runValidators: true, context: 'query' } // This makes sure validators run
      );
      if (!updatedTicket) {
          return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json(updatedTicket);
  } catch (error) {
      console.error('Error updating ticket:', error);
      res.status(500).json({ message: 'Error updating ticket', error: error.toString() });
  }
});

// Endpoint to delete multiple tickets
app.delete('/api/tickets/batch-delete', authenticateToken, async (req, res) => {
  try {
      const { ticketIds } = req.body; // Expect an array of ticket IDs
      const deleteResult = await Ticket.deleteMany({ _id: { $in: ticketIds } });
      res.status(200).json({ message: 'Tickets deleted successfully', deletedCount: deleteResult.deletedCount });
  } catch (error) {
      console.error('Error deleting tickets:', error);
      res.status(500).json({ message: 'Error deleting tickets', error: error.message });
  }
});

// Endpoint to archive multiple tickets
app.patch('/api/tickets/batch-archive', authenticateToken, async (req, res) => {
  try {
      const { ticketIds } = req.body; // Expect an array of ticket IDs
      const archiveResult = await Ticket.updateMany(
          { _id: { $in: ticketIds } },
          { $set: { status: 'Archived' } }
      );
      res.status(200).json({ message: 'Tickets archived successfully', modifiedCount: archiveResult.nModified });
  } catch (error) {
      console.error('Error archiving tickets:', error);
      res.status(500).json({ message: 'Error archiving tickets', error: error.message });
  }
});


app.post('/api/lines', async (req, res) => {
  const { name, slug, status = 'Draft', products } = req.body;

  try {
    const newLine = new Line({
      name,
      slug,
      status, // Default to 'Draft' if not provided
      products,
      productsCount: products.length // Just count the number of products
    });

    await newLine.save();
    res.status(201).json(newLine);
  } catch (error) {
    res.status(400).json({ message: 'Error creating line', error: error.message });
  }
});



// Endpoint to get all lines
app.get('/api/lines',  async (req, res) => {
  try {
    const lines = await Line.find({});
    res.json(lines); // respond with JSON
  } catch (error) {
    console.error("Error fetching lines:", error);
    res.status(500).json({ error: 'Error fetching lines' });
  }
});



app.patch('/api/lines/:id', async (req, res) => {
  const { status, ...otherUpdates } = req.body;
  try {
    const line = await Line.findById(req.params.id);
    if (!line) {
      return res.status(404).send('Line not found');
    }

    if (status) {
      line.status = status; // Update the status if provided in the request
    }
    // Apply other updates here
    await line.save();
    res.status(200).json(line);
  } catch (error) {
    res.status(400).json({ message: 'Error updating line', error: error.message });
  }
});


// Endpoint to delete a line
app.delete('/api/lines/:id', async (req, res) => {
  console.log("Attempting to delete line with ID:", req.params.id); // Log the ID being requested for deletion
  try {
    const result = await mongoose.connection.collection('lines').deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id) });
    console.log("Deletion result:", result); // Log the deletion result
    if (result.deletedCount === 0) {
      return res.status(404).send('Line not found');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting line:', error);
    res.status(500).send('Error deleting line');
  }
});



// Endpoint to duplicate a line
// Endpoint to update or create a line
app.post('/api/lines/:id?', async (req, res) => {
  const { id } = req.params;
  const { status, ...lineData } = req.body;

  if (id) {
    // If an ID is provided, update the existing line
    try {
      const line = await Line.findById(id);
      if (!line) return res.status(404).send('Line not found');

      line.status = status;
      Object.assign(line, lineData);
      await line.save();
      res.status(200).json(line);
    } catch (error) {
      res.status(400).json({ message: 'Error updating line', error: error.message });
    }
  } else {
    // If no ID, create a new line
    try {
      const newLine = new Line({ ...lineData, status });
      await newLine.save();
      res.status(201).json(newLine);
    } catch (error) {
      res.status(400).json({ message: 'Error creating line', error: error.message });
    }
  }
});

app.get('/api/export-all', async (req, res) => {
  try {
    // Fetch all lines and tickets from the database
    const linesPromise = Line.find({}).lean();
    const ticketsPromise = Ticket.find({}).lean();
    const [lines, tickets] = await Promise.all([linesPromise, ticketsPromise]);

    // Combine lines and tickets into a single array
    const combinedData = [...lines, ...tickets];

    // Define fields for CSV, including handling of potential undefined products array
    const fields = [
      'name',
      'slug',
      'itemId',
      'created',
      'lastEdited',
      'lastPublished',
      'status',
      'productsCount',
      {
        label: 'products',
        value: row => row.products ? row.products.map(p => `ID: ${p.id}, Count: ${p.count}`).join('; ') : ''
      }
      // Add other fields as needed
    ];
    const json2csvParser = new Parser({ fields });
    const csvData = json2csvParser.parse(combinedData);

    // Set the headers to indicate a file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="combined_data.csv"');
    res.status(200).send(csvData);
  } catch (error) {
    console.error('Failed to export data:', error);
    res.status(500).send('Error exporting data to CSV.');
  }
});

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Image upload route
app.post('/api/upload-image', upload.single('image'), (req, res) => {
  if (req.file) {
    // Ensure the filePath is relative to the static directory base URL
    res.json({ message: 'Image uploaded successfully', filePath: req.file.filename });
  } else {
    res.status(400).send('Error uploading image');
  }
});


app.use('/uploads', express.static('uploads'));

// Create a new order
app.post('/api/orders', async (req, res) => {
  try {
      const order = new Order(req.body);
      await order.save();
      res.status(201).json(order);
  } catch (error) {
      res.status(400).json({ message: 'Error creating new order', error: error.message });
  }
});

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
      const orders = await Order.find({});
      res.json(orders);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Get a single order by ID
app.get('/api/orders/:id', async (req, res) => {
  try {
      const order = await Order.findById(req.params.id);
      if (!order) return res.status(404).json({ message: 'Order not found' });
      res.json(order);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
});

// Update an existing order
app.put('/api/orders/:id', async (req, res) => {
  try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!order) return res.status(404).json({ message: 'Order not found' });
      res.json(order);
  } catch (error) {
      res.status(400).json({ message: 'Error updating order', error: error.message });
  }
});

// Delete an order
app.delete('/api/orders/:id', async (req, res) => {
  try {
      const result = await Order.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ message: 'Order not found' });
      res.status(204).send(); // No content to send back
  } catch (error) {
      res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
});

app.get('/api/export-lines', async (req, res) => {
  try {
    const lines = await Line.find({}); // Fetch all lines from the database

    // Convert to CSV
    const lineFields = [
      'Products Collection ID', 
      'Product ID', 
      'Variants Collection ID', 
      'Variant ID', 
      'Product Handle', 
      'Product Name', 
      'Product Type', 
      'Product Description', 
      'Product Categories', 
      'Main Variant Image', 
      'Variant Price', 
      'Product Tax Class', 
      'Variant Sku', 
      'Variant Inventory', 
      'Requires Shipping', 
      'Created On', 
      'Updated On'
    ];
    const lineParser = new Parser({ fields: lineFields });
    const csvLines = lineParser.parse(lines);

    res.header('Content-Type', 'text/csv');
    res.attachment('lines.csv');
    res.send(csvLines);
  } catch (error) {
    console.error('Failed to export lines:', error);
    res.status(500).json({ message: 'Failed to export lines' });
  }
});

app.get('/api/export-tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find({}).select({
      productsCollectionId: 1,
      productId: 1,
      variantsCollectionId: 1,
      variantId: 1,
      productHandle: 1,
      productName: 1,
      status: 1,
      productType: 1,
      productDescription: 1,
      productCategories: 1,
      mainVariantImage: 1,
      moreVariantImages: 1,
      variantPrice: 1,
      variantCompareAtPrice: 1,
      productTaxClass: 1,
      variantSku: 1,
      variantInventory: 1,
      requiresShipping: 1,
      variantWeight: 1,
      variantWidth: 1,
      variantHeight: 1,
      variantLength: 1,
      variantDownloadName: 1,
      variantDownloadURL: 1,
      option1Name: 1,
      option1Value: 1,
      option2Name: 1,
      option2Value: 1,
      option3Name: 1,
      option3Value: 1,
      createdOn: 1,
      updatedOn: 1,
      publishedOn: 1
    }).lean(); // Use `.lean()` for performance improvement since we just need POJOs

    const parser = new Parser({
      fields: [ // Add all the fields you need in the CSV in the correct order
        'productsCollectionId',
        'productId',
        'variantsCollectionId',
        'variantId',
        'productHandle',
        'productName',
        'status',
        'productType',
        'productDescription',
        'productCategories',
        'mainVariantImage',
        'moreVariantImages',
        'variantPrice',
        'variantCompareAtPrice',
        'productTaxClass',
        'variantSku',
        'variantInventory',
        'requiresShipping',
        'variantWeight',
        'variantWidth',
        'variantHeight',
        'variantLength',
        'variantDownloadName',
        'variantDownloadURL',
        'option1Name',
        'option1Value',
        'option2Name',
        'option2Value',
        'option3Name',
        'option3Value',
        'createdOn',
        'updatedOn',
        'publishedOn'
      ]
    });
    const csv = parser.parse(tickets);

    res.header('Content-Type', 'text/csv');
    res.attachment('tickets.csv');
    res.send(csv);
  } catch (error) {
    console.error('Failed to export tickets:', error);
    res.status(500).json({ message: 'Failed to export tickets' });
  }
});

app.get('/api/export-orders', async (req, res) => {
  try {
    // Use MongoDB aggregation framework to prepare your data
    const orders = await Order.aggregate([
      // Add your aggregation stages here, e.g., $match, $project, etc.
      // This is just an example; modify according to your needs
      {
        $project: {
          _id: 0, // Exclude this field from the output
          order_id: 1,
          status: 1,
          created_on: 1,
          refunded_on: 1,
          customer_full_name: 1,
          customer_email: 1,
          billing_address_addressee: 1,
          billing_address_line1: 1,
          billing_city: 1,
          billing_state: 1,
          billing_country: 1,
          billing_postal_code: 1,
          items_count: 1,
          subtotal: 1,
          discounts_total: 1,
          taxes_total: 1,
          order_total: 1,
          currency: 1,
          stripe_customer_id: 1,
          stripe_charge_id: 1,
          stripe_refund_id: 1,
          requires_shipping: 1,
          webflow_transaction_fee: 1,
          buy_now: 1
        }
      },
    ]);

    // Convert to CSV
    const csv = new Parser().parse(orders);

    // Set headers for CSV download
    res.header('Content-Type', 'text/csv');
    res.attachment('orders.csv');
    res.send(csv);
  } catch (error) {
    console.error('Failed to export orders:', error);
    res.status(500).json({ message: 'Failed to export orders' });
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html')); // Adjust if using 'build' or another directory
});

app.use((req, res, next) => {
  console.log('Raw request body:', req.rawBody);
  next();
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  console.log(req.path, req.body);
  next();
});


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 99000,
})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  if (result.error) {
    throw result.error
  }

  app.use((error, req, res, next) => {
    console.error(error.stack); // More detailed error logging
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({ error: message });
  });
  