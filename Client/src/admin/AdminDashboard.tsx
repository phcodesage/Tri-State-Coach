import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid'
import Multiselect from 'multiselect-react-dropdown';



const AdminDashboard: React.FC = () => {
const authToken = localStorage.getItem('token');
const navigate = useNavigate();
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [isTicketDropdownOpen, setIsTicketDropdownOpen] = useState(false);
const [lines, setLines] = useState([]);
const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);
const [isTicketListVisible, setIsTicketListVisible] = useState(false);
const [isLineFormVisible, setIsLineFormVisible] = useState(false);
const [isLineListVisible, setIsLineListVisible] = useState(false);
const [tripType, setTripType] = useState('');
const [lineName, setLineName] = useState('');
const [productsCount, setProductsCount] = useState(0);
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
const [firstPickUpTimeReturn, setFirstPickUpTimeReturn] = useState('');
const [firstPickUpLocationReturn, setFirstPickUpLocationReturn] = useState('');
const [firstDropOffLocationReturn, setFirstDropOffLocationReturn] = useState('');
const [secondPickUpTimeReturn, setSecondPickUpTimeReturn] = useState('');
const [secondPickUpLocationReturn, setSecondPickUpLocationReturn] = useState('');
const [secondDropOffLocationReturn, setSecondDropOffLocationReturn] = useState('');
const [thirdPickUpTimeReturn, setThirdPickUpTimeReturn] = useState('');
const [thirdPickUpLocationReturn, setThirdPickUpLocationReturn] = useState('');
const [thirdDropOffLocationReturn, setThirdDropOffLocationReturn] = useState('');
const [finalPickUpTimeReturn, setFinalPickUpTimeReturn] = useState('');
const [finalPickUpLocationReturn, setFinalPickUpLocationReturn] = useState('');
const [finalDropOffLocationReturn, setFinalDropOffLocationReturn] = useState('');
const [suggestedTipForDriverReturn, setSuggestedTipForDriverReturn] = useState('');
const [originalLines, setOriginalLines] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [selectedLines, setSelectedLines] = useState([]);
const [lineStatus, setLineStatus] = useState('Draft');
const [isSelecting, setIsSelecting] = useState(false);
const [selectedLineIds, setSelectedLineIds] = useState([]);
const [isAllSelected, setIsALLSelected] = useState(false);
// Initial state for filter criteria
const initialLineFilterCriteria = {
  status: 'All',
  published: 'All',
  created: 'All',
  modified: 'All'
};
const [isSelectActive, setIsSelectActive] = useState(false);
const [isLineFilterModalVisible, setIsLineFilterModalVisible] = useState(false);
const [LineFilterCriteria, setLineFilterCriteria] = useState(initialLineFilterCriteria);

const SVGArrow = (props:any) => (
  <svg
    className='w-6 h-6'
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#ffffff"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <style type="text/css">{" .st0{fill:#ffffff;} "}</style>
      <g id="Layer_1" />
      <g id="Layer_2">
        <g>
          <path
            className="st0"
            d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23 c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7 c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69 c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41 c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39 c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32 c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09 c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63 l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z"
          />
        </g>
      </g>
    </g>
  </svg>
);
const handleSearchChange = (event) => {
  const { value } = event.target;
  setSearchTerm(value);
};

// Helper function to convert filter option to the actual start date
// Helper function to convert filter option to the actual start date
const getLineStartDateForFilter = (filterValue) => {
  const now = new Date();
  switch (filterValue) {
    case 'Last 24 hours':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case 'Last 7 days':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case 'Last 30 days':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    default:
      // This effectively removes the filter
      return new Date(0); // Earliest date to ensure all records are included
  }
};

const toggleLineSelection = (lineId) => {
  const isSelected = selectedLines.includes(lineId);
  if (isSelected) {
    setSelectedLines(selectedLines.filter(id => id !== lineId));
  } else {
    setSelectedLines([...selectedLines, lineId]);
  }
};

const handleCancelClick = () => {
  setIsSelecting(false);
  setSelectedLines([]);
};

const selectAllLines = () => {
  setSelectedLines(lines.map((line) => line._id));
};

// Function to clear all selections
const clearLineSelection = () => {
  setSelectedLines([]);
};

const resetLineFormStates = () => {
  setNewLine({
    name: "",
    slug: "",
    status: "",
    products: []
  });
  setEditLine({
    name: "",
    slug: "",
    status: "",
    products: []
  });
  setSelectedProducts([]);
  setCurrentLineId(null);
  setEditMode(false);
  // Reset any additional state related to the line form here
};

const [suggestedTipForDriver, setSuggestedTipForDriver] = useState('');
const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);
const [isLineModalVisible, setIsLineModalVisible] = useState(false);
const { register, handleSubmit, watch, setValue, trigger, formState: { errors }, reset } = useForm();
const [lastAction, setLastAction] = useState('');
// At the top of your component, create a ref for the form
const TicketformRef = useRef(null);
const [lineTitle, setLineTitle] = useState(''); // State for line title
const [lineSlug, setLineSlug] = useState('');
const [dropdownOpen, setDropdownOpen] = useState(false);
const [pinnedTickets, setPinnedTickets] = useState([]);
const [editline, setEditLine] = useState({
  name: "",
  slug: "",
  status: "",
  products: []
})
// State to manage selected products for a line
const [selectedProducts, setSelectedProducts] = useState([]);
const lineDropDownRef = useRef<HTMLDivElement>(null);

const [editMode, setEditMode] = useState(false);
const [currentLineId, setCurrentLineId] = useState(null);
let timeoutId;
const isMounted = useRef(true);
const [automatedValues, setAutomatedValues] = useState({
  itemId: '',
  created: '',
  lastEdited: '',
  lastPublished: '',
});

const handleLineSlugChange = (e:any) => {
  const newSlug = e.target.value;
  setNewLine({ ...newLine, slug: newSlug });
  setValue('slug', newSlug); // Update the slug in the form
};

const handleTicketSlugChange = (e:any) => {
  const newTicketSlug = e.target.value;

  setValue('slug', newTicketSlug); // Update the slug in the form
};


useEffect(() => {
  // Define the function inside useEffect to use the ref and state directly
  const handleOutsideClick = (event) => {
    if (lineDropDownRef.current && !lineDropDownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener
  document.addEventListener('mousedown', handleOutsideClick);

  // Remove event listener on cleanup
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [isDropdownOpen]); // Depend on isDropdownOpen to re-attach the listener when it changes




const handleEditLineClick = async (line:any) => {
  setCurrentLineId(line._id); // Save the editing line's ID

  // Map the line's product IDs to the full product objects including names
  const productDetails = line.products.map(product => {
    // Find the product in the full list of products (tickets) by its ID
    const fullProduct = tickets.find(ticket => ticket._id === product.id);
    return {
      id: product.id,
      name: fullProduct ? fullProduct.name : 'Unknown Product', // Fallback to 'Unknown Product' if not found
      count: product.count,
    };
  });

  setEditLine({
    name: line.name,
    slug: line.slug,
    status: line.status,
    products: productDetails,
  });
  setNewLine({
    name: line.name,
    slug: line.slug,
    status: line.status,
    products: productDetails,
  });

  setSelectedProducts(productDetails); // Set the selected products for the line with full details
  setIsLineFormVisible(true); // Show the line form for editing
  setEditMode(true); // Enable edit mode
  // Automatically fill the lineName and lineSlug when editing a line
  setLineName(line.name); // Set line name to state
  setLineSlug(line.slug); // Set line slug to state

};


const handleRemoveProduct = (selectedList, removedItem) => {
  const newList = selectedList.filter(product => product.id !== removedItem.id);
  setSelectedProducts(newList); // Set the filtered list
  setProductsCount(newList.length); // Update the products count
};

const [loading, setLoading] = useState(false);
// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Function to refresh token
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const response = await axios.post('http://localhost:5000/refresh-token', { refreshToken });
    const { accessToken } = response.data;
    localStorage.setItem('token', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new Error('Failed to refresh token');
  }
};

// Add request interceptor to include the token in every request
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor to refresh token if expired
api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const newAccessToken = await refreshToken();
    axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
    return api(originalRequest);
  }
  return Promise.reject(error);
});


useState(() => {
  const newItemId = uuidv4(); // Generate a unique Item ID
  const timestamp = new Date().toISOString(); // Get the current timestamp

  setAutomatedValues({
    itemId: newItemId,
    created: timestamp,
    lastEdited: timestamp,
    lastPublished: timestamp,
  });
}, []);


// Function to check if the token is expired and redirect to login
const checkTokenExpiration = (response) => {
  if (response.status === 401 || response.data?.message === "jwt expired") {
    localStorage.removeItem('token'); // Remove the expired token
    navigate('http://localhost:5173/login'); // Redirect to the login page
  }
};

const handleImageChange = (e:any) => {
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


const refreshTokenIfNeeded = async () => {
  const authToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!authToken || !refreshToken) {
    navigate('/login');
    return;
  }

  try {
    const decodedToken = jwtDecode(authToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      const response = await axios.post('http://localhost:5000/refresh-token', { refreshToken });
      localStorage.setItem('token', response.data.accessToken);
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  }
};

useEffect(() => {
  refreshTokenIfNeeded();
}, []);


useEffect(() => {
  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tickets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      checkTokenExpiration(response); // Check if token has expired
      setTickets(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
      checkTokenExpiration(error.response); // Check if token has expired
    }
  };

  fetchTickets();
}, [authToken, navigate]);

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
  setIsLineFormVisible(false);
  setIsLineListVisible(true)
  setIsTicketListVisible(false);
  setIsTicketFormVisible(false) // Hide the ticket form when toggling the line form
};

const toggleTicketFormVisibility = () => {
  setIsTicketListVisible(!isTicketFormVisible);
  setIsLineFormVisible(false); // Hide the line form when toggling the ticket form\
  setIsLineListVisible(false);
};

 // or your state management
const [showCreateOptions, setShowCreateOptions] = useState(false);

  const handleCreateClick = () => {
    setShowCreateOptions(!showCreateOptions);
  };

  const handleSaveOption = (option) => {

   // Implement save functionality based on the option
   setShowCreateOptions(false);
 };




const initialTicketData = {
  productType: '',
  name: '',
  slug: '',
  description: '',
  categories: [],
  images: [],
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
  publishedOn: new Date().toISOString(),
};


  
const [newLine, setNewLine] = useState({
  name: "",
  slug: "",
  status: "", // default value
  products: [], // default value, assuming it's a new line with no products yet
  modified: new Date().toISOString(),
  published: new Date().toISOString(),
});

// Function to create a slug from the name
const createSlug = (name) => {
  if (!name) return '';
  // Replace spaces with '-' and convert to lowercase
  let slug = name.trim().toLowerCase().replace(/\s+/g, '-');
  // Add '-1' suffix if the slug is one word (no spaces)
  if (!slug.includes('-')) {
    slug = `${slug}-1`; // You may want to adjust the logic for numbering
  }
  return slug;
};


// Handler for when the name input changes
const handleNameChange = (e:any) => {
  const name = e.target.value;
  const slug = createSlug(name);
  setNewLine({ ...newLine, name, slug });
  
  // Update form values using setValue from useForm
  setValue('slug', slug, { shouldValidate: true });
  // Optionally trigger validation for the slug field
  trigger('slug');
};
useEffect (() => {
  fetchLines();
},[]);


  const fetchLines = async () => {
  if (isLineListVisible) {
    setLoading(true); // Start the loading (skeleton animation)

    // Set a minimum display time for the loading animation
    timeoutId = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 5000);

    try {
      const response = await axios.get('http://localhost:5000/api/lines', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      clearTimeout(timeoutId); // Clear the timeout as data has been fetched

      if (response.status !== 200) {
        throw new Error('Error fetching lines');
      }

      if (Array.isArray(response.data)) {
        if (isMounted) {
          setLines(response.data);
          setOriginalLines(response.data); // Keep a copy of the original, unfiltered lines
          setLoading(false);// Stop the loading if data is fetched
        }
      } else {
        console.error('Data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching lines:', error);
      // Keep loading state as is to continue showing animation
    }
    
  }
  
};



useEffect(() => {
  let isMounted = true;

  if (isLineListVisible) {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 5000);

    // Call fetchLines inside the useEffect
    fetchLines().catch(console.error);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }
}, [isLineListVisible, authToken]);// Use isLineListVisible instead of isLineFormVisible if it's the correct dependency

  // Fetch a single line data for editing
  const fetchLineData = async (id) => {
    try {
      const response = await api.get(`/lines/${id}`);
      const lineData = response.data;
      setNewLine(lineData);
      // Add other necessary fields like selectedProducts, etc.
      setSelectedProducts(lineData.products); // Assuming `products` is an array of product objects
      // Set the edit mode to true
      setEditMode(true);
    } catch (error) {
      console.error('Error fetching line data:', error);
    }
  };

  // Handler to initiate editing mode
  const handleEditLine = (line) => {
    setCurrentLineId(line._id);
    fetchLineData(line._id);
    setIsLineFormVisible(true); // Show the line form for editing
    
  };


  const submitLineData = async (lineData, isEdit) => {
    const apiUrl = isEdit ? `http://localhost:5000/api/lines/${currentLineId}` : 'http://localhost:5000/api/lines';
    const method = isEdit ? 'patch' : 'post';
  
    try {
      const response = await axios({
        method: method,
        url: apiUrl,
        data: lineData,
        headers: { 'Authorization': `Bearer ${authToken}` },
      });
  
      // Handle the response
      if (response.status === 200 || response.status === 201) {
        // Update local state
        setLines(currentLines => isEdit
          ? currentLines.map(line => line._id === currentLineId ? response.data : line)
          : [...currentLines, response.data]
        );
        setIsLineFormVisible(false);
        reset();
        setEditMode(false);
        setCurrentLineId(null);
        setLastAction('');
      }
    } catch (error) {
      console.error('Error submitting line:', error);
      // Handle error
    }
  };
  
  const createLine = () => {
    const lineData = {
      ...newLine,
      products: selectedProducts.map(p => ({ id: p.id, count: p.count })),
      productsCount: selectedProducts.length,
      // Add any other data that's relevant when creating a new line
    };
    submitLineData(lineData, false);
  };
  
  const updateLine = () => {
    const lineData = {
      ...editLine, // Assuming editLine is the state containing the current line data being edited
      products: selectedProducts.map(p => ({ id: p.id, count: p.count })),
      productsCount: selectedProducts.length,
      // Add any other data that's relevant when updating a line
    };
    submitLineData(lineData, true);
  };
  


// Form submission handler for Line
const handleCreateLineSubmission = handleSubmit(async (data) => {
  // Determine the status based on the lastAction before form submission


  const lineData = {
    ...data,
     // Apply determined status here
    products: selectedProducts.map(product => ({
      id: product.id,
      name: product.name,
      count: product.count
    })),
    productsCount: selectedProducts.reduce((acc, curr) => acc + curr.count, 0),
    ...(currentLineId ? {} : automatedValues),
    status: lineStatus,
  };

  const apiUrl = `http://localhost:5000/api/lines${currentLineId ? `/${currentLineId}` : ''}`;
  const method = currentLineId ? 'patch' : 'post';
  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios({ url: apiUrl, method, data: lineData, headers });
    if (response.status === 200 || response.status === 201) {
      // Successfully created or updated the line
      setLines(currentLines => currentLineId ? currentLines.map(line => line._id === currentLineId ? response.data : line) : [...currentLines, response.data]);
      setIsLineFormVisible(false);
      reset();
      setEditMode(false);
      setCurrentLineId(null);
      setLastAction(''); // Reset lastAction to prevent repeated submissions
    }
  } catch (error) {
    console.error('Error submitting line:', error);
  }
});


const handleLineSubmit = handleSubmit(async (data) => {
  const lineData = {
    ...data,
    products: selectedProducts.map(product => ({
      id: product.id,
      name: product.name,
      count: product.count
    })),
    productsCount: selectedProducts.reduce((acc, curr) => acc + curr.count, 0),
    status: lineStatus, // Use the lineStatus state
    ...(currentLineId ? {} : automatedValues),
  };

  // ... rest of the submission logic
});
    

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

useEffect(() => {
  let logoutTimer = setTimeout(() => {
    // Logout user after 2 hours
    handleLogout();
  }, 2 * 60 * 60 * 1000); // 2 hours

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      handleLogout();
    }, 2 * 60 * 60 * 1000);
  };

  window.addEventListener('mousemove', resetTimer);
  window.addEventListener('keypress', resetTimer);

  return () => {
    clearTimeout(logoutTimer);
    window.removeEventListener('mousemove', resetTimer);
    window.removeEventListener('keypress', resetTimer);
  };
}, []);

useEffect(() => {
  if (Array.isArray(selectedProducts)) { // Ensure selectedProducts is an array
    const totalProductsCount = selectedProducts.reduce((sum, product) => {
      return sum + product.count;
    }, 0);

    setProductsCount(totalProductsCount);
  }
}, [selectedProducts]);

const handleProductSelect = (selectedList, selectedItem) => {
  // Update the state with the selected products, including their id, name, and count
  setSelectedProducts(selectedList.map(product => ({
    id: product._id, // Use _id for MongoDB documents
    name: product.name, // Include the product name
    count: product.count || 1  // Default count to 1, adjust as necessary
  })));
};



const handleLinePublish = () => {
  setLastAction('publish');
  setLineStatus('Published');
};

const handleLineDraft = () => {
  setLastAction('draft');
  setLineStatus('Draft');
};
const handleTicketPublish = () => {
  // Set the lastAction state to 'publish'
  setLastAction('publish');
};

const handleTicketDraft = () => {
  // Set the lastAction state to 'draft'
  setLastAction('draft');
};

const handleInputChange = (event, index, value) => {
  setSelectedProducts(selectedProducts.map((product, i) => {
    if (i === index) {
      return { ...product, [event.target.name]: value };
    }
    return product;
  }));
};

const handleTicketInputChange = (event) => {
  const { name, value, type, files } = event.target;
  
  if (type === 'file') {
    // Assuming you're handling single file uploads for simplicity
    const reader = new FileReader();
    reader.onloadend = () => {
      setTicketData(prevState => ({
        ...prevState,
        images: [...prevState.images, reader.result]
      }));
    };
    reader.readAsDataURL(files[0]);
  } else {
    setTicketData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));

    // Automatically generate and update slug when name changes
    if (name === 'name') {
      const slug = value.trim().toLowerCase().replace(/\s+/g, '-').concat(value.split(' ').length === 1 ? '-1' : '');
      setTicketData(prevState => ({
        ...prevState,
        slug: slug,
      }));
    }
  }
};


interface ITicketFormProps {
  initialData?: ITicketFormData; // Optional, for edit mode
  onSubmit: (data: ITicketFormData) => void; // Function to call on form submit
}

interface ITicketFormData {
  productType: 'Physical' | 'Digital' | 'Service' | 'Advance';
  name: string;
  slug: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  compareAtPrice?: number;
  sku: string;
  trackInventory: boolean;
  inventoryQuantity?: number;
  inventoryPolicy?: string;
  requiresShipping: boolean;
  createdOn?: Date;
  updatedOn?: Date;
  publishedOn?: Date;
}


  
  // Example submit function
  const onTicketSubmit: SubmitHandler<ITicketFormData> = async (data) => {
    if (TicketformRef.current) {
      // This triggers the form submission
      TicketformRef.current.submit();
    }
    try {
      // Determine if it's a new ticket or an update based on some condition, e.g., if there's an ID
      const isEdit = data.slug; // Simplistic approach for illustration
      
      const response = await axios({
        method: isEdit ? 'PATCH' : 'POST',
        url: `http://localhost:5000/api/tickets${isEdit ? `/${data.slug}` : ''}`,
        data,
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });


      alert('Ticket submitted successfully!');
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('Failed to submit the ticket. Please check the console for more details.');
    }
  }


  useEffect(() => {
    // Assume this data comes from somewhere, like an edit button click
    const ticketDataToEdit: ITicketFormData | null = null; // Placeholder for actual data
    
    if (ticketDataToEdit) {
      Object.keys(ticketDataToEdit).forEach((fieldName) => {
        setValue(fieldName as keyof ITicketFormData, ticketDataToEdit[fieldName]);
      });
    }
  }, [setValue]);


  const [ticketData, setTicketData] = useState(initialTicketData);


// Function to reset all related form states
const resetTicketFormStates = () => {
  setTicketData(initialTicketData); // Reset ticketData to its initial state
  setSelectedTicket(null); // Clear any selected ticket
  setSelectedImage(null); // Clear selected image
  setIsTicketFormVisible(false); // Close the form/modal
  // Add any additional resets for other state variables here
};

const handleTicketCancel = () => {
  reset(); // This will reset react-hook-form fields
  resetTicketFormStates(); // This will reset custom state management
  setIsTicketModalVisible(false)
};

const handleLineCancel = () => {
  reset(); // This will reset react-hook-form fields
  resetLineFormStates(); // This will reset custom state management
  setIsLineModalVisible(false)
};

const handleEditLineSubmission = async () => {
  // Construct the line data from the state
  const lineDataToUpdate = {
    name: lineName, // Assuming you're storing the edited line name in `lineName`
    slug: lineSlug, // Assuming you're storing the edited line slug in `lineSlug`
    status: editline.status, // Status from the existing line data
    products: selectedProducts.map(p => ({ id: p.id, count: p.count })),
    // ... include other line details that are being edited
  };

  // Call the API to update the line
  try {
    const response = await axios.patch(`http://localhost:5000/api/lines/${currentLineId}`, lineDataToUpdate, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (response.status === 200) {
      // Update the lines state with the new line data
      setLines(currentLines =>
        currentLines.map(line => line._id === currentLineId ? { ...line, ...lineDataToUpdate } : line)
      );
      setIsLineFormVisible(false); // Hide the form after successful edit
      setEditMode(false); // Exit edit mode
      // Reset other states if necessary
    }
  } catch (error) {
    console.error('Failed to update the line:', error);
    // Handle error
  }
};

const deleteLine = async (lineId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/lines/${lineId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });

    if (response.status === 200) {
      // Filter out the deleted line from the state
      setLines(currentLines => currentLines.filter(line => line._id !== lineId));
      // Any other state updates needed post-deletion
    }
  } catch (error) {
    console.error('Error deleting line:', error);
  }
};

useEffect(() => {
  // Debounce the search for better performance
  const timeoutId = setTimeout(() => {
    if (searchTerm.trim() === '') {
      // If the search term is empty, reset the lines to the default
      fetchLines();
    } else {
      // Filter lines based on the search term
      const filteredLines = lines.filter((line) =>
        line.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setLines(filteredLines);
    }
  }, 500); // Wait 500ms after the user stops typing before applying the search

  // Cleanup the timeout on component unmount
  return () => clearTimeout(timeoutId);
}, [searchTerm]);

const handleFilterLineClick = () => {
  setIsLineFilterModalVisible(true);

  // Here you would typically set some state to show a filter modal or dropdown
};

const handleLineFilterCloseModal = () => {
  setIsLineFilterModalVisible(false);
};

const handleLineResetFilters = () => {
  setLineFilterCriteria(initialLineFilterCriteria);
  fetchLines();
};
const handleLineApplyFilters = () => {
  setIsLineFilterModalVisible(false); // Close the modal after applying filters
  applyLineFiltersBasedOnCriteria(); // Apply the filters based on current criteria
};

const applyLineFiltersBasedOnCriteria = () => {
  setLoading(true); // Indicate the start of a filtering operation

  const filteredLines = originalLines.filter((line) => {
    const matchesStatus = LineFilterCriteria.status === 'All' || line.status === LineFilterCriteria.status;

    // Convert line dates from strings to Date objects if necessary
    const linePublishedDate = new Date(line.lastPublished);
    const lineCreatedDate = new Date(line.created);
    const lineLastEditedDate = new Date(line.lastEdited);

    // Calculate start dates for each filter option
    const publishedStart = getLineStartDateForFilter(LineFilterCriteria.published);
    const createdStart = getLineStartDateForFilter(LineFilterCriteria.created);
    const modifiedStart = getLineStartDateForFilter(LineFilterCriteria.modified);

    // Check if the line matches the date filters
    const matchesPublished = LineFilterCriteria.published === 'All' || linePublishedDate >= publishedStart;
    const matchesCreated = LineFilterCriteria.created === 'All' || lineCreatedDate >= createdStart;
    const matchesModified = LineFilterCriteria.modified === 'All' || lineLastEditedDate >= modifiedStart;

    return matchesStatus && matchesPublished && matchesCreated && matchesModified;
  });

  setLines(filteredLines); // Update the state with the filtered lines
  setLoading(false); // Indicate the end of the filtering operation
};


const handleLineSelectClick = () => {
  setIsSelectActive(!isSelectActive);
  if (!isSelectActive) {
    clearLineSelection();
  }
};


const handleSelectClick = () => {
  setIsSelecting(!isSelecting);
  // Clear selections only when entering the selection mode
  if (!isSelecting) {
    setSelectedLines([]);
  }
};




const handleExportClick = () => {
  // Export the selected lines to CSV
  // This is a simplified example and would need a proper CSV generation and download logic

};

const handleImportClick = async (event) => {
  const file = event.target.files[0];
  // Implement the logic to read the file and import the data

};

const handleSettingsClick = () => {
  // Navigate to settings page or open settings modal

};

const lineApplyFilters = () => {
  if (LineFilterCriteria.status === 'All' && 
      LineFilterCriteria.published === 'All' &&
      LineFilterCriteria.created === 'All' &&
      LineFilterCriteria.modified === 'All') {
    // If all criteria are set to 'All', reset to the original list
    fetchLines(); // Assuming fetchLines sets the lines with setLines
    return; // Exit the function early
  }
  setLoading(true); // Start loading

  // A helper function to check if a date is within the last X days
  const isDateWithinDays = (date, days) => {
    const now = new Date();
    const pastDate = new Date(now.setDate(now.getDate() - days));
    return new Date(date) >= pastDate;
  };

  // Convert filter criteria to numbers as necessary
  const daysForPublished = LineFilterCriteria.published === 'All' ? null : parseInt(LineFilterCriteria.published);
  const daysForCreated = LineFilterCriteria.created === 'All' ? null : parseInt(LineFilterCriteria.created);
  const daysForModified = LineFilterCriteria.modified === 'All' ? null : parseInt(LineFilterCriteria.modified);

  // Filter lines based on the selected criteria
  const filteredLines = lines.filter((line) => {
    const matchesStatus = LineFilterCriteria.status === 'All' || line.status === LineFilterCriteria.status;
    const matchesPublished = daysForPublished === null || isDateWithinDays(line.published, daysForPublished);
    const matchesCreated = daysForCreated === null || isDateWithinDays(line.created, daysForCreated);
    const matchesModified = daysForModified === null || isDateWithinDays(line.modified, daysForModified);

    return matchesStatus && matchesPublished && matchesCreated && matchesModified;
  });

  // Set the filtered lines to state
  setLines(filteredLines);
  setLoading(false); // Stop loading
};


const resetLineModalFilters = () => {
  setLineFilterCriteria({
    status: 'All',
    published: 'All',
    created: 'All',
    modified: 'All'
  });

};

const getDateRange = (filterOption) => {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (filterOption) {
    case 'Last 24 hours':
      return { start: new Date(now.getTime() - 24 * 60 * 60 * 1000), end: now };
    case 'Last 7 days':
      return { start: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), end: now };
    case 'Last 30 days':
      return { start: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), end: now };
    default:
      return { start: startOfToday, end: now };
  }
};

const handleFilterChange = (filterType, value) => {
  setLineFilterCriteria(prev => ({ ...prev, [filterType]: value }));
};

// Example usage of handleFilterChange function when a radio input changes
const handlelineStatusFilterChange = (event) => {
  handleFilterChange('status', event.target.value);
};
useEffect(() => {
  // Check if lastAction has been set, indicating a submit action should follow
  if (lastAction === 'publish' || lastAction === 'draft') {
    handleSubmit(handleCreateLineSubmission)();
  }
}, [lastAction, lineStatus]); // Depend on lastAction and lineStatus

const toggleLineSelectMode = () => {
  setIsSelecting(!isSelecting);
  // Optionally clear selections when exiting select mode
  if (isSelecting) setSelectedLineIds([]);
};

const handleLineSelect = (lineId) => {
  // Toggle selection
  setSelectedLineIds(prevSelected => {
    if (prevSelected.includes(lineId)) {
      // Remove lineId from selection
      return prevSelected.filter(id => id !== lineId);
    } else {
      // Add lineId to selection
      return [...prevSelected, lineId];
    }
  });
};


const handleSelectAllLines = () => {
  // If not all lines are currently selected, select them all
  if (selectedLines.length < lines.length) {
    setSelectedLines(lines.map(line => line._id));
  } else {
    // If all lines are currently selected, clear selection
    setSelectedLines([]);
  }
};


const isSelected = (lineId) => {
  return selectedLines.includes(lineId);
};



  return (
    <>
    <div className="flex flex-row min-h-screen bg-zinc-900">
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white-500 rounded-lg sm:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200   0">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-zinc-200 shadow-lg">
   <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 overflow-y-auto bg-zinc-200 shadow-xl">
      <ul className="space-y-2 font-medium">
         <li>
         <a href="/admin" className="flex items-center p-2 space-x-3 rounded-lg hover:bg-zinc-100 group">
               <span className="ms-3 text-xl font-bold">Ecommerce</span>
            </a>
         </li>
         <li>
         <a href="#" onClick={toggleTicketFormVisibility} className="flex items-center p-2 space-x-3 rounded-lg hover:bg-zinc-100 group">
            <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M24.782 1.606h-7.025l-16.151 16.108 12.653 12.681 16.135-16.093v-7.096l-5.613-5.6zM29.328 13.859l-15.067 15.027-11.147-11.171 15.083-15.044h6.143l4.988 4.976v6.211z" fill="#000000"> </path> <path d="M21.867 7.999c0 1.173 0.956 2.128 2.133 2.128s2.133-0.954 2.133-2.128c0-1.174-0.956-2.129-2.133-2.129s-2.133 0.955-2.133 2.129zM25.066 7.999c0 0.585-0.479 1.062-1.066 1.062s-1.066-0.476-1.066-1.062c0-0.586 0.478-1.063 1.066-1.063s1.066 0.477 1.066 1.063z" fill="#000000"> </path> </g></svg>
               <span className="flex-1">Tickets</span>
               <span className="inline-flex items-center justify-center w-6 h-6 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">{tickets.length} items</span>
            </a>
         </li>
         <li>
            <a href="#" onClick={toggleLineFormVisibility} className="flex items-center p-2 text-white-900 rounded-lg  hover:bg-zinc-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Lines</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full  0">{lines.length} items</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white-900 rounded-lg  hover:bg-zinc-100  group">
            <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-white-900 rounded-lg  hover:bg-zinc-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li className="absolute bottom-0 w-full">
            <button onClick={handleLogout} className="flex items-center p-2 text-white-900 rounded-lg  hover:bg-zinc-100  group w-full">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
            </button>
         </li>
      </ul>
   </div>
</aside>
<div className="ml-64 flex flex-col flex-grow">
{/* List of tickets */}
<div className="flex-grow flex flex-row bg-zinc-800 text-white">
{isTicketListVisible && (
  <div className={`flex flex-col ${isTicketFormVisible ? 'w-1/3' : 'w-full'} ml-auto bg-zinc-800 text-white transition-width duration-300 ease-in-out`}>
  <div className="p-4 flex justify-between items-center">
    <h2 className="text-xl font-bold">Tickets</h2>
    {!isTicketFormVisible && (
      <div className="flex items-center">
        {/* Buttons go here */}
        <input type="text" placeholder="Search tickets..." className="text-sm rounded p-2 bg-zinc-700" />
        <button className="ml-2 bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Filter</button>
        {!isSelecting && (
      <button className="ml-2 bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleSelectClick}>Select</button>
    )}
        <button className="ml-2 bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Export</button>
        <button className="ml-2 bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Import</button>
        <button className="ml-2 bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Settings</button>
        <button
  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  onClick={() => {
    // Show the ticket form
    setIsTicketFormVisible(true);
    // Reset form fields using react-hook-form's reset function
    reset();
    // Reset custom state management for the ticket data
    setTicketData(initialTicketData);
    // Additionally, reset any other state variables related to the ticket form here
  }}
>
          + New Ticket
        </button>
      </div>
    )}
  </div>
    <ul className="overflow-y-auto">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm  divide-zinc-200">
        <thead>
          <tr>
            <th className="text-left font-medium">Name</th>
            {!isTicketFormVisible && (
              <>
            <th className="text-left font-medium">Status</th>
            <th className="text-left font-medium">Price</th>
            <th className="text-left font-medium">Product Type</th>
            <th className="text-left font-medium">Modified</th>
            <th className="text-left font-medium">Published</th>
            <th className="text-left font-medium">Actions</th>
            </>
            )}
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr
              key={ticket._id}
              style={{ backgroundColor: index % 2 === 0 ? '#292929' : '#2D2D2D' }}
              onClick={() => handleTicketSelect(ticket)}
              className="hover:bg-zinc-700 cursor-pointer"
            >
              <td className="p-2">{ticket.name}</td>
              <td className={`p-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-zinc-300 text-white-800'}`}>
                {ticket.status}
              </td>
              {/* Other cells... */}
              <td className="p-2 text-left">
                <button
                  type="button"
                  onClick={(e:any) => {
                    e.stopPropagation();
                    pinTicket(ticket._id);
                  }}
                  disabled={isTicketFormVisible}
                  className="text-white-600 hover:text-white-900"
                >
                  {/* SVG or Font Icon for Pin */}
                  📌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </ul>
  </div>
)}


{isTicketFormVisible && (
  <main className="w-2/3 bg-zinc-800 text-white p-4 overflow-y-auto">
  {/* Header starts here */}

  <div className="flex items-center justify-between mb-8">
  {/* Back arrow and title */}
  <div className="flex items-center">
  <button
  className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 flex items-center justify-center"
  onClick={() => setIsTicketFormVisible(false)}
  style={{ width: '50px', height: '50px' }} // Set the button size explicitly if you need a square button
>
  {/* Back arrow icon */}
  <SVGArrow />
</button>
    <h2 className="text-xl font-semibold text-white">{ticketData.name || 'New Line'}</h2>
  </div>

  {/* Action Buttons */}
<div className="flex relative text-left">
  {/* Cancel button */}
  <button
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-5 py-2 mx-4"
          onClick={() => setIsTicketModalVisible(true)}
        >
          Cancel
        </button>

  <button
    type="submit"
    onClick={() => setIsTicketDropdownOpen(!isTicketDropdownOpen)}
    className="inline-flex justify-center w-full rounded-md border border-zinc-300 shadow-sm px-4 py-2 bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-zinc-700"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
  >
    {editMode ? 'Save' : 'Create'}
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>

  {/* Dropdown menu, show/hide based on menu state. */}
<div
  ref={TicketformRef}
  className={`${isTicketDropdownOpen ? '' : 'hidden'} origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none`}
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="menu-button"
  tabIndex="-1"
>
<div className="relative py-1" role="none">
  {/* Button for Publish */}
  <div className="group">
    <button
      onClick={() => {
        document.getElementById('ticketForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        handleTicketPublish();
      }}
      className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 relative"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-0"
    >
      {editMode ? 'Save' : 'Publish'}
    </button>
    <div className="absolute hidden group-hover:block px-2 py-1 text-sm text-white bg-black rounded-md shadow-lg -bottom-10 w-56">
      Publish the item to your live site.
    </div>
  </div>

  {/* Button for Save as draft */}
  <div className="group mt-1">
    <button
      onClick={() => {
        handleTicketDraft();
        handleSubmit(onTicketSubmit)
      }}
      className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 relative"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-1"
    >
      Save as draft
    </button>
    <div className="absolute hidden group-hover:block px-2 py-1 text-sm text-white bg-black rounded-md shadow-lg -bottom-10 w-56">
      Save the item without publishing it.
    </div>
  </div>
</div>
</div>
</div>
</div>

  {/* Header ends here */}

  {isTicketModalVisible && (
  <div className="fixed inset-0 bg-zinc-700 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" style={{zIndex: 999}}>
    <div className="bg-zinc-900 rounded-lg max-w-sm mx-auto p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-4">Exit Without Saving?</h2>
      <p>This item can't be saved because it has errors. Would you like to exit without saving?</p>
      <div className="flex justify-end mt-4">
        <button onClick={() => setIsTicketModalVisible(false)} className="bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-l">
          Keep editing
        </button>
        <button onClick={handleTicketCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
          Exit Without Saving
        </button>
      </div>
    </div>
  </div>
)}

  <form onSubmit={handleSubmit(onTicketSubmit)} id="ticketForm" className="h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 bg-zinc-800 text-white p-4 rounded">
    {/* Product Type Dropdown */}
    <div className="mb-4">
      <label htmlFor="productType" className="block text-sm font-medium mb-2">Product Type</label>
      <select
        id="productType"
        name="productType"
        value={ticketData.productType}
        onChange={handleTicketInputChange}
        className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    onChange={handleTicketInputChange}
    placeholder="Ticket Name"
    required
    className="block w-full p-2 text-sm bg-zinc-700 text-white rounded focus:outline-none"
  />
</div>


{/* Slug Input */}
<div>
  <label className="block text-sm font-medium text-white mb-1" htmlFor="slug">Slug <span className="text-red-700">*</span></label>
  <input
    id="slug"
    {...register('slug', { required: 'Slug is required' })}
    className="w-full p-2 border bg-black border-zinc-300 rounded-md focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
    placeholder='slug'
    value={ticketData.slug || ''} 
    onChange={handleTicketSlugChange}
  />
  {errors.slug && <span className="text-red-500">{errors.slug.message}</span>}
  <p className="text-white mt-2">www.tri-statecoach.com/category/{ticketData.slug || ''}</p>
</div>


    {/* Description TextArea */}
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
      <textarea
        id="description"
        name="description"
        value={ticketData.description}
        onChange={handleTicketInputChange}
        placeholder="Description"
        className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
        className="w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
            className="flex items-center px-3 py-1 text-sm bg-zinc-600 rounded-full"
          >
            {category}
            <button
              type="button"
              onClick={() => handleRemoveCategory(category)}
              className="flex items-center justify-center w-4 h-4 ml-2 rounded-full hover:text-white-300"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>


{/* Media Section */}
<div className="mb-4 bg-zinc-100 p-4 rounded">
  <div className="mb-4">
    <label className="block text-sm font-medium text-white-700 mb-2">Main image</label>
    {selectedImage ? (
      <div className="flex items-center space-x-2 mb-2">
        <img src={selectedImage} alt="Selected" className="h-20 w-20 object-cover rounded" />
        <div className="flex flex-col">
          <span className="text-xs font-medium">Filename: {selectedImage.name}</span>
          <span className="text-xs text-white-500">Size: {selectedImage.size} KB</span>
        </div>
        <button type="button" onClick={() => setSelectedImage(null)} className="text-white-500 hover:text-white-700">
          Replace
        </button>
        <button type="button" onClick={deleteImage} className="text-white-500 hover:text-white-700">
          Delete
        </button>
      </div>
    ) : (
      <div className="flex justify-center items-center w-full">
        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-zinc-200 hover:border-zinc-400 rounded-lg group">
          <div className="flex flex-col items-center justify-center pt-7">
            <svg className="w-10 h-10 text-white-400 group-hover:text-white-600" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 8H12a4 4 0 0 0-4 4v20m32-12v8m0 0v8a4 4 0 0 1-4 4H12m28-12H8m20-28v12m0 0H20m8 0h8"></path></svg>
            <p className="pt-1 text-sm tracking-wider text-white-400 group-hover:text-white-600">
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
<div className="bg-zinc-800 p-4 rounded text-white">
  <h4 className="text-lg font-semibold mb-4">Billing</h4>
  <div className="flex items-center gap-4 mb-4">
    <div className="flex-1">
      <label htmlFor="price" className="block text-sm font-medium mb-1">Price <span className='text-red-500'>*</span></label>
      <div className="flex items-center bg-zinc-700 rounded">
        <span className="pl-2 text-white-300">$</span>
        <input
          id="price"
          type="number"
          name="price"
          value={ticketData.price}
          onChange={handleTicketInputChange}
          placeholder="0.00"
          className="flex-1 bg-transparent text-white p-2 rounded focus:ring-0"
        />
      </div>
    </div>
    <div className="flex-1">
      <label htmlFor="compareAtPrice" className="block text-sm font-medium mb-1">Compare-at price</label>
      <div className="flex items-center bg-zinc-700 rounded">
        <span className="pl-2 text-white-300">$</span>
        <input
          id="compareAtPrice"
          type="text"
          name="compareAtPrice"
          value={ticketData.compareAtPrice}
          onChange={handleTicketInputChange}
          placeholder="0.00"
          className="flex-1 bg-transparent text-white p-2 rounded focus:ring-0"
        />
      </div>
    </div>
  </div>
</div>



{/* Product Tax Class */}
<div>
  <label htmlFor="productTaxClass" className="block mb-2 text-sm font-medium text-white-700">Product Tax Class</label>
  <select
    id="productTaxClass"
    name="productTaxClass"
    value={ticketData.productTaxClass}
    onChange={handleTicketInputChange}
    className="block w-full p-2 mb-2 text-sm text-white-700 bg-zinc border border-zinc-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
  >
    <option value="Standard">Standard automatic tax calculation</option>
    <option value="Exempt">Exempt from taxes</option>
    {/* Additional tax class options */}
  </select>
  <p className="text-xs text-white-500">Enable tax calculation to collect sales tax from your customers.</p>
</div>
{/* Identifiers Section */}
<div>
  <label htmlFor="sku" className="block mb-2 text-sm font-medium text-white-700">SKU</label>
  <input
    id="sku"
    type="text"
    name="sku"
    value={ticketData.sku}
    onChange={handleTicketInputChange}
    className="block w-full p-2 mb-2 text-sm text-white-700 bg-zinc border border-zinc-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
  />
</div>

{/* Inventory Section */}
<div className="mb-4 flex items-center justify-between">
  <span className="text-sm font-medium text-white">Track inventory</span>
  <label htmlFor="trackInventory" className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      id="trackInventory"
      name="trackInventory"
      className="sr-only peer"
      checked={ticketData.trackInventory}
      onChange={(e:any) => setTicketData({ ...ticketData, trackInventory: e.target.checked })}
    />
    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc after:border-zinc-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-blue-600"></div>
    <span className="ml-3 text-sm font-medium text-white e">
      {ticketData.trackInventory ? 'YES' : 'NO'}
    </span>
  </label>
</div>

<div className="mb-4">
    <label htmlFor="inventoryQuantity" className="block text-sm font-medium mb-1">Quantity</label>
    <input
      type="number"
      id="inventoryQuantity"
      name="inventoryQuantity"
      value={ticketData.inventoryQuantity}
      onChange={handleTicketInputChange}
      min="0"
      className="block w-full p-2 text-sm bg-zinc-700 text-white rounded focus:outline-none"
    />
  </div>


{/* Custom Fields Section */}
<div className="bg-zinc-800 text-white p-4 rounded">
  <div className="mb-4">
    <label htmlFor="tripType" className="block text-sm font-medium mb-2">Trip Type</label>
    <select
      id="tripType"
      name="tripType"
      value={tripType}
      onChange={e => setTripType(e.target.value)}
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
    >
      <option value="" disabled>Select an option</option>
      <option value="Round Trip">Round Trip</option>
      <option value="One Way">One Way</option>
      <option value="Charter">Charter</option>
      {/* More options can be added here */}
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="lineName" className="block text-sm font-medium mb-2">Line Name <span className='text-red-500'>*</span></label>
    <select
      id="lineName"
      name="lineName"
      value={lineName}
      onChange={e => setLineName(e.target.value)}
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
  <label htmlFor="departureDate" className="block text-sm font-medium text-white mb-2">Departure Date</label>
  <input
    id="departureDate"
    type="datetime-local"
    name="departureDate"
    value={departureDate}
    onChange={e => setDepartureDate(e.target.value)}
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* Return Date */}
<div className="mb-4">
  <label htmlFor="returnDate" className="block text-sm font-medium text-white mb-2">Return Date</label>
  <input
    id="returnDate"
    type="datetime-local"
    name="returnDate"
    value={returnDate}
    onChange={e => setReturnDate(e.target.value)}
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    onChange={handleTicketInputChange}
    placeholder="e.g., Commack, Hicksville, Fresh Meadows"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    onChange={handleTicketInputChange}
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 1st Pick Up Location Text Area */}
<div className="mb-4">
  <label htmlFor="firstPickUpLocation" className="block text-sm font-medium mb-2">1st Pick Up Location</label>
  <textarea
    id="firstPickUpLocation"
    name="firstPickUpLocation"
    value={ticketData.firstPickUpLocation} // Assuming you have 'firstPickUpLocation' state in ticketData
    onChange={handleTicketInputChange}
    placeholder="Enter the first pick up location"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
      className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
    ></textarea>
  </div>

  {/* First Drop Off Location Input */}
<div className="mb-4">
  <label htmlFor="firstDropOffLocation" className="block text-sm font-medium mb-2">1st Drop Off Location</label>
  <input
    id="firstDropOffLocation"
    type="text"
    name="firstDropOffLocation"
    value={firstDropOffLocation}
    onChange={e => setFirstDropOffLocation(e.target.value)}
    placeholder="Enter the first drop off location"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* Second Drop Off Location Input */}
<div className="mb-4">
  <label htmlFor="secondDropOffLocation" className="block text-sm font-medium mb-2">2nd Drop Off Location</label>
  <input
    id="secondDropOffLocation"
    type="text"
    name="secondDropOffLocation"
    value={secondDropOffLocation}
    onChange={e => setSecondDropOffLocation(e.target.value)}
    placeholder="Enter the first drop off location"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 3rd Drop Off Location Input */}
<div className="mb-4">
  <label htmlFor="secondDropOffLocation" className="block text-sm font-medium mb-2">3rd Drop Off Location</label>
  <input
    id="thirdDropOffLocation"
    type="text"
    name="thirdDropOffLocation"
    value={thirdDropOffLocation}
    onChange={e => setThirdDropOffLocation(e.target.value)}
    placeholder="Enter the first drop off location"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* Final Drop Off Location Input */}
<div className="mb-4">
  <label htmlFor="secondDropOffLocation" className="block text-sm font-medium mb-2">Final Drop Off Location</label>
  <input
    id="finalDropOffLocation"
    type="text"
    name="finalDropOffLocation"
    value={finalDropOffLocation}
    onChange={e => setFinalDropOffLocation(e.target.value)}
    placeholder="Enter the first drop off location"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* Suggested Tip for Driver Input */}
<div className="mb-4">
  <label htmlFor="suggestedTipForDriver" className="block text-sm font-medium mb-2">Suggested Tip For Driver</label>
  <input
    id="suggestedTipForDriver"
    type="number"
    name="suggestedTipForDriver"
    value={suggestedTipForDriver}
    onChange={e => setSuggestedTipForDriver(e.target.value)}
    placeholder="Suggested tip amount"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 1st Pick Up Time (Return) Input */}
<div className="mb-4">
  <label htmlFor="firstPickUpTimeReturn" className="block text-sm font-medium mb-2">1st Pick Up Time (Return)</label>
  <input
    id="firstPickUpTimeReturn"
    type="datetime-local"
    name="firstPickUpTimeReturn"
    value={firstPickUpTimeReturn} // Update this with your state
    onChange={e => setFirstPickUpTimeReturn(e.target.value)} // Update this with your handler
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 1st Pick Up Location (Return) Text Area */}
<div className="mb-4">
  <label htmlFor="firstPickUpLocationReturn" className="block text-sm font-medium mb-2">1st Pick Up Location (Return)</label>
  <textarea
    id="firstPickUpLocationReturn"
    name="firstPickUpLocationReturn"
    value={firstPickUpLocationReturn} // Update this with your state
    onChange={e => setFirstPickUpLocationReturn(e.target.value)} // Update this with your handler
    placeholder="Enter the first pick up location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* 2nd Pick Up Time (Return) Input */}
<div className="mb-4">
  <label htmlFor="secondPickUpTimeReturn" className="block text-sm font-medium mb-2">2nd Pick Up Time (Return)</label>
  <input
    id="secondPickUpTimeReturn"
    type="datetime-local"
    name="secondPickUpTimeReturn"
    value={secondPickUpTimeReturn} // Update this with your state
    onChange={e => setSecondPickUpTimeReturn(e.target.value)} // Update this with your handler
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 2nd Pick Up Location (Return) Text Area */}
<div className="mb-4">
  <label htmlFor="secondPickUpLocationReturn" className="block text-sm font-medium mb-2">2nd Pick Up Location (Return)</label>
  <textarea
    id="secondPickUpLocationReturn"
    name="secondPickUpLocationReturn"
    value={secondPickUpLocationReturn} // Update this with your state
    onChange={e => setSecondPickUpLocationReturn(e.target.value)} // Update this with your handler
    placeholder="Enter the second pick up location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* 3rd Pick Up Time (Return) Input */}
<div className="mb-4">
  <label htmlFor="secondPickUpTimeReturn" className="block text-sm font-medium mb-2">3rd Pick Up Time (Return)</label>
  <input
    id="thirdPickUpTimeReturn"
    type="datetime-local"
    name="thirdPickUpTimeReturn"
    value={thirdPickUpTimeReturn} // Update this with your state
    onChange={e => setThirdPickUpTimeReturn(e.target.value)} // Update this with your handler
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* 3rd Pick Up Location (Return) Text Area */}
<div className="mb-4">
  <label htmlFor="thirdPickUpLocationReturn" className="block text-sm font-medium mb-2">3rd Pick Up Location (Return)</label>
  <textarea
    id="thirdPickUpLocationReturn"
    name="thirdPickUpLocationReturn"
    value={thirdPickUpLocationReturn} // Update this with your state
    onChange={e => setThirdPickUpLocationReturn(e.target.value)} // Update this with your handler
    placeholder="Enter the second pick up location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* Final Pick Up Time (Return) Input */}
<div className="mb-4">
  <label htmlFor="secondPickUpTimeReturn" className="block text-sm font-medium mb-2">Final Pick Up Time (Return)</label>
  <input
    id="finalPickUpTimeReturn"
    type="datetime-local"
    name="finalPickUpTimeReturn"
    value={finalPickUpTimeReturn} // Update this with your state
    onChange={e => setFinalPickUpTimeReturn(e.target.value)} // Update this with your handler
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

{/* Final Pick Up Location (Return) Text Area */}
<div className="mb-4">
  <label htmlFor="thirdPickUpLocationReturn" className="block text-sm font-medium mb-2">Final Pick Up Location (Return)</label>
  <textarea
    id="finalPickUpLocationReturn"
    name="finalPickUpLocationReturn"
    value={finalPickUpLocationReturn} // Update this with your state
    onChange={e => setFinalPickUpLocationReturn(e.target.value)} // Update this with your handler
    placeholder="Enter the second pick up location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    placeholder="Enter the second drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    placeholder="Enter the third drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
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
    placeholder="Enter the final drop off location for the return journey"
    rows="3"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  ></textarea>
</div>

{/* Suggested Tip for Driver (Return) Input */}
<div className="mb-4">
  <label htmlFor="suggestedTipForDriverReturn" className="block text-sm font-medium mb-2">Suggested Tip For Driver (Return)</label>
  <input
    id="suggestedTipForDriverReturn"
    type="number"
    name="suggestedTipForDriverReturn"
    value={suggestedTipForDriverReturn}
    onChange={e => setSuggestedTipForDriverReturn(e.target.value)}
    placeholder="Suggested tip amount for the return journey"
    className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
  />
</div>

  </div>
  </form>
</main>

)}

</div>
<div className="flex-grow flex flex-row bg-zinc-800 text-white">
{isLineListVisible && (
  <div className={`flex flex-col ${isLineFormVisible ? 'w-1/5' : 'w-full'} transition-width duration-300 ease-in-out`}>
    {/* Header with buttons */}
    {!isLineFormVisible && (
          <div className="flex justify-between items-center p-4 sticky top-0 z-10 bg-zinc-900 shadow">
          <h2 className="text-xl font-bold">
          {isSelecting ? `${selectedLines.length > 0 ? `${selectedLines.length} Line(s) selected` : 'Select Lines...'}` : 'Lines'}
          </h2>
        <div className="flex space-x-2">
        {isSelecting ? (
                <>
                {selectedLines.length > 0 && (
                  <>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Export')}>Export</button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Delete')}>Delete</button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Draft')}>Draft</button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Archive')}>Archive</button>
                  </>
                )}
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelClick}>Cancel</button>
              </>
          ) : (
            <>
              {/* Buttons to show when not in selecting mode */}
              <input type="text" placeholder="Search lines..." className="text-sm rounded p-2 bg-zinc-700" value={searchTerm} onChange={handleSearchChange} />
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleFilterLineClick}>Filter</button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleSelectClick}>Select</button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleExportClick}>Export</button>
              <input type="file" className="hidden" id="import-input" onChange={handleImportClick} />
              <label htmlFor="import-input" className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded cursor-pointer">Import</label>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleSettingsClick}>Settings</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => { setIsLineFormVisible(true); resetLineFormStates(); }}>+ New Line</button>
            </>
          )}
        </div>
      </div>
    )}
      {/* Lines table */}
      <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-zinc-200">
      <thead>
          <tr>
          {isSelecting && (
          <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
        <input
          type="checkbox"
          checked={selectedLines.length === lines.length && lines.length > 0}
          onChange={handleSelectAllLines}
          disabled={lines.length === 0} // Optional: Disable if no lines are available
        />
      </th>
          )}
            {!isLineFormVisible && (
              <>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Name</th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Status</th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Products</th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Modified</th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Published</th>
              </>
            )}
          </tr>
        </thead>
          <tbody className=" divide-zinc-200">
  {loading ? (
    // Render multiple skeleton rows to match the expected number of data rows
    [...Array(5)].map((_, index) => (
      <tr key={`skeleton-${index}`}>
        <td colSpan="5" className="text-center py-4">
          <div role="status" className="animate-pulse">
            <div className="h-3.5 bg-zinc-200 rounded-full  w-48 mb-4"></div>
            <div className="h-3 bg-zinc-200 rounded-full  max-w-[800px] mb-2.5"></div>
            <div className="h-3 bg-zinc-200 rounded-full  mb-2.5"></div>
            <div className="h-3 bg-zinc-200 rounded-full  max-w-[900px] mb-2.5"></div>
            <div className="h-3 bg-zinc-200 rounded-full  max-w-[950px] mb-2.5"></div>
            <div className="h-3 bg-zinc-200 rounded-full  max-w-[750px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </td>
      </tr>
    ))
  ) : lines && lines.length > 0 ? (
    lines.map((line, index) => (
      line && line.name ? (

        <tr key={line._id || index} className={`${index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}`} onClick={() => toggleLineSelection(line._id)}>
    {isSelecting && (
      <td className="px-4 py-2 whitespace-nowrap">
        <input
          type="checkbox"
          checked={selectedLines.includes(line._id)}
          onChange={() => toggleLineSelection(line._id)}
        />
      </td>
    )}
          <td className="px-4 py-2 text-white whitespace-nowrap">{line.name}</td>
          {!isLineFormVisible && (
            <>
              <td className="px-4 py-2 text-white whitespace-nowrap">{line.status === 'Published' ? (
            <span className="flex items-center">
              <svg className='w-4 h-4 mr-2'
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path fill="#02973b" d="M8 3a5 5 0 100 10A5 5 0 008 3z" />
                </g>
              </svg>

              <span className="text-green-400">Published</span>
            </span>
          ) : (
            <span className="flex items-center">
              <svg fill="#FCA5A5" className="w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M17,21 L17,23 L15,23 L15,21 L17,21 Z M19,21 L21,21 C21,22.1045695 20.1045695,23 19,23 L19,21 Z M13,21 L13,23 L11,23 L11,21 L13,21 Z M9,21 L9,23 L7,23 L7,21 L9,21 Z M5,21 L5,23 C3.8954305,23 3,22.1045695 3,21 L5,21 Z M19,13 L21,13 L21,15 L19,15 L19,13 Z M19,11 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,11 L3,11 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,11 L19,11 Z M5,13 L5,15 L3,15 L3,13 L5,13 Z M19,17 L21,17 L21,19 L19,19 L19,17 Z M5,17 L5,19 L3,19 L3,17 L5,17 Z M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z"></path> </g></svg>
              <span className="text-orange-300">Draft</span>
            </span>
          )}</td>
              <td className="px-4 py-2 text-white whitespace-nowrap">{line.productsCount}</td>
              <td className="px-4 py-2 text-white whitespace-nowrap">
                {line.lastEdited ? new Date(line.lastEdited).toLocaleString() : 'Not Edited'}
              </td>
              <td className="px-4 py-2 text-white whitespace-nowrap">
                {line.created ? new Date(line.created).toLocaleString() : 'Not Published'}
              </td>
            </>
          )}
        </tr>
      )  : (
        <tr key={`empty-${index}`}>
          <td colSpan="5" className="text-center py-2 text-white">Line data is missing</td>
        </tr>
      )
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center py-2 text-white">
        No lines available.
      </td>
    </tr>
  )}
</tbody>


    </table>
  </div>
</div> 


)}

{isLineFormVisible && (
  <main className="w-4/5 p-4 overflow-y-auto">
    {isLineModalVisible && (
  <div className="fixed inset-0 bg-zinc-700 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" style={{zIndex: 999}}>
    <div className="bg-zinc-900 rounded-lg max-w-sm mx-auto p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-4">Exit Without Saving?</h2>
      <p>This item can't be saved because it has errors. Would you like to exit without saving?</p>
      <div className="flex justify-end mt-4">
        <button onClick={() => setIsLineModalVisible(false)} className="bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-l">
          Keep editing
        </button>
        <button onClick={handleLineCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
          Exit Without Saving
        </button>
      </div>
    </div>
  </div>
)}
    <div className="h-full bg-zinc-800 p-6">
    <div className="flex items-center justify-between mb-8">
  {/* Back arrow and title */}
  <div className="flex items-center">
  <button
  className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 flex items-center justify-center"
  onClick={() => setIsLineFormVisible(false)}
  style={{ width: '50px', height: '50px' }} // Set the button size explicitly if you need a square button
>
  {/* Back arrow icon */}
  <SVGArrow />
</button>
    <h2 className="text-xl font-semibold text-white">{lineTitle || 'New Line'}</h2>
  </div>

  {/* Action Buttons */}
<div className="flex relative text-left">
  {/* Cancel button */}
  <button
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-5 py-2 mx-4"
          onClick={() => setIsLineModalVisible(true)}
        >
          Cancel
        </button>

  <button
    type="submit"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="inline-flex justify-center w-full rounded-md border border-zinc-300 shadow-sm px-4 py-2 bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:ring-zinc-700"
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
  >
    {editMode ? 'Save' : 'Create'}
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>

  {/* Dropdown menu, show/hide based on menu state. */}
<div
  ref={lineDropDownRef}
  className={`${isDropdownOpen ? '' : 'hidden'} origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none`}
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="menu-button"
  tabIndex="-1"
>
<div className="relative py-1" role="none">
  {/* Button for Publish */}
  <div className="group">
    <button
      onClick={handleLinePublish}
      className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 relative"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-0"
    >
      {editMode ? 'Save' : 'Publish'}
    </button>
    <div className="absolute hidden group-hover:block px-2 py-1 text-sm text-white bg-black rounded-md shadow-lg -bottom-10 w-56">
      Publish the item to your live site.
    </div>
  </div>

  {/* Button for Save as draft */}
  <div className="group mt-1">
    <button
      onClick={handleLineDraft}
      className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 relative"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-1"
    >
      Save as draft
    </button>
    <div className="absolute hidden group-hover:block px-2 py-1 text-sm text-white bg-black rounded-md shadow-lg -bottom-10 w-56">
      Save the item without publishing it.
    </div>
  </div>
</div>
</div>
</div>
</div>




      <form onSubmit={handleSubmit(handleCreateLineSubmission)} className="h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 bg-zinc-800 text-white p-4 rounded">
        {/* Line Name Input */}
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="line-name">Name <span className="text-red-700">*</span></label>
          <input
            id="line-name"
            name="name"
            {...register('name', { required: 'Name is required' })}
            required
            className="w-full p-2 border bg-black border-zinc-300 rounded-md focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
            placeholder="Line Name"
            value={newLine.name}
            onChange={(e) => setNewLine({...newLine, name: e.target.value})} // Update state
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Slug Input */}
      <div>
        <label className="block text-sm font-medium text-white mb-1" htmlFor="slug">Slug <span className="text-red-700">*</span></label>
        <input
          id="slug"
          name="slug"
        {...register('slug', { required: 'Slug is required' })}
          className="w-full p-2 border bg-black border-zinc-300 rounded-md focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
          value={newLine.slug} // Use value for controlled input
          onChange={(e) => setNewLine({...newLine, slug: e.target.value})} // Update state // Update the slug state when user edits the slug
          placeholder="slug" // This will only show when newLine.slug is empty
        />
        {errors.slug && <span className="text-red-500">{errors.slug.message}</span>}
        <p className="text-white mt-2">www.tri-statecoach.com/category/{newLine.slug || 'slug'}</p>
      </div>



        {/* Products Dropdown */}
<div className="flex flex-col space-y-4" style={{ position: 'relative', zIndex: '0' }}>

    <label htmlFor="products" className="block mb-2 text-sm font-medium text-white">Products</label>
    <Multiselect
  options={tickets}
  selectedValues={selectedProducts}
  onSelect={handleProductSelect}
  onRemove={handleProductSelect}
  displayValue="name"
  placeholder="Select products"
  className="" // Updated dark theme classes for the component
  style={{
    
    multiselectContainer: {
      // Styles for the container of the multiselect
      width: '100%',
      backgroundColor: '#1F2937', // Dark background color for the container
    },
    searchBox: {
      // Styles for the search input box
      minWidth: '100%',
      border: '2px solid #4B5563', // Bottom border color for dark theme
      borderRadius: '0px',
      backgroundColor: '#1F2937', // Dark background color for the search box
      color: 'white', // Text color for dark theme
      paddingLeft: '0.5rem', // Space before text
      paddingRight: '2.5rem', // Space after text for the search icon
    },
    optionContainer: {
      // Styles for the dropdown options container
      width: '100%',
      backgroundColor: '#1F2937', // Dark background color for options container
      borderColor: '#374151', // Border color for the options container
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Subtle shadow for depth
    },
    option: {
      // Styles for each dropdown option
      
      backgroundColor: 'rgb(38 38 38)', // Blue background color for selected option
      color: 'white', // Text color for options
      '&:hover': {
        backgroundColor: 'black', // Lighter blue background color on hover
      },
    },
    // ... add other necessary style objects
  }}
/>


</div>

      </form>
    </div>
  </main>
)}
</div>
</div>
</div>
    </>
  );
}
  
export default AdminDashboard;
