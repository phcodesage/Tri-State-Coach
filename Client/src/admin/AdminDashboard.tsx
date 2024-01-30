import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
const authToken = localStorage.getItem('token');
const navigate = useNavigate();
const [lines, setLines] = useState([]);
const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);
const [isLineFormVisible, setIsLineFormVisible] = useState(false);
const [creationTime, setCreationTime] = useState(new Date().toISOString());
const [tripType, setTripType] = useState('');
const [lineName, setLineName] = useState('');
const [departureDate, setDepartureDate] = useState('');
const [returnDate, setReturnDate] = useState('');
const [selectedImage, setSelectedImage] = useState(null);
const [tickets, setTickets] = useState([]); // State to store tickets data
const [secondPickUpTime, setSecondPickUpTime] = useState('');
const [secondPickUpLocation, setSecondPickUpLocation] = useState('');
const [thirdPickUpTime, setThirdPickUpTime] = useState('');
const [thirdPickUpLocation, setThirdPickUpLocation] = useState('');
const [finalPickUpTime, setFinalPickUpTime] = useState('');
const [finalPickUpLocation, setFinalPickUpLocation] = useState('');
const [firstDropOffLocation, setFirstDropOffLocation] = useState('');
const [secondDropOffLocation, setSecondDropOffLocation] = useState('');
const [thirdDropOffLocation, setThirdDropOffLocation] = useState('');
const [finalDropOffLocation, setFinalDropOffLocation] = useState('');
const [suggestedTip, setSuggestedTip] = useState('');
const handleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // Set the preview image
      setSelectedImage(reader.result);

      // Append the new image file to the ticketData images array
      setTicketData({
        ...ticketData,
        images: [...ticketData.images, newImageURL] // newImageURL should be a string
      });
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  // Implement the logic to delete the image
  setSelectedImage(null);
  // If you also need to remove the image from the ticketData state, adjust accordingly
  setTicketData({ ...ticketData, images: ticketData.images.filter((img) => img !== selectedImage) });
};


useEffect(() => {
  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tickets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  fetchTickets();
}, [authToken]);
const [selectedTicket, setSelectedTicket] = useState(null);
const [selectedCategories, setSelectedCategories] = useState([]);
const handleCategorySelect = (event) => {
   const value = Array.from(
     event.target.selectedOptions,
     (option) => option.value
   );
   setSelectedCategories(value);
 };

 const handleRemoveCategory = (category) => {
   setSelectedCategories(selectedCategories.filter((c) => c !== category));
 };
 
 
 const toggleLineFormVisibility = () => {
  setIsLineFormVisible(!isLineFormVisible);
  setIsTicketFormVisible(false); // Hide the ticket form when toggling the line form
};

const toggleTicketFormVisibility = () => {
  setIsTicketFormVisible(!isTicketFormVisible);
  setIsLineFormVisible(false); // Hide the line form when toggling the ticket form
};

 // or your state management
const [showCreateOptions, setShowCreateOptions] = useState(false);

  const handleCreateClick = () => {
    setShowCreateOptions(!showCreateOptions);
  };

  const handleSaveOption = (option) => {
   console.log(`Save as: ${option}`);
   // Implement save functionality based on the option
   setShowCreateOptions(false);
 };

 const handleCancel = () => {
   setIsTicketFormVisible(false);
 };

 const [ticketData, setTicketData] = useState({
  productType: '',
  name: '',
  slug: '',
  description: '',
  categories: [], // Assuming this will be an array of category names
  images: [], // Assuming this will be an array of image URLs
  price: '',
  compareAtPrice: '',
  sku: '',
  stops: '',
  firstPickUpTime: '',
  firstPickUpLocation: '',
  trackInventory: false,
  inventoryQuantity: 0,
  inventoryPolicy: '',
  requiresShipping: false,
  createdOn: new Date().toISOString(),
  updatedOn: new Date().toISOString(),
  publishedOn: new Date().toISOString(), // You might want to adjust this based on your business logic
});


  
const [newLine, setNewLine] = useState({
      name: '',
      status: 'Published', // default value
      products: 0, // default value, assuming it's a new line with no products yet
      modified: new Date().toISOString(),
      published: new Date().toISOString(),
    });

    const createLine = async (lineData) => {
    
      if (!authToken) {
        console.error('Auth token is not available.');
        navigate('/login');
        return;
      }
    
      console.log("Sending line data:", lineData); // Log the data being sent
    
      try {
        const response = await fetch('http://localhost:5000/api/lines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify(lineData)
        });
    
        if (response.status === 403) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        } else if (!response.ok) {
          const errorText = await response.text();
          console.error("Response error:", response.status, errorText); // Log any non-ok response
          alert("Error creating line: " + errorText); // Display the error to the user
          return;
        }
       const newLine = await response.json();
      // Update local state with the new line
      setLines(prevLines => [...prevLines, newLine]);
    } catch (error) {
      console.error('Error creating line:', error);
    }
   
    

    
};

useEffect(() => {
  let isMounted = true;

  const fetchLines = async () => {
    try {
      const response = await fetch('/api/lines', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (!response.ok) {
        throw new Error('Error fetching lines');
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        if (isMounted) {
          setLines(data);
        }
      } else {
        console.error('Data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching lines:', error);
    }
  };

  if (isLineFormVisible) {
    fetchLines();
  }

  return () => {
    isMounted = false;
  };
}, [isLineFormVisible]);


       const handleInputChangeLine = (e) => {
         const { name, value } = e.target;
         setNewLine({
           ...newLine,
           [name]: value,
         });
       };
     
       const handleInputChange = (e) => {
         const { name, value } = e.target;
         setTicketData({
           ...ticketData,
           [name]: value,
         });
       };

       const handleLineSubmit = async (e) => {
        e.preventDefault();
        try {
          const createdLine = await createLine(newLine);
          setLines(prevLines => [...prevLines, createdLine]);
          // Reset form after successful line creation
          setNewLine({
            name: '',
            status: 'Published',
            products: 0,
            modified: new Date().toISOString(),
            published: new Date().toISOString(),
          });
        } catch (error) {
          console.error('Error submitting line:', error);
        }
      };
      
      // Save Ticket Function
      const saveTicket = async (data, isPublished) => {
        const url = selectedTicket ? `http://localhost:5000/api/tickets/${selectedTicket._id}` : 'http://localhost:5000/api/tickets';
        const method = selectedTicket ? 'PUT' : 'POST';
        
        if (isPublished) {
          data.publishedOn = new Date().toISOString();
        }
      
        try {
          const response = await fetch(url, {
            method: method,
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
      
          if (response.ok) {
            const updatedTicket = await response.json();
            console.log('Ticket saved:', updatedTicket);
            if (!selectedTicket) {
              setTickets(prevTickets => [...prevTickets, updatedTicket]);
            } else {
              setTickets(prevTickets => prevTickets.map(ticket => ticket._id === updatedTicket._id ? updatedTicket : ticket));
              setSelectedTicket(updatedTicket); // Update the selected ticket with the new details
            }
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          console.error('There was a problem saving the ticket:', error);
        }
      };
    
      const handlePublish = () => {
        // Collect the form data and call saveTicket with isPublished = true
        saveTicket(ticketData, true);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        saveTicket(ticketData, false);
      };
      

  const handleLogout = () => {
   localStorage.removeItem('token'); // Remove the token
   navigate('/'); // Redirect to home page
 };

 const handleTicketSelect = (ticket) => {
   setSelectedTicket(ticket);
   setIsTicketFormVisible(true);
   // Update form fields with the selected ticket data
   setTicketData({
     productType: ticket.productType || '',
     name: ticket.name || '',
     slug: ticket.slug || '',
     description: ticket.description || '',
     categories: ticket.categories || [],
     images: ticket.images || [],
     price: ticket.price || '',
     compareAtPrice: ticket.compareAtPrice || '',
     sku: ticket.sku || '',
     trackInventory: ticket.trackInventory || false,
     inventoryQuantity: ticket.inventoryQuantity || 0,
     inventoryPolicy: ticket.inventoryPolicy || '',
     requiresShipping: ticket.requiresShipping || false,
     createdOn: ticket.createdOn || new Date().toISOString(),
     updatedOn: ticket.updatedOn || new Date().toISOString(),
     publishedOn: ticket.publishedOn || new Date().toISOString(),
   });
  
   // If the ticket has categories, set the selected categories state
  if (ticket.categories) {
    setSelectedCategories(ticket.categories);
  }

  // If the ticket has an image, set the selected image for preview
  if (ticket.images && ticket.images.length > 0) {
    setSelectedImage(ticket.images[0]);
  }
};
  return (
    <>
    <div className="flex flex-row min-h-screen bg-gray-100">
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="w-1/6 bg-gray-800" aria-label="Sidebar">
   <div className="relative h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              
               <span className="ms-3 font-xl font-bold">Ecommerce</span>
            </a>
         </li>
         <li>
            <a href="#" onClick={toggleTicketFormVisibility} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M24.782 1.606h-7.025l-16.151 16.108 12.653 12.681 16.135-16.093v-7.096l-5.613-5.6zM29.328 13.859l-15.067 15.027-11.147-11.171 15.083-15.044h6.143l4.988 4.976v6.211z" fill="#000000"> </path> <path d="M21.867 7.999c0 1.173 0.956 2.128 2.133 2.128s2.133-0.954 2.133-2.128c0-1.174-0.956-2.129-2.133-2.129s-2.133 0.955-2.133 2.129zM25.066 7.999c0 0.585-0.479 1.062-1.066 1.062s-1.066-0.476-1.066-1.062c0-0.586 0.478-1.063 1.066-1.063s1.066 0.477 1.066 1.063z" fill="#000000"> </path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Tickets</span>
            </a>
         </li>
         <li>
            <a href="#" onClick={toggleLineFormVisibility} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Lines</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li className="absolute bottom-0 w-full">
            <button onClick={handleLogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
            </button>
         </li>
      </ul>
   </div>
</aside>

{/* List of tickets */}
{isTicketFormVisible && (
<aside className="w-1/4 overflow-y-auto">
  <h2>Tickets</h2>
        <ul>
        {tickets.map(ticket => (
        <li key={ticket._id} onClick={() => handleTicketSelect(ticket)}>
          {ticket.name}
        </li>
      ))}
        </ul>
      </aside>
)}

{isTicketFormVisible && (
  <main className="flex-1">
  {/* Header starts here */}
  <div className="flex justify-between items-center">
    <button className="mr-3" onClick={handleCancel}>Cancel</button>
    <button onClick={handleSubmit}>Save</button> {/* Save without publishing */}
    <button onClick={handlePublish}>Publish</button> {/* Save and publish */}
  </div>
  {/* Header ends here */}

  <div className="my-4">
    <h1 className="text-xl font-bold mb-4">{selectedTicket ? 'Edit Ticket' : 'Create New Ticket'}</h1>
  </div>

  <form onSubmit={handleSubmit} className="h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 bg-gray-800 text-white p-4 rounded">
    {/* Product Type Dropdown */}
    <div className="mb-4">
      <label htmlFor="productType" className="block text-sm font-medium mb-2">Product Type</label>
      <select
        id="productType"
        name="productType"
        value={ticketData.productType}
        onChange={handleInputChange}
        className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
      >
        <option value="Physical">Physical</option>
        <option value="Digital">Digital</option>
        <option value="Service">Service</option>
        <option value="Advance">Advance</option>
      </select>
      <p className="text-xs mt-1">
        Service products do not require a shipping address during checkout (e.g., classes, consultations).
      </p>
    </div>

{/* Name Input */}
<div className="mb-4">
  <label htmlFor="name" className="block text-sm font-medium mb-2">
    Name <span className="text-red-500">*</span>
  </label>
  <input
    id="name"
    type="text"
    name="name"
    value={ticketData.name}
    onChange={handleInputChange}
    placeholder="Ticket Name"
    required
    className="block w-full p-2 text-sm bg-gray-700 text-white rounded focus:outline-none"
  />
</div>

{/* Slug Input */}
<div className="mb-4">
  <label htmlFor="slug" className="block text-sm font-medium mb-2">
    Slug <span className="text-red-500">*</span>
  </label>
  <div className="flex items-center">
    <input
      id="slug"
      type="text"
      name="slug"
      value={ticketData.slug}
      onChange={handleInputChange}
      placeholder="Slug"
      required
      className="block w-full p-2 text-sm bg-gray-700 text-white rounded focus:outline-none"
    />
    <button
      onClick={() => navigator.clipboard.writeText(`https://www.tri-statecoach.com/product/${ticketData.slug}`)}
      className="ml-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 focus:outline-none"
    >
      Copy
    </button>
  </div>
  <p className="text-xs mt-1">
    www.tri-statecoach.com/product/{ticketData.slug}
  </p>
</div>

    {/* Description TextArea */}
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
      <textarea
        id="description"
        name="description"
        value={ticketData.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
      ></textarea>
    </div>

    {/* Categories Select */}
    <div className="mb-4">
      <label htmlFor="categories" className="block text-sm font-medium mb-2">
        Categories
      </label>
      <p className="text-xs mb-4">
        Add this product to one or more categories.
      </p>
      <select
        id="categories"
        name="categories"
        multiple
        value={selectedCategories}
        onChange={handleCategorySelect}
        className="w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
      >
        {lines.map((line) => (
          <option key={line._id} value={line.name}>
            {line.name}
          </option>
        ))}
      </select>
      {/* Display selected categories */}
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedCategories.map((category) => (
          <span
            key={category}
            className="flex items-center px-3 py-1 text-sm bg-gray-600 rounded-full"
          >
            {category}
            <button
              type="button"
              onClick={() => handleRemoveCategory(category)}
              className="flex items-center justify-center w-4 h-4 ml-2 rounded-full hover:text-gray-300"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>


{/* Media Section */}
<div className="mb-4 bg-gray-100 p-4 rounded">
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">Main image</label>
    {selectedImage ? (
      <div className="flex items-center space-x-2 mb-2">
        <img src={selectedImage} alt="Selected" className="h-20 w-20 object-cover rounded" />
        <div className="flex flex-col">
          <span className="text-xs font-medium">Filename: {selectedImage.name}</span>
          <span className="text-xs text-gray-500">Size: {selectedImage.size} KB</span>
        </div>
        <button type="button" onClick={() => setSelectedImage(null)} className="text-gray-500 hover:text-gray-700">
          Replace
        </button>
        <button type="button" onClick={deleteImage} className="text-gray-500 hover:text-gray-700">
          Delete
        </button>
      </div>
    ) : (
      <div className="flex justify-center items-center w-full">
        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-200 hover:border-gray-400 rounded-lg group">
          <div className="flex flex-col items-center justify-center pt-7">
            <svg className="w-10 h-10 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 8H12a4 4 0 0 0-4 4v20m32-12v8m0 0v8a4 4 0 0 1-4 4H12m28-12H8m20-28v12m0 0H20m8 0h8"></path></svg>
            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
              Click to browse for files
            </p>
          </div>
          <input
            type="file"
            id="mainImage"
            name="mainImage"
            onChange={handleImageChange}
            className="opacity-0"
          />
        </label>
      </div>
    )}
  </div>
</div>


{/* Billing Section */}
<div className="bg-gray-800 p-4 rounded text-white">
  <h4 className="text-lg font-semibold mb-4">Billing</h4>
  <div className="flex items-center gap-4 mb-4">
    <div className="flex-1">
      <label htmlFor="price" className="block text-sm font-medium mb-1">Price *</label>
      <div className="flex items-center bg-gray-700 rounded">
        <span className="pl-2 text-gray-300">$</span>
        <input
          id="price"
          type="text"
          name="price"
          value={ticketData.price}
          onChange={handleInputChange}
          placeholder="0.00"
          className="flex-1 bg-transparent text-white p-2 rounded focus:ring-0"
        />
      </div>
    </div>
    <div className="flex-1">
      <label htmlFor="compareAtPrice" className="block text-sm font-medium mb-1">Compare-at price</label>
      <div className="flex items-center bg-gray-700 rounded">
        <span className="pl-2 text-gray-300">$</span>
        <input
          id="compareAtPrice"
          type="text"
          name="compareAtPrice"
          value={ticketData.compareAtPrice}
          onChange={handleInputChange}
          placeholder="0.00"
          className="flex-1 bg-transparent text-white p-2 rounded focus:ring-0"
        />
      </div>
    </div>
  </div>
</div>



{/* Product Tax Class */}
<div>
  <label htmlFor="productTaxClass" className="block mb-2 text-sm font-medium text-gray-700">Product Tax Class</label>
  <select
    id="productTaxClass"
    name="productTaxClass"
    value={ticketData.productTaxClass}
    onChange={handleInputChange}
    className="block w-full p-2 mb-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
  >
    <option value="Standard">Standard automatic tax calculation</option>
    <option value="Exempt">Exempt from taxes</option>
    {/* Additional tax class options */}
  </select>
  <p className="text-xs text-gray-500">Enable tax calculation to collect sales tax from your customers.</p>
</div>
{/* Identifiers Section */}
<div>
  <label htmlFor="sku" className="block mb-2 text-sm font-medium text-gray-700">SKU</label>
  <input
    id="sku"
    type="text"
    name="sku"
    value={ticketData.sku}
    onChange={handleInputChange}
    className="block w-full p-2 mb-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
  />
</div>

{/* Inventory Section */}
<div className="bg-gray-800 p-4 rounded text-white">
  <h4 className="text-lg font-semibold mb-4">Inventory</h4>
  
  <div className="mb-4 flex items-center">
    <label htmlFor="trackInventory" className="block text-sm font-medium mb-1 mr-4">Track inventory</label>
    <input
      type="checkbox"
      id="trackInventory"
      name="trackInventory"
      checked={ticketData.trackInventory}
      onChange={e => setTicketData({ ...ticketData, trackInventory: e.target.checked })}
      className="focus:ring-0 text-blue-600 rounded cursor-pointer"
    />
    <label htmlFor="trackInventory" className="ml-2 text-sm font-medium">
      {ticketData.trackInventory ? 'YES' : 'NO'}
    </label>
  </div>
  
  <div className="mb-4">
    <label htmlFor="inventoryQuantity" className="block text-sm font-medium mb-1">Quantity</label>
    <input
      type="number"
      id="inventoryQuantity"
      name="inventoryQuantity"
      value={ticketData.inventoryQuantity}
      onChange={handleInputChange}
      min="0"
      className="block w-full p-2 text-sm bg-gray-700 text-white rounded focus:outline-none"
    />
  </div>
</div>


{/* Custom Fields Section */}
<div className="bg-gray-800 text-white p-4 rounded">
  <div className="mb-4">
    <label htmlFor="tripType" className="block text-sm font-medium mb-2">Trip Type</label>
    <select
      id="tripType"
      name="tripType"
      value={tripType}
      onChange={e => setTripType(e.target.value)}
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    >
      <option value="" disabled>Select an option</option>
      <option value="Round Trip">Round Trip</option>
      <option value="One Way">One Way</option>
      <option value="Charter">Charter</option>
      {/* More options can be added here */}
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="lineName" className="block text-sm font-medium mb-2">Line Name *</label>
    <select
      id="lineName"
      name="lineName"
      value={lineName}
      onChange={e => setLineName(e.target.value)}
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    >
      {/* Options will be fetched from the backend */}
      {lines.map((line) => (
        <option key={line._id} value={line.name}>
          {line.name}
        </option>
      ))}
    </select>
  </div>

{/* Departure Date */}
<div className="mb-4">
  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
  <input
    id="departureDate"
    type="datetime-local"
    name="departureDate"
    value={departureDate}
    onChange={e => setDepartureDate(e.target.value)}
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  />
</div>

{/* Return Date */}
<div className="mb-4">
  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
  <input
    id="returnDate"
    type="datetime-local"
    name="returnDate"
    value={returnDate}
    onChange={e => setReturnDate(e.target.value)}
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  />
</div>



  {/* Stops Input */}
<div className="mb-4">
  <label htmlFor="stops" className="block text-sm font-medium mb-2">Stops</label>
  <input
    id="stops"
    type="text"
    name="stops"
    value={ticketData.stops} // Assuming you have 'stops' state in ticketData
    onChange={handleInputChange}
    placeholder="e.g., Commack, Hicksville, Fresh Meadows"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  />
</div>

{/* 1st Pick Up Time */}
<div className="mb-4">
  <label htmlFor="firstPickUpTime" className="block text-sm font-medium mb-2">1st Pick Up Time</label>
  <input
    id="firstPickUpTime"
    type="datetime-local"
    name="firstPickUpTime"
    value={ticketData.firstPickUpTime} // Assuming you have 'firstPickUpTime' state in ticketData
    onChange={handleInputChange}
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  />
</div>

{/* 1st Pick Up Location Text Area */}
<div className="mb-4">
  <label htmlFor="firstPickUpLocation" className="block text-sm font-medium mb-2">1st Pick Up Location</label>
  <textarea
    id="firstPickUpLocation"
    name="firstPickUpLocation"
    value={ticketData.firstPickUpLocation} // Assuming you have 'firstPickUpLocation' state in ticketData
    onChange={handleInputChange}
    placeholder="Enter the first pick up location"
    rows="3"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  ></textarea>
</div>

 {/* Second Pick Up Time Input */}
 <div className="mb-4">
    <label htmlFor="secondPickUpTime" className="block text-sm font-medium mb-2">2nd Pick Up Time</label>
    <input
      id="secondPickUpTime"
      type="datetime-local"
      name="secondPickUpTime"
      value={secondPickUpTime}
      onChange={e => setSecondPickUpTime(e.target.value)}
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    />
  </div>

  {/* Second Pick Up Location Input */}
  <div className="mb-4">
    <label htmlFor="secondPickUpLocation" className="block text-sm font-medium mb-2">2nd Pick Up Location</label>
    <textarea
      id="secondPickUpLocation"
      name="secondPickUpLocation"
      value={secondPickUpLocation}
      onChange={e => setSecondPickUpLocation(e.target.value)}
      placeholder="Enter the second pick up location"
      rows="3"
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    ></textarea>
  </div>

 {/* 3rd Pick Up Time Input */}
 <div className="mb-4">
    <label htmlFor="thirdPickUpTime" className="block text-sm font-medium mb-2">3rd Pick Up Time</label>
    <input
      id="thirdPickUpTime"
      type="datetime-local"
      name="thirdPickUpTime"
      value={secondPickUpTime}
      onChange={e => setThirdPickUpTime(e.target.value)}
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    />
  </div>

  {/* 3rd Pick Up Location Input */}
  <div className="mb-4">
    <label htmlFor="thirdPickUpLocation" className="block text-sm font-medium mb-2">3rd Pick Up Location</label>
    <textarea
      id="thirdPickUpLocation"
      name="thirdPickUpLocation"
      value={thirdPickUpLocation}
      onChange={e => setThirdPickUpLocation(e.target.value)}
      placeholder="Enter the second pick up location"
      rows="3"
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    ></textarea>
  </div>


 {/* Final Pick Up Time Input */}
 <div className="mb-4">
    <label htmlFor="finalPickUpTime" className="block text-sm font-medium mb-2">Final Pick Up Time</label>
    <input
      id="finalPickUpTime"
      type="datetime-local"
      name="finalPickUpTime"
      value={finalPickUpTime}
      onChange={e => setSecondPickUpTime(e.target.value)}
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    />
  </div>

  {/* Final Pick Up Location Input */}
  <div className="mb-4">
    <label htmlFor="finalPickUpLocation" className="block text-sm font-medium mb-2">Final Pick Up Location</label>
    <textarea
      id="finalPickUpLocation"
      name="finalPickUpLocation"
      value={secondPickUpLocation}
      onChange={e => setFinalPickUpLocation(e.target.value)}
      placeholder="Enter the Final pick up location"
      rows="3"
      className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
    ></textarea>
  </div>

  {/* 1st Drop Off Location (Return) Input */}
<div className="mb-4">
  <label htmlFor="firstDropOffLocationReturn" className="block text-sm font-medium mb-2">1st Drop Off Location (Return)</label>
  <textarea
    id="firstDropOffLocationReturn"
    name="firstDropOffLocationReturn"
    value={firstDropOffLocationReturn}
    onChange={e => setFirstDropOffLocationReturn(e.target.value)}
    placeholder="Enter the first drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* 2nd Drop Off Location (Return) Input */}
<div className="mb-4">
  <label htmlFor="secondDropOffLocationReturn" className="block text-sm font-medium mb-2">2nd Drop Off Location (Return)</label>
  <textarea
    id="secondDropOffLocationReturn"
    name="secondDropOffLocationReturn"
    value={secondDropOffLocationReturn}
    onChange={e => setSecondDropOffLocationReturn(e.target.value)}
    placeholder="Enter the first drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* 3rd Drop Off Location (Return) Input */}
<div className="mb-4">
  <label htmlFor="thirdDropOffLocationReturn" className="block text-sm font-medium mb-2">3rd Drop Off Location (Return)</label>
  <textarea
    id="thirdDropOffLocationReturn"
    name="thirdDropOffLocationReturn"
    value={thirdDropOffLocationReturn}
    onChange={e => setThirdDropOffLocationReturn(e.target.value)}
    placeholder="Enter the first drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* Final Drop Off Location (Return) Input */}
<div className="mb-4">
  <label htmlFor="finalDropOffLocationReturn" className="block text-sm font-medium mb-2">Final Drop Off Location (Return)</label>
  <textarea
    id="finalDropOffLocationReturn"
    name="finalDropOffLocationReturn"
    value={finalDropOffLocationReturn}
    onChange={e => setFinalDropOffLocationReturn(e.target.value)}
    placeholder="Enter the first drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-gray-700 rounded focus:outline-none"
  ></textarea>
</div>

  </div>
{/* Action Buttons */}
<div className="flex gap-4">
  <button type="submit" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md">{selectedTicket ? 'Update Ticket' : 'Create Ticket'}</button>
  {selectedTicket && (
        <>
  <button type="button" className="px-4 py-2 text-sm text-white bg-gray-500 rounded-md">Archive</button>
  <button type="button" className="px-4 py-2 text-sm text-white bg-red-600 rounded-md">Delete</button>
  <button type="button" className="px-4 py-2 text-sm text-white bg-green-600 rounded-md">Duplicate</button>
    </>
  )}
</div>
  </form>
</main>

)}


{isLineFormVisible && (
  <>
<aside className="w-1/4 overflow-y-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Name</th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Status</th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Products</th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Modified</th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Published</th>
              </tr>
            </thead>
            <tbody>
            {lines && lines.length > 0 ? (
              lines.map((line, index) => (
                line && line.name ? (
                <tr key={line._id || index}> 
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.name}</td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.status}</td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.products}</td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
        {new Date(line.modified).toLocaleString()}
      </td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
        {new Date(line.published).toLocaleString()}
      </td>
    </tr>
    ) : (
        <tr key={`empty-${index}`}>
          <td colSpan="5" className="text-center py-2 text-gray-700">Line data is missing</td>
        </tr>
      )
    ))
  
  
  ) : (
    <tr>
  <td colSpan="5" className="text-center py-2 text-gray-700">
    No lines available.
  </td>
</tr>
)}

</tbody>
          </table>
        </div>

      </aside>

      <main className="flex-1">
  <div className="p-4 sm:ml-64">
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">Create New Line</h1>
      <form onSubmit={handleLineSubmit} className="space-y-6">
        {/* Line Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="line-name">
            Name *
          </label>
          <input
            id="line-name"
            type="text"
            name="name"
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Line Name"
            value={newLine.name}
            onChange={(e) => setNewLine({ ...newLine, name: e.target.value })}
          />
        </div>
        {/* Status Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={newLine.status}
            onChange={(e) => setNewLine({ ...newLine, status: e.target.value })}
          >
            <option value="Published">Published</option>
            <option value="Unpublished">Unpublished</option>
          </select>
        </div>
        {/* Dates and Buttons */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="created">
              Created
            </label>
            <input
              id="created"
              type="datetime-local"
              name="created"
              value={creationTime.slice(0, -1)}
              readOnly
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"// Here you might need to adjust the logic to get the created date
              onChange={(e) => setNewLine({ ...newLine, created: e.target.value })}
            />
          </div>
          {/* Add inputs for 'Last edited' and 'Last published' similarly */}
        </div>
        {/* Action Buttons */}
        <div className="flex justify-start space-x-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create Line
        </button>
          <button type="button" className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Archive
          </button>
          <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Delete
          </button>
          <button type="button" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Duplicate
          </button>
        </div>
      </form>
    </div>
    </div>
  </main>
</>
)}


  

</div>
    </>
  );
}
  
export default AdminDashboard;
