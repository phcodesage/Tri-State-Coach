import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";// Assuming 'jwt_decode' is the correct named export
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Multiselect from 'multiselect-react-dropdown';
import React from 'react';
import FilterModal from '../components/FilterModal';


const AdminDashboard = () => {
const authToken = localStorage.getItem('token');
const modalRef = useRef();
const navigate = useNavigate();
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [isTicketDropdownOpen, setIsTicketDropdownOpen] = useState(false);
const [lines, setLines] = useState([]);
const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);
const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);
const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
const [isTicketListVisible, setIsTicketListVisible] = useState(false);
const [isOrderListVisible, setIsOrderListVisible] = useState(false);
const [isOrderSelecting, setIsOrderSelecting] = useState(false);
const [isSearching, setIsSearching] = useState(false);
const [isOrderLoading, setIsOrderLoading] = useState(false);
const [isTicketLoading, setIsTicketLoading] = useState(false);
const [isLineLoading, setIsLineLoading] = useState(false);
const [selectedFilter, setSelectedFilter] = useState('All Orders');
const [currentFilter, setCurrentFilter] = useState('All Orders');
const [searchOrderTerm, setSearchOrderTerm] = useState('');
const toggleOrderSelecting = () => {setIsOrderSelecting(!isOrderSelecting)};
const [isLoading, setIsLoading] = useState(false);
const [isLineFormVisible, setIsLineFormVisible] = useState(false);
const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
const [isLineListVisible, setIsLineListVisible] = useState(false);
const [tripType, setTripType] = useState('');
const [lineName, setLineName] = useState('');
const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
const [productsCount, setProductsCount] = useState(0);
const [departureDate, setDepartureDate] = useState('');
const [returnDate, setReturnDate] = useState('');
const [selectedImage, setSelectedImage] = useState(null);
const [tickets, setTickets] = useState([]); // State to store tickets data
const [selectedTicketId, setSelectedTicketId] = useState(null);
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
const [searchTicketTerm, setTicketSearchTerm] = useState('');
const [selectedLines, setSelectedLines] = useState([]);
const [selectedTickets, setSelectedTickets] = useState([]);
const [selectedOrders, setSelectedOrders] = useState([]);
const [lineStatus, setLineStatus] = useState('Draft');
const [ticketStatus, setTicketStatus] = useState('Draft');
const [isSelecting, setIsSelecting] = useState(false);
const [isTicketSelecting, setIsTicketSelecting] = useState(false);
const [selectedLineIds, setSelectedLineIds] = useState([]);
const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
const [value, setValue] = useState('');
const [lineToDelete, setLineToDelete] = useState(null);
const [lineEditMode, setLineEditMode] = useState(false);
const [ticketEditMode, setTicketEditMode] = useState(false);
const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
const [orders, setOrders] = useState([]);
const [publishedTicketProducts, setPublishedTicketProducts] = useState([]);

// Initial state for filter criteria
const initialLineFilterCriteria = {
  status: 'All',
  published: 'All',
  created: 'All',
  modified: 'All'
};
const initialTicketFilterCriteria = {
  status: 'All',
  published: 'All',
  created: 'All',
  modified: 'All'
};
const [isLineFilterModalVisible, setIsLineFilterModalVisible] = useState(false);
const [LineFilterCriteria, setLineFilterCriteria] = useState(initialLineFilterCriteria);
const [isTicketFilterModalVisible, setIsTicketFilterModalVisible] = useState(false);
const [TicketFilterCriteria, setTicketFilterCriteria] = useState(initialTicketFilterCriteria); // Assuming 'tickets' holds your full ticket list
const [originalTickets, setOriginalTickets] = useState([]); 

const SVGArrow = (props) => (
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
const handleTicketSearchChange = (event) => {
  const { value } = event.target;
  setTicketSearchTerm(value);
};
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
const getTicketStartDateForFilter = (filterValue) => {
  const now = new Date();
  switch (filterValue) {
    case 'Last 24 hours':
      return new Date(now.setHours(now.getHours() - 24));
    case 'Last 7 days':
      return new Date(now.setDate(now.getDate() - 7));
    case 'Last 30 days':
      return new Date(now.setDate(now.getDate() - 30));
    case 'All':
    default:
      return null;  // No start date, meaning no filtering is applied
  }
};
const toggleTicketSelection = (ticketId) => {
  setSelectedTickets(prevSelectedTickets => {
    const isSelected = prevSelectedTickets.includes(ticketId);
    return isSelected 
      ? prevSelectedTickets.filter(id => id !== ticketId) 
      : [...prevSelectedTickets, ticketId];
  });
};



const toggleLineSelection = (lineId) => {
  const isSelected = selectedLines.includes(lineId);
  if (isSelected) {
    setSelectedLines(selectedLines.filter(id => id !== lineId));
  } else {
    setSelectedLines([...selectedLines, lineId]);
  }
};
const handleLineCancelClick = () => {
  setIsSelecting(false);
  setSelectedLines([]);
};
const handleTicketCancelClick = () => {
  setIsTicketSelecting(false);
  setSelectedTickets([]);
};
const handleOrderCancelClick = () => {
  setIsOrderSelecting(false);
  setSelectedOrders([]);
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
  setLineEditMode(false);
  setLineName("");
  // Reset any additional state related to the line form here
};
const resetTicketFormStates = () => {
  // Resetting all the state variables to their initial states
  setTicketData({
    productType: '', // Assuming the initial state is an empty string or whatever default you prefer
    name: '',
    slug: '',
    description: '',
    categories: [],
    images: [],
    price: '',
    compareAtPrice: '',
    sku: '',
    trackInventory: false,
    inventoryQuantity: '',
    // Add other fields as required
  });
  setTripType(''); // Reset trip type
  setLineName(''); // Reset line name
  setDepartureDate(''); // Reset departure date
  setReturnDate(''); 
};
const [suggestedTipForDriver, setSuggestedTipForDriver] = useState('');
const [isTicketModalVisible, setIsTicketModalVisible] = useState(false);
const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
const [isLineModalVisible, setIsLineModalVisible] = useState(false);
const [lastAction, setLastAction] = useState('');
const [ticketLastAction, setTicketLastAction] = useState('');
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
const lineDropDownRef = useRef(null);
const ticketDropDownRef = useRef(null);
const [currentLineId, setCurrentLineId] = useState(null);
const [currentTicketId, setCurrentTicketId] = useState(null);
let timeoutId;
const isLineMounted = useRef(true);
const isTicketMounted = useRef(true);
const [lineAutomatedValues, setLineAutomatedValues] = useState({
  itemId: '',
  created: '',
  lastEdited: '',
  lastPublished: '',
});
const [ticketAutomatedValues, setTicketAutomatedValues] = useState({
  itemId: '',
  created: '',
  lastEdited: '',
  lastPublished: '',
});

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
useEffect(() => {
  // Define the function inside useEffect to use the ref and state directly
  const handleTicketOutsideClick = (event) => {
    if (ticketDropDownRef.current && !ticketDropDownRef.current.contains(event.target)) {
      setIsTicketDropdownOpen(false);
    }
  };

  // Add event listener
  document.addEventListener('mousedown', handleTicketOutsideClick);

  // Remove event listener on cleanup
  return () => {
    document.removeEventListener('mousedown', handleTicketOutsideClick);
  };
}, [isTicketDropdownOpen]); 


const handleEditLineClick = async (line) => {
  setCurrentLineId(line._id); // Save the editing line's ID

  const productDetails = line.products.map(product => {
    // Adjusted to safely handle product ID retrieval
    const productId = product.id?.$oid ? product.id.$oid : product.id?.toString() || '';

    // Ensuring fullProduct search does not fail due to undefined ID
    const fullProduct = tickets.find(ticket => ticket.id.toString() === productId);

    return {
      id: productId,
      name: fullProduct ? fullProduct.name : 'Unknown Product', // Handle missing product gracefully
      count: product.count?.$numberInt ? parseInt(product.count.$numberInt, 10) : product.count, // Safely handle count
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
  setLineEditMode(true); // Enable edit mode
  setLineName(line.name); // Set line name to state
  setLineSlug(line.slug); // Set line slug to state
};


const [ticketFormData, setTicketFormData] = useState({
  _id: "",
  productsCollectionId: "",
  productId: "",
  variantsCollectionId: "",
  variantId: "",
  productHandle: "",
  productName: "",
  productType: "",
  productDescription: "",
  productCategories: "",
  mainVariantImage: "",
  moreVariantImages: [], // Assuming this could be an array
  variantPrice: "",
  productTaxClass: "",
  variantSku: "",
  requiresShipping: false,
  createdOn: "",
  updatedOn: ""
});

const { register, handleSubmit, setTicketValue, reset, control, formState: { errors } } = useForm({
  defaultValues: {
      name: '',
      description: '',
      slug: '',
      price: '',
      compareAtPrice: '',
      productType: '',
      productTaxClass: '',
      sku: '',
      inventoryQuantity: '',
      trackInventory: false,
      // Add other fields as necessary
  }
});

const handleEditTicketClick = async (ticketIdParam) => {
  setCurrentTicketId(ticketIdParam.id)
  const ticketId = ticketIdParam.id || ticketIdParam; // Adjust based on actual structure if it's an object
  try {
    const ticketToEdit = tickets.find(ticket => ticket.id === ticketId);
    if (!ticketToEdit) {
      console.error('Ticket not found:', ticketId);
      return;
    }
    // Convert your ticket data to the expected format for the form state, aligning field names and formats
    setTicketFormData({
      _id: ticketToEdit.id, // Use 'id' here since that's what you've named it in the mapping
      productsCollectionId: ticketToEdit.productsCollectionId || '',
      productId: ticketToEdit.productId || '',
      variantsCollectionId: ticketToEdit.variantsCollectionId || '',
      variantId: ticketToEdit.variantId || '',
      productHandle: ticketToEdit.productHandle || '',
      productName: ticketToEdit.ProductName || '', // Note capital 'N' based on your fetch function
      productType: ticketToEdit.productType || '',
      productDescription: ticketToEdit.productDescription || '',
      productCategories: Array.isArray(ticketToEdit.productCategories) ? ticketToEdit.productCategories.join('; ') : '',
      mainVariantImage: ticketToEdit.MainVariantImage || '', // Note 'M' and 'I' are capital based on your fetch function
      variantPrice: ticketToEdit.variantPrice ? ticketToEdit.variantPrice.toString() : '',
      productTaxClass: ticketToEdit.productTaxClass || '',
      variantSku: ticketToEdit.variantSku || '',
      variantInventory: ticketToEdit.variantInventory ? ticketToEdit.variantInventory.toString() : '', // Convert to string if necessary
      requiresShipping: ticketToEdit.requiresShipping ? 'Yes' : 'No',
      createdOn: ticketToEdit.createdOn ? new Date(ticketToEdit.createdOn).toLocaleDateString() : '',
      updatedOn: ticketToEdit.updatedOn ? new Date(ticketToEdit.updatedOn).toLocaleDateString() : ''
    });
    Object.keys(ticketToEdit).forEach(key => {
      setValue(key, ticketToEdit[key]);
  });
  
  setIsTicketFormVisible(true); // Show the line form for editing
  setTicketEditMode(true); // Enable edit mode
  } catch (error) {
    console.error('Error preparing ticket for editing:', error);
  }
};


const handleRemoveProduct = (selectedList, removedItem) => {
  const newList = selectedList.filter(product => product.id !== removedItem.id);
  setSelectedProducts(newList); // Set the filtered list
  setProductsCount(newList.length); // Update the products count
};

const [loading, setLoading] = useState(false);
const [ticketLoading, setTicketLoading] = useState(false);
// Create an Axios instance
const api = axios.create({

  baseURL: 'https://backend.phcodesage.tech/api',

});

// Function to refresh token
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {

    const response = await axios.post('https://backend.phcodesage.tech/refresh-token', { refreshToken });

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

  setLineAutomatedValues({
    itemId: newItemId,
    created: timestamp,
    lastEdited: timestamp,
    lastPublished: timestamp,
  });
}, []);


useState(() => {
  const newItemId = uuidv4(); // Generate a unique Item ID
  const timestamp = new Date().toISOString(); // Get the current timestamp

  setTicketAutomatedValues({
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

async function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    // Set up the image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('image', file);

    try {


      const response = await axios.post('https://backend.phcodesage.tech/api/upload-image', formData, {

        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImagePreviewUrl(`/uploads/${response.data.filePath}`);

      console.log('Image uploaded successfully:', response.data);



      setTicketData(prevState => ({
        ...prevState,
        logo: response.data.filePath // Update this based on how your API response is structured
      }));
      // Handle the response, such as displaying a success message or updating state
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error, such as displaying an error message
    }
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
      const response = await axios.post('/refresh-token', { refreshToken });
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
  setIsOrderListVisible(false);
};

const toggleOrderFormVisibility = () => {
  setIsLineFormVisible(false);
  setIsLineListVisible(false)
  setIsOrderListVisible(true);
  setIsTicketListVisible(false);
  setIsTicketFormVisible(false) // Hide the ticket form when toggling the line form
  
};

const toggleTicketListVisibility = () => {
  setIsTicketListVisible(true);
  setIsLineFormVisible(false); // Hide the line form when toggling the ticket form\
  setIsLineListVisible(false);
  setIsOrderListVisible(false);

};

const toggleTicketFormVisibility = () => {
  setIsTicketFormVisible(!isTicketFormVisible);
  resetTicketFormStates();
  
}

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

const [newTicket, setNewTicket] = useState({
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
const handleNameChange = (e) => {
  const name = e.target.value;
  const slug = createSlug(name);
  setNewLine({ ...newLine, name, slug });
  
  // Update form values using setValue from useForm
  setValue('slug', slug, { shouldValidate: true });
  // Optionally trigger validation for the slug field
  trigger('slug');
};

const fetchLines = async () => {
  if (!isLineListVisible) return;
  setLoading(true);
  try {


    const response = await axios.get('https://backend.phcodesage.tech/api/lines', {

      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    if (response.status === 200 && Array.isArray(response.data) && isLineMounted) {
      setLines(response.data);
      setOriginalLines(response.data);
    } else {
      console.error('Unexpected response:', response);
    }
  } catch (error) {
    console.error('Error fetching lines:', error);
  } finally {
    if (isLineMounted) setLoading(false);
  }
};

useEffect(() => {
  let isLineMounted = true;

  if (isLineListVisible) {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (isLineMounted) {
        setLoading(false);
      }
    }, 5000);

    // Call fetchLines inside the useEffect
    fetchLines().catch(console.error);

    return () => {
      isLineMounted = false;
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
      setLineEditMode(true);
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
  
  const fetchTickets = async () => {
    setTicketLoading(true); // Start the loading animation
    try {
      const response = await axios.get('https://backend.phcodesage.tech/api/tickets', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
  
      if (response.status === 200) {
        // Map the data to match your frontend state management expectations
        const formattedTickets = response.data.map(ticket => {
          return {
            // Map your ticket data as before
            status: ticket.status,
            id: ticket._id, // Adjust according to your data structure
            // Add more fields as necessary
            productsCollectionId: ticket["Products Collection ID"],
            productId: ticket["Product ID"],
            variantsCollectionId: ticket["Variants Collection ID"],
            variantId: ticket["Variant ID"],
            productHandle: ticket["Product Handle"],
            ProductName: ticket["Product Name"],
            productType: ticket["Product Type"],
            productDescription: ticket["Product Description"],
            productCategories: ticket["Product Categories"],
            MainVariantImage: ticket["Main Variant Image"],
            variantPrice: parseFloat(ticket["Variant Price"].replace(/[^0-9.-]+/g, "")),
            productTaxClass: ticket["Product Tax Class"],
            variantSku: ticket["Variant Sku"],
            variantInventory: ticket["Variant Inventory"],
            requiresShipping: ticket["Requires Shipping"],
            createdOn: new Date(ticket["Created On"]),
            updatedOn: new Date(ticket["Updated On"])
          };
        });
        setOriginalTickets(formattedTickets); // Save the original, unfiltered tickets
        setTickets(formattedTickets); // Initially, display all tickets
  
      } else {
        throw new Error('Error fetching tickets');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setTicketLoading(false); // Stop the loading animation whether or not there was an error
    }
  };
  
  const filterPublishedTickets = () => {
    const publishedTickets = originalTickets.filter(ticket => ticket.status === 'Published'); // Correct the status string here
    setPublishedTicketProducts(publishedTickets); // Update the state with filtered tickets

    console.log(publishedTickets); // Check the filtered results
  };
  
  useEffect(() => {
    filterPublishedTickets(); // Update the published tickets whenever the original tickets change
  }, [originalTickets]); // Dependency array ensures this runs whenever originalTickets changes

  
  const submitLineData = async (lineData, isEdit) => {

    apiUrl = isEdit ? `https://backend.phcodesage.tech/api/lines/${currentLineId}` : 'https://backend.phcodesage.tech/api/lines';

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
        setLineEditMode(false);
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
const handleCreateLineSubmission = async () => {
  // Update the status based on last action before submitting
  const updatedStatus = lastAction === 'publish' ? 'Published' : 'Draft';
  setLineStatus(updatedStatus); // Update the status in your state if needed

  const lineData = {
    name: newLine.name,
    slug: newLine.slug,
    status: updatedStatus, // Use the status determined by the last action.
    productsCount: selectedProducts.length, // Count of selected products.
    products: selectedProducts.map(product => product.ProductName) 
  };
  console.log(selectedProducts);
  console.log(lineData);
  console.log(selectedProducts)


  // Determine the correct API URL and HTTP method based on whether it's a create or update action
  const apiUrl = currentLineId ? `/api/lines/${currentLineId}` : '/api/lines';
  const method = currentLineId ? 'patch' : 'post';


  // API call to save the line

  try {
    const response = await axios.post('https://backend.phcodesage.tech/api/lines', lineData, {
      headers: { /* Authorization headers if needed */ },
    });
    console.log('Line saved successfully:', response.data);
    // Perform any additional actions, like navigating to another page or displaying a success message
  } catch (error) {
    console.error('Error saving line:', error);
    // Handle errors, e.g., displaying an error message
  }
};

// Function to handle line publish
const handleProductSelect = (selectedList, selectedItem) => {
  setSelectedProducts(selectedList);
};



  const handleLogout = () => {
   localStorage.removeItem('token'); // Remove the token
   navigate('/'); // Redirect to home page
 };
const handleTicketSelect = () => {
  setSelectedTicketIds(prevSelected => {
    if (prevSelected.includes(ticketId)) {
      // Remove lineId from selection
      return prevSelected.filter(id => id !== ticketId);
    } else {
      // Add lineId to selection
      return [...prevSelected, ticketId];
    }
  });
}

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
  setTicketLastAction('publish');
  setTicketStatus('Published');
};

const handleTicketDraft = () => {
  // Set the lastAction state to 'draft'
  setTicketLastAction('draft');
  setTicketStatus('Draft');
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



  const handleCreateTicketSubmission = handleSubmit(async (data) => {
    const status = ticketLastAction === 'draft' ? 'Draft' : 'Published';
    const sku = data.sku || uuidv4(); // Ensure you have a method to generate a UUID
    let slug = data.slug; // Original slug from the form
    // Slug uniqueness check here...
    // Combining ticket images and logo into one array, while filtering out any null or undefined values
    const images = [...(ticketData.images || []), ticketData.logo].filter(Boolean);
    const preparedData = {
      ...data,
      sku,
      status,
      slug, // Ensure the adjusted slug is used
      price: parseFloat(data.price || 0),
      compareAtPrice: parseFloat(data.compareAtPrice || 0),
      inventoryQuantity: parseInt(data.inventoryQuantity || 0, 10),
      createdOn: new Date(),
      images, // Updated to include both selected images and the logo
      categories: selectedLines.map(line => line.name),
    };
  
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://backend.phcodesage.tech/api/tickets',

        data: preparedData,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      alert('Ticket submitted successfully!');
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error submitting ticket:', error?.response?.data?.message || 'An unexpected error occurred');
      alert(`Failed to submit the ticket. ${error?.response?.data?.message || 'Please check the console for more details.'}`);
    }
  });
  

  useEffect(() => {
    // Assume this data comes from somewhere, like an edit button click
    const ticketDataToEdit = null; // Placeholder for actual data
    
    if (ticketDataToEdit) {
      Object.keys(ticketDataToEdit).forEach((fieldName) => {
        setValue(fieldName , ticketDataToEdit[fieldName]);
      });
    }
  }, [setValue]);
  const [ticketData, setTicketData] = useState(initialTicketData);
// Function to reset all related form states

const handleTicketCancel = () => {
  reset(); // This will reset react-hook-form fields
  resetTicketFormStates(); // This will reset custom state management
  setIsTicketModalVisible(false);
  setIsTicketFormVisible(false);
};

const handleLineCancel = () => {
  reset(); // This will reset react-hook-form fields
  resetLineFormStates(); // This will reset custom state management
  setIsLineModalVisible(false)
  setIsLineFormVisible(false)
};

const handleOrderCancel = () => {
  reset(); // This will reset react-hook-form fields
  resetLineFormStates(); // This will reset custom state management
  setIsOrderModalVisible(false)
  setIsOrderFormVisible(false)
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

useEffect(() => {
  // Debounce the search for better performance
  const timeoutId = setTimeout(() => {
    if (searchTicketTerm.trim() === '') {
      // If the search term is empty, reset the tickets to the default
      fetchTickets();
    } else {
      // Filter tickets based on the search term
      const filteredTickets = tickets.filter((ticket) =>
        (ticket.ProductName?.toLowerCase() || '').includes(searchTicketTerm.toLowerCase())
      );

      setTickets(filteredTickets);
    }
  }, 500); // Wait 500ms after the user stops typing before applying the search

  // Cleanup the timeout on component unmount
  return () => clearTimeout(timeoutId);
}, [searchTicketTerm]); // Added fetchTickets to the dependency array since it's being used here

useEffect(() => {
  // Debounce the search for better performance
}, [searchOrderTerm]);

const handleFilterTicketClick = () => {
  setIsTicketFilterModalVisible(true);
};

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

const handleTicketApplyFilters = () => {
  setIsTicketFilterModalVisible(false); // Close the modal after applying filters
  applyTicketFiltersBasedOnCriteria(); // Apply the filters based on current criteria
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

const applyTicketFiltersBasedOnCriteria = () => {
  setTicketLoading(true); // Begin filtering operation
  const filteredTickets = originalTickets.filter(ticket => {
    const matchesTicketStatus = TicketFilterCriteria.status === 'All' || ticket.status === TicketFilterCriteria.status;
    const ticketCreatedDate = new Date(ticket.createdOn);
    const ticketLastEditedDate = new Date(ticket.updatedOn); 
    const publishedStart = getTicketStartDateForFilter(TicketFilterCriteria.published);
    const createdStart = getTicketStartDateForFilter(TicketFilterCriteria.created);
    const modifiedStart = getTicketStartDateForFilter(TicketFilterCriteria.modified);
    const matchesTicketPublished = TicketFilterCriteria.published === 'All' || publishedStart === null || ticketCreatedDate >= publishedStart;
    const matchesTicketCreated = TicketFilterCriteria.created === 'All' || createdStart === null || ticketCreatedDate >= createdStart;
    const matchesTicketModified = TicketFilterCriteria.modified === 'All' || modifiedStart === null || ticketLastEditedDate >= modifiedStart;
    return matchesTicketStatus && matchesTicketPublished && matchesTicketCreated && matchesTicketModified;
  });
  setTickets(filteredTickets); // Update with filtered tickets
  setTicketLoading(false); // End filtering operation
};

const handleLineSelectClick = () => {
  setIsSelecting(!isSelecting);
  // Clear selections only when entering the selection mode
  if (!isSelecting) {
    setSelectedLines([]);
  }
};
const handleOrderSelectClick = () => {
  setIsOrderSelecting(!isOrderSelecting);
  // Clear selections only when entering the selection mode
  if (!isOrderSelecting) {
    setSelectedOrders([]);
  }
};

const handleTicketSelectClick = () => {
  setIsTicketSelecting(prevIsTicketSelecting => {
    // If we're turning off ticket selecting, clear the selections
    if (prevIsTicketSelecting) {
      setSelectedTickets([]);
    }
    // Toggle the state
    return !prevIsTicketSelecting;
  });
};

const updateTicketsInState = (updatedTicketIds, update) => {
  // Use the current state to create a new state
  setTickets(currentTickets => {
    return currentTickets.map(ticket => {
      // If this ticket's ID is in the list of updated IDs, apply the update
      if (updatedTicketIds.includes(ticket.id)) {
        // The spread operator (...) is used to create a new object
        // that has all properties of the original ticket, but with overrides from 'update'
        return { ...ticket, ...update };
      } else {
        // If this ticket isn't one of the updated ones, leave it as is
        return ticket;
      }
    });
  });
};

const setTicketsToDraft = async () => {
  selectedTickets.forEach(async (ticketId) => {
      try {
          const response = await axios.put(`https://backend.phcodesage.tech/api/tickets/${ticketId}`, {
              status: 'Draft',
          }, {
              headers: { 'Authorization': `Bearer ${authToken}` }
          });
          if (response.status === 200) {
              updateTicketsInState(selectedTickets, { status: 'Draft' });
          } else {
              console.error(`Failed to set ticket ${ticketId} to draft: ${response.status}`);
          }
      } catch (error) {
          console.error(`Error setting ticket ${ticketId} to draft:`, error);
      }
  });
};

const setTicketsToDelete = async () => {
  try {
    const response = await axios.delete(`https://backend.phcodesage.tech/api/tickets/batch-delete`, {
      data: { ticketIds: selectedTickets },
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    if (response.status === 200) {
      removeTicketsFromState(selectedTickets);
    } else {
      console.error(`Failed to delete tickets: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error deleting tickets:`, error);
  }
};

const setTicketsToArchive = async () => {
  try {
    const response = await axios.patch(`https://backend.phcodesage.tech/api/tickets/batch-archive`, {
      ticketIds: selectedTickets
    }, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    if (response.status === 200) {
      updateTicketsInState(selectedTickets, { status: 'Archived' });
    } else {
      console.error(`Failed to archive tickets: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error archiving tickets:`, error);
  }
};

async function handleExportAllLines() {
  try {


    const response = await fetch('https://backend.phcodesage.tech/api/export-all', {

      headers: {
        'Accept': 'text/csv',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'combined_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl); // Clean up
  } catch (error) {
    console.error('Error exporting data:', error);
  }
}

async function handleExportAllTickets() {
  try {


    const response = await fetch('https://backend.phcodesage.tech/api/export-tickets', { // Make sure this endpoint is correct

      headers: {
        'Accept': 'text/csv',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'tickets.csv'; // Updated to match the new file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl); // Clean up
  } catch (error) {
    console.error('Error exporting data:', error);
  }
}

async function handleExportAllOrders() {
  try {


    const response = await fetch('https://backend.phcodesage.tech/api/export-orders', {

      headers: {
        'Accept': 'text/csv',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'orders.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl); // Clean up
  } catch (error) {
    console.error('Error exporting data:', error);
  }
}

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

useEffect(() => {
  // Check if lastAction has been set, indicating a submit action should follow
  if (ticketLastAction === 'publish' || ticketLastAction === 'draft') {
    handleSubmit(handleCreateTicketSubmission)();
  }
}, [ticketLastAction, ticketStatus]);

const handleTicketSelection = (ticketId) => {
  setSelectedTickets(currentSelectedTickets => {
    if (currentSelectedTickets.includes(ticketId)) {
      const newSelectedTickets = currentSelectedTickets.filter(id => id !== ticketId);
      return newSelectedTickets;
    } else {
      const newSelectedTickets = [...currentSelectedTickets, ticketId];
      return newSelectedTickets;
    }
  });
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

const handleOrderSelect = (orderId) => {
  // Toggle selection
  setSelectedOrderIds(prevSelected => {
    if (prevSelected.includes(orderId)) {
      // Remove orderId from selection
      return prevSelected.filter(id => id !== orderId);
    } else {
      // Add orderId to selection
      return [...prevSelected, orderId];
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

const handleSelectAllTickets = () => {
  // If not all lines are currently selected, select them all
  if (selectedTickets.length < tickets.length) {
    setSelectedTickets(tickets.map(ticket => ticket.id));
  } else {
    // If all lines are currently selected, clear selection
    setSelectedTickets([]);
  }
};


const handleSelectAllOrders = (e) => {
  if (e.target.checked) {
    // Select only displayed (filtered) orders that are 'Fulfilled'
    const fulfilledDisplayedOrders = orders.filter(order => order.status === 'Fulfilled').map(order => order._id);
    setSelectedOrders(fulfilledDisplayedOrders);
  } else {
    // Clear selection
    setSelectedOrders([]);
  }
};



const toggleOrderSelection = (orderId, e) => {
  e.stopPropagation(); // Prevent triggering row onClick
  const isSelected = selectedOrders.includes(orderId);
  setSelectedOrders(isSelected ? selectedOrders.filter(id => id !== orderId) : [...selectedOrders, orderId]);
};
const handleLineDuplicate = async (lineId) => {

  const lineToDuplicate = lines.find(line => line._id === lineId);
  if (!lineToDuplicate) {
    console.error('Line to duplicate not found');
    return;
  }
  const newLineData = { ...lineToDuplicate, name: `${lineToDuplicate.name} (Copy)`, _id: undefined };
  try {

    const response = await axios.post('https://backend.phcodesage.tech/api/lines', newLineData, {

      headers: { 'Authorization': `Bearer ${authToken}` },
    });
    if (response.status === 200 || response.status === 201) {
      // Add the new line to the local state
      setLines(currentLines => [...currentLines, response.data]);
    } else {
      console.error('Failed to create a duplicate line');
    }
  } catch (error) {
    console.error('Error duplicating line:', error);
  }
};

const initiateDeleteLine = (lineId) => {
  setLineToDelete(lineId);
  setShowDeleteConfirmationModal(true);
};

// Call this function to confirm the deletion
const confirmDeleteLine = async () => {
  if (lineToDelete) {
    try {
      const response = await axios.delete(`https://backend.phcodesage.tech/api/lines/${lineToDelete}`);
      if (response.status === 204) {
        // Remove the line from the state
        setLines(lines.filter((line) => line._id !== lineToDelete));
        // Close the modal
        setShowDeleteConfirmationModal(false);
        setIsLineFormVisible(false)
        setIsSelecting(false)
      }
    } catch (error) {
      console.error('Error deleting line:', error);
    }
  }
};

const cancelLineFormDelete = () => {
  setShowDeleteConfirmationModal(false);
};



useEffect(() => {
  const fetchLines = async () => {
    try {
      const response = await axios.get('/api/lines', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.status === 200) {
        setLines(response.data);
      } else {
        throw new Error('Failed to fetch lines');
      }
    } catch (error) {
      console.error('Error fetching lines:', error);
    }
  };

  
  

  fetchLines();
}, []);



const fetchOrders = async (status = '') => {
  setIsLoading(true);
  try {

    const response = await axios.get(`https://backend.phcodesage.tech/api/orders`);
 f2ac87d8c6d6737713afa989bd8bf3a16c35a989
    if (response.status === 200) {
      const filteredOrders = status ? response.data.filter(order => order.status.toLowerCase() === status.toLowerCase()) : response.data;
      setOrders(filteredOrders);
    } else {
      console.error('Failed to fetch orders: ', response);
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (searchOrderTerm.trim() === '') {
      fetchOrders(); // Assuming this will also handle setting isLoading to false
      setIsSearching(false); // Not searching if the term is empty
    } else if (isSearching) {
      setIsLoading(true); // Start loading only if the user is actively searching
      const filteredOrders = orders.filter(order =>
        order.order_id.toLowerCase().includes(searchOrderTerm.toLowerCase())
      );
      setOrders(filteredOrders);
      setIsLoading(false); // Stop loading when search is complete
    }
  }, 500); // Debounce time

  // Cleanup function
  return () => {
    clearTimeout(timeoutId);
    if (searchOrderTerm.trim() === '') {
      setIsSearching(false); // Reset on cleanup if search term is empty
    }
    setIsLoading(false); // Always stop loading when the component unmounts or the effect cleans up
  };
}, [searchOrderTerm, isSearching]);


useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
    const isModalVisible = window.innerWidth < 900;
    setIsWarningModalVisible(isModalVisible);

    // Disable scrolling when the modal is visible
    if (isModalVisible) {
      document.body.style.overflow = 'hidden'; // Disables scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enables scrolling
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Call it to set the initial state based on current window size

  return () => {
    window.removeEventListener('resize', handleResize);
    // Make sure to re-enable scrolling when the component unmounts
    document.body.style.overflow = 'auto';
  };
}, []);


useEffect (() => {
  fetchLines();

},[]);



const handleOrderSearchChange = (event) => {
  setSearchOrderTerm(event.target.value);
};


const toggleOrderModal = () => {
  setIsOrderModalOpen(!isOrderModalOpen);
};

const handleStatusFilter = (status) => {
  let filterLabel = '';
  switch (status) {
    case '':
      filterLabel = 'All Orders';
      break;
    case 'unfulfilled':
      filterLabel = 'Unfulfilled';
      break;
    case 'fulfilled':
      filterLabel = 'Fulfilled';
      break;
    case 'disputed':
      filterLabel = 'Disputed';
      break;
    case 'refunded':
      filterLabel = 'Refunded';
      break;
    default:
      filterLabel = 'All Orders';
  }
  setSelectedFilter(filterLabel); // Update the filter label based on the selection
  fetchOrders(status);
  setIsOrderModalOpen(false);
};


const allOrdersSelected = selectedOrders.length === orders.length;

const handleSetStatusForSelectedOrders = async (newStatus) => {
  // Iterate through all selected orders
  for (let orderId of selectedOrders) {
    // Find the order object from your orders state array
    const order = orders.find(o => o._id === orderId);
    if (!order) continue; // Skip if order is not found

    // Prepare the updated order data
    const updatedOrderData = {
      ...order,
      status: newStatus,
      // Add any additional fields that need to be updated
    };

    // Send the PUT request to your backend API to update the order
    try {

      const response = await fetch(`https://backend.phcodesage.tech/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOrderData),
      });

      const updatedOrder = await response.json();
      if (response.ok) {
        // Update your local orders state with the updated order
        setOrders(prevOrders => prevOrders.map(o => o._id === orderId ? updatedOrder : o));
      } else {
        console.error('Failed to update order:', updatedOrder.message);
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  }

  // Clear selected orders and exit selection mode after updates
  setSelectedOrders([]);
  setIsOrderSelecting(false);
};

const allOrdersFulfilled = orders.length > 0 && orders.every(order => order.status === 'fulfilled');

useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOrderModalOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
}

useEffect(() => {
  // Async function to fetch lines
  const fetchLines = async () => {
    setIsLineLoading(true); // Update to use setIsLineLoading
    try {
      const response = await axios.get('/api/lines');
      setLines(response.data);
    } catch (error) {
      console.error('Error fetching lines:', error);
    } finally {
      setIsLineLoading(false); // Update to use setIsLineLoading
    }

    }


  // Async function to fetch tickets
  const fetchTickets = async () => {
    setIsTicketLoading(true); // Update to use setIsTicketLoading
    try {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setIsTicketLoading(false); // Update to use setIsTicketLoading
    }
  };


const handleOrderClick = (order) => {
  setSelectedOrderDetails(order); // Set the clicked order details
  setIsOrderFormVisible(true); // Show the order form
};

    return this.props.children; 
  }
)


  return (
    <>
    {isWarningModalVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="z-50 bg-white p-5 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
    <svg
      enableBackground="new 0 0 72 72"
      fill="#ff0000"
      height="64px"
      viewBox="0 0 72 72"
      width="64px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M61.568,4H10.432C6.604,4,3.5,7.104,3.5,10.932v50.136c0,3.828,3.104,6.932,6.932,6.933h51.136 c3.828,0,6.932-3.104,6.932-6.933V10.932C68.501,7.104,65.396,4,61.568,4z M10.432,8h51.136c1.619,0,2.932,1.313,2.932,2.932 V17H7.5v-6.068C7.5,9.313,8.813,8,10.432,8z M61.568,64H10.432C8.813,64,7.5,62.688,7.5,61.068V19h57.001v42.068 C64.501,62.688,63.188,64,61.568,64z"/>
        <path d="M11.119,14h1c0.552,0,1-0.447,1-1s-0.448-1-1-1h-1c-0.553,0-1,0.447-1,1S10.566,14,11.119,14z"/>
        <path d="M18.119,14h1c0.552,0,1-0.447,1-1s-0.448-1-1-1h-1c-0.553,0-1,0.447-1,1S17.566,14,18.119,14z"/>
        <path d="M25.119,14h1c0.552,0,1-0.447,1-1s-0.448-1-1-1h-1c-0.553,0-1,0.447-1,1S24.566,14,25.119,14z"/>
        <path d="M17.405,42.168l5.137-6.34c0.348-0.428,0.283-1.058-0.147-1.406c-0.428-0.346-1.058-0.281-1.406,0.147l-5.647,6.97 c-0.297,0.367-0.297,0.893,0,1.26l9.167,11.313c0.197,0.242,0.486,0.369,0.777,0.369c0.221,0,0.443-0.071,0.628-0.223 c0.428-0.347,0.495-0.977,0.147-1.406L17.405,42.168z"/>
        <path d="M24.509,30.227l-0.914,1.127c-0.348,0.428-0.282,1.058,0.147,1.406c0.186,0.151,0.408,0.224,0.629,0.224 c0.291,0,0.58-0.127,0.777-0.37l0.914-1.127c0.348-0.428,0.281-1.058-0.147-1.406C25.487,29.733,24.858,29.798,24.509,30.227z"/>
        <path d="M47.729,30.226c-0.348-0.428-0.979-0.494-1.405-0.147c-0.429,0.347-0.495,0.977-0.147,1.407l8.656,10.682l-8.656,10.684 c-0.348,0.43-0.283,1.059,0.147,1.406c0.185,0.151,0.407,0.223,0.629,0.223c0.291,0,0.579-0.127,0.776-0.369l9.166-11.313 c0.299-0.367,0.299-0.893,0-1.26L47.729,30.226z"/>
        <path d="M40.343,36.226l-9.167,11.313c-0.348,0.43-0.282,1.059,0.147,1.406c0.186,0.15,0.408,0.223,0.629,0.223 c0.291,0,0.58-0.126,0.777-0.369l9.167-11.313c0.348-0.43,0.281-1.06-0.147-1.408C41.32,35.732,40.691,35.798,40.343,36.226z"/>
      </g>
    </svg>
    <p>Your browser is too small</p>
    <p>Resize your browser to be at least 900px wide to get back into design mode.</p>
  </div>
</div>

      )}

<div className={`min-h-screen bg-zinc-900 ${isWarningModalVisible ? 'blur-sm' : ''}`}>
  
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white-500 rounded-lg sm:hidden hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-200   0">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-zinc-800 shadow-lg block md:block`}>
<div className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 overflow-y-auto shadow-xl border-r-2 border-zinc-200">
      <ul className="space-y-2 font-medium">
         <li>
         <a href="/admin" className="flex items-center p-2 space-x-3 hover:bg-zinc-700 group text-white">
               <span className="ms-3 text-xl font-bold text-white">Ecommerce</span>
            </a>
         </li>
         {isTicketLoading ? (
          <li className="animate-pulse">
          <div className="flex items-center p-2 space-x-3 bg-zinc-800">
            <div className="h-6 bg-zinc-200 rounded w-10"></div> {/* Placeholder for icon */}
            <div className="h-4 bg-zinc-200 rounded flex-1"></div> {/* Placeholder for text */}
          </div>
        </li>
         ) : (
         <li>
         <a href="#" onClick={toggleTicketListVisibility} className={`flex items-center p-2 space-x-3 hover:bg-zinc-700 group text-white ${isTicketListVisible ? "bg-zinc-600" : "bg-zinc-800"}`}>
            <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M24.782 1.606h-7.025l-16.151 16.108 12.653 12.681 16.135-16.093v-7.096l-5.613-5.6zM29.328 13.859l-15.067 15.027-11.147-11.171 15.083-15.044h6.143l4.988 4.976v6.211z" fill="#ffffff"> </path> <path d="M21.867 7.999c0 1.173 0.956 2.128 2.133 2.128s2.133-0.954 2.133-2.128c0-1.174-0.956-2.129-2.133-2.129s-2.133 0.955-2.133 2.129zM25.066 7.999c0 0.585-0.479 1.062-1.066 1.062s-1.066-0.476-1.066-1.062c0-0.586 0.478-1.063 1.066-1.063s1.066 0.477 1.066 1.063z" fill="#ffffff"> </path> </g></svg>
               <span className="flex-1">Tickets</span>
               <span className="flex-1">{tickets.length} Items</span>
            </a>
         </li>
         )}
         {isLineLoading ? ( 
          <li className="animate-pulse">
          <div className="flex items-center p-2 space-x-3 bg-zinc-800">
            <div className="h-6 bg-zinc-200 rounded w-10"></div>
            <div className="h-4 bg-zinc-200 rounded flex-1"></div>
          </div>
        </li>
      ) : (
         <li>
            <a href="#" onClick={toggleLineFormVisibility} className={`flex items-center p-2 space-x-3 hover:bg-zinc-700 group text-white ${isLineListVisible ? "active: bg-zinc-600" : "bg-zinc-800"}`} >
               <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Lines</span>
               <span className="flex-1">{lines.length} Items</span>
            </a>
         </li>
         )}
         {isOrderLoading ? (  // Assuming 'orderLoading' state
      <li className="animate-pulse">
        <div className="flex items-center p-2 space-x-3 bg-zinc-800">
          <div className="h-6 bg-zinc-200 rounded w-10"></div>
          <div className="h-4 bg-zinc-200 rounded flex-1"></div>
        </div>
      </li>
    ) : (
         <li>
            <a href="#" onClick={toggleOrderFormVisibility} className={`flex items-center p-2 space-x-3 hover:bg-zinc-700 group text-white`}>
            <svg className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75  group-hover:text-white-900 e" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" fill="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
               <span className="flex-1">{orders.length} Items</span>
            </a>
         </li>
         )}
         <li className="absolute bottom-0 w-full">
            <button onClick={handleLogout} className="flex items-center p-2 text-white rounded-lg  hover:bg-zinc-700  group w-full">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
            </button>
         </li>
      </ul>
</div>
</aside>
<div className="ml-64 flex flex-col flex-grow">
{/* List of tickets */}

<div className={`${isLineListVisible && isOrderListVisible ? 'hidden' : 'flex-grow flex flex-row bg-zinc-800 text-white'}`}>
{
  isTicketListVisible && (
    <div className={`flex flex-col ${isTicketFormVisible ? 'w-1/5' : 'w-full'} transition-width duration-300 ease-in-out`}>
      {/* Header with buttons */}
      {!isTicketFormVisible && (
        <div className="flex justify-between items-center p-2 sticky top-0 z-10 bg-zinc-900 shadow">
          <h2 className="text-xl font-bold">
            {isTicketSelecting ? `${selectedTickets.length > 0 ? `${selectedTickets.length} Ticket(s) selected` : 'Select Tickets...'}` : 'Tickets'}
          </h2>
          <div className="flex space-x-2">
            {isTicketSelecting ? (
              <>
                {isTicketSelecting &&  selectedTickets.length > 0 && (
                  <>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleExportAllTickets}>Export</button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={() => setTicketsToDelete()}>Delete</button>
                    <button 
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded"
                onClick={() => setTicketsToDraft()}
            >
                            <span className="flex items-center">
              <svg fill="#FCA5A5" className="w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M17,21 L17,23 L15,23 L15,21 L17,21 Z M19,21 L21,21 C21,22.1045695 20.1045695,23 19,23 L19,21 Z M13,21 L13,23 L11,23 L11,21 L13,21 Z M9,21 L9,23 L7,23 L7,21 L9,21 Z M5,21 L5,23 C3.8954305,23 3,22.1045695 3,21 L5,21 Z M19,13 L21,13 L21,15 L19,15 L19,13 Z M19,11 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,11 L3,11 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,11 L19,11 Z M5,13 L5,15 L3,15 L3,13 L5,13 Z M19,17 L21,17 L21,19 L19,19 L19,17 Z M5,17 L5,19 L3,19 L3,17 L5,17 Z M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z"></path> </g></svg>
              <span className="text-orange-300">Draft</span>
            </span>
            </button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={() => setTicketsToArchive()}><span className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z" stroke="#171717" strokeWidth="1.5"></path>
                  <path d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5M3.5 7V13C3.5 16.7712 3.5 18.6569 4.67157 19.8284C5.37634 20.5332 6.3395 20.814 7.81608 20.9259" stroke="#171717" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M12 3H4C3.05719 3 2.58579 3 2.29289 3.29289C2 3.58579 2 4.05719 2 5C2 5.94281 2 6.41421 2.29289 6.70711C2.58579 7 3.05719 7 4 7H20C20.9428 7 21.4142 7 21.7071 6.70711C22 6.41421 22 5.94281 22 5C22 4.05719 22 3.58579 21.7071 3.29289C21.4142 3 20.9428 3 20 3H16" stroke="#171717" strokeWidth="1.5" strokeLinecap="round"></path>
                </g>
              </svg>
              <span className="text-gray-400">Archive</span>
            </span></button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={() => setTicketsToArchive()}>Archive</button>
                  </>
                )}
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleTicketCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <input type="text" placeholder="Search tickets..." className="text-sm rounded p-2 bg-zinc-700" value={searchTicketTerm} onChange={handleTicketSearchChange} />
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleFilterTicketClick}>Filter</button>
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleTicketSelectClick}>Select</button>
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleExportAllTickets}>Export</button>

                <label htmlFor="import-input" className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded cursor-pointer">Import</label>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={toggleTicketFormVisibility}>+ New Ticket</button>
              </>
            )}
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm divide-zinc-200">
        <FilterModal
        isOpen={isTicketFilterModalVisible}
        onClose={() => setIsTicketFilterModalVisible(false)}
        filterCriteria={TicketFilterCriteria}
        setFilterCriteria={setTicketFilterCriteria}
        resetFilters={() => setTicketFilterCriteria(initialTicketFilterCriteria)}
        applyFilters={handleTicketApplyFilters}
      />

          <thead>
            <tr>
              {isTicketSelecting && (
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedTickets.length === tickets.length && tickets.length > 0}
                    onChange={handleSelectAllTickets}
                    disabled={tickets.length === 0}
                  />
                </th>
              )}
              <th className="px-4 py-2 font-medium text-left text-white">Name</th>
              <th className="px-4 py-2 font-medium text-left text-white">Status</th>
              <th className="px-4 py-2 font-medium text-left text-white">Price</th>
              <th className="px-4 py-2 font-medium text-left text-white">Product Type</th>
              <th className="px-4 py-2 font-medium text-left text-white">Modified</th>
              <th className="px-4 py-2 font-medium text-left text-white">Published</th>
            </tr>
          </thead>
          <tbody className="divide-zinc-200">
            {ticketLoading ? (
              [...Array(5)].map((_, index) => (
                <tr key={`skeleton-${index}`} className="animate-pulse">
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded"></div></td>
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded"></div></td>
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-3/4"></div></td>
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-1/2"></div></td>
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-1/4"></div></td>
                  <td className="px-6 py-4"><div className="h-4 bg-zinc-200 rounded w-1/4"></div></td>
                </tr>
              ))
              ) : tickets && tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <tr key={ticket.id || index} 
                    className={`${index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'} hover:bg-zinc-600 cursor-pointer`}
                    onClick={(e) => {
                      if (isTicketSelecting) {
                        // Prevent the default action to allow checkbox toggling without entering edit mode
                        e.preventDefault();
                        // Toggle selection state of the line
                        toggleTicketSelection(ticket.id);
                      } else {
                        // Not in selecting mode, handle entering edit mode
                        handleEditTicketClick(ticket);
                      }
                    } }>
                    {isTicketSelecting && (
                    <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={() => toggleTicketSelection(ticket.id)} />
                  </td>
                )}
                  <td className="px-4 py-2 text-white whitespace-nowrap">{ticket.MainVariantImage && <img src={ticket.MainVariantImage} alt="Ticket Logo" className="h-10 w-10 object-cover rounded-full inline-block mr-2" />}{ticket.ProductName}</td>
                  <td className="px-4 py-2 text-white whitespace-nowrap">{ticket.status === 'Published' ? (
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
          ) : ticket.status === 'Archived' ? (
            <span className="flex items-center">
              <svg className='w-4 h-4 mr-2' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z" stroke="#171717" strokeWidth="1.5"></path>
                  <path d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5M3.5 7V13C3.5 16.7712 3.5 18.6569 4.67157 19.8284C5.37634 20.5332 6.3395 20.814 7.81608 20.9259" stroke="#171717" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M12 3H4C3.05719 3 2.58579 3 2.29289 3.29289C2 3.58579 2 4.05719 2 5C2 5.94281 2 6.41421 2.29289 6.70711C2.58579 7 3.05719 7 4 7H20C20.9428 7 21.4142 7 21.7071 6.70711C22 6.41421 22 5.94281 22 5C22 4.05719 22 3.58579 21.7071 3.29289C21.4142 3 20.9428 3 20 3H16" stroke="#171717" strokeWidth="1.5" strokeLinecap="round"></path>
                </g>
              </svg>
              <span className="text-zinc-400">Archived</span>
            </span>
          ) : (
            <span className="flex items-center">
              <svg fill="#FCA5A5" className="w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M17,21 L17,23 L15,23 L15,21 L17,21 Z M19,21 L21,21 C21,22.1045695 20.1045695,23 19,23 L19,21 Z M13,21 L13,23 L11,23 L11,21 L13,21 Z M9,21 L9,23 L7,23 L7,21 L9,21 Z M5,21 L5,23 C3.8954305,23 3,22.1045695 3,21 L5,21 Z M19,13 L21,13 L21,15 L19,15 L19,13 Z M19,11 L19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,11 L3,11 L3,3 C3,1.8954305 3.8954305,1 5,1 L15.4142136,1 L21,6.58578644 L21,11 L19,11 Z M5,13 L5,15 L3,15 L3,13 L5,13 Z M19,17 L21,17 L21,19 L19,19 L19,17 Z M5,17 L5,19 L3,19 L3,17 L5,17 Z M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z"></path> </g></svg>
              <span className="text-orange-300">Draft</span>
            </span>
          )}</td>
                <td className="px-4 py-2 text-white whitespace-nowrap">${parseFloat(ticket.variantPrice ?? '0').toFixed(2)}</td>
                <td className="px-4 py-2 text-white whitespace-nowrap">{ticket.productType}</td>
                <td className="px-4 py-2 text-white whitespace-nowrap">{new Date(ticket.updatedOn ?? ticket.createdOn).toLocaleString()}</td>
                <td className="px-4 py-2 text-white whitespace-nowrap">{new Date(ticket.createdOn).toLocaleString()}</td>
              </tr> ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-2 text-white">No Tickets available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

  
  {isTicketFormVisible && (
    <main tabIndex="-1" className="w-2/3 bg-zinc-800 text-white p-4 overflow-y-auto relati0ve w-full">
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
            className="text-white bg-zinc-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-5 py-2 mx-4"
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
      {ticketEditMode ? 'Save' : 'Publish'}
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  
    {/* Dropdown menu, show/hide based on menu state. */}
  <div
    ref={ticketDropDownRef}
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
      type='submit'
        onClick={() => {
          
          handleTicketPublish();
        }}
        className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 relative"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
      >
        {ticketEditMode ? 'Save' : 'Publish'}
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
    <form onSubmit={handleSubmit(handleCreateTicketSubmission)} className="h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-4 bg-zinc-800 text-white p-4 rounded">
      {/* Product Type Dropdown */}
      <div className="mb-4">
        <label htmlFor="productType" className="block text-sm font-medium mb-2">Product Type</label>
        <select
      id="productType"
      name="productType"
      {...register('productType', { required: 'Product type is required' })}
      value={ticketFormData.productType}
      onChange={(e) => setTicketFormData({ ...ticketFormData, productType: e.target.value })}
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
        {errors.productType && <span className="text-red-500">{errors.productType.message}</span>}
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
      {...register('name', { required: 'Name is required' })}
      value={ticketFormData.name || ''}
      onChange={(e) => setTicketFormData({ ...ticketFormData, name: e.target.value })}
      placeholder="Ticket Name"
      required
      className="block w-full p-2 text-sm bg-zinc-700 text-white rounded focus:outline-none"
    />
    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
  </div>
  
 {/* Slug Input */}
 <div className="mb-4">
    <label htmlFor="slug" className="block text-sm font-medium text-white mb-1">Slug <span className="text-red-700">*</span></label>
    <input
      id="slug"
      name="slug"
      {...register('slug', { required: 'Slug is required' })}
      value={ticketFormData.slug || ''}
      onChange={(e) => setTicketFormData({ ...ticketFormData, slug: e.target.value })}
      placeholder="slug"
      className="block w-full p-2 border bg-black border-zinc-300 rounded-md focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
    />
    {errors.slug && <span className="text-red-500">{errors.slug.message}</span>}
    <p className="text-white mt-2">www.tri-statecoach.com/category/{ticketFormData.slug || 'slug'}</p>
  </div>
  
      {/* Description TextArea */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={ticketData.description || ''}
          onChange={(e) => setTicketFormData({ ...ticketFormData, description: e.target.value })}
          placeholder="Description"
          className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
        ></textarea>
      </div>
  
      {/* Categories Select - Updated for multiple selections */}
      <div className="flex flex-col space-y-4" style={{ position: 'relative', zIndex: '0' }}>
  <label htmlFor="lines" className="block mb-2 text-sm font-medium text-white">Lines</label>
  <Multiselect
  options={publishedTicketProducts} // Use the state for filtered published tickets
  selectedValues={setSelectedProducts}
  onSelect={handleProductSelect}
  onRemove={handleProductSelect}
  displayValue="ProductName" // Make sure this matches an existing key in your ticket objects
  placeholder="Select products"
  className="" // Add any additional classes here
  style={{
    multiselectContainer: {
      width: '100%',
      backgroundColor: '#1F2937',
    },
    searchBox: {
      minWidth: '100%',
      border: '2px solid #4B5563',
      borderRadius: '0px',
      backgroundColor: '#1F2937',
      color: 'white',
      paddingLeft: '0.5rem',
      paddingRight: '2.5rem',
    },
    optionContainer: {
      width: '100%',
      backgroundColor: '#1F2937',
      borderColor: '#374151',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    option: {
      backgroundColor: 'rgb(38 38 38)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    // Add other styles as needed
  }}
/>

</div>

  
  
{/* Media Section */}
<div className="mb-4 bg-zinc-200 p-4 rounded">
  <div className="mb-4">
    <label className="block text-sm font-medium text-zinc-700 mb-2">Main image</label>
    {imagePreviewUrl ? (
      <div className="flex items-center space-x-2 mb-2">
        <img src={imagePreviewUrl} alt="Preview" className="h-20 w-20 object-cover rounded" />
        <div className="flex flex-col">
          {/* Display additional information if needed */}
        </div>
        <button type="button" onClick={() => {
          setImagePreviewUrl(null); // Also clear the file input if necessary
        }} className="text-zinc-500 hover:text-white-700">
          Replace
        </button>
      </div>
    ) : (
      <div className="flex justify-center items-center w-full">
        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-zinc-200 hover:border-zinc-400 rounded-lg group">
          <div className="flex flex-col items-center justify-center pt-7">
            <svg className="w-10 h-10 text-zinc-400 group-hover:text-white-600" fill="none" stroke="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 8H12a4 4 0 0 0-4 4v20m32-12v8m0 0v8a4 4 0 0 1-4 4H12m28-12H8m20-28v12m0 0H20m8 0h8"></path></svg>
            <p className="pt-1 text-sm tracking-wider text-zinc-400 group-hover:text-white-600">
              Click to browse for files
            </p>
          </div>
          <input
            type="file"
            id="logo"
            name="logo"
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
          {...register('price', { required: 'Price is required' })} // Use register with the name 'price' and set a required validation rule with a custom message
          placeholder="0.00"
          className="flex-1 bg-transparent text-white p-2 rounded focus:ring-0"
        />
        
        </div>
        {errors.slug && <span className="text-red-500">{errors.price.message}</span>}
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
      className="block w-full p-2 mb-2 text-sm text-zinc-700 bg-zinc border border-zinc-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
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
        onChange={(e) => setTicketData({ ...ticketData, trackInventory: e.target.checked })}
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
        {...register('lineName', { required: 'Line name is required' })}
        onChange={e => setLineName(e.target.value)}
        className="block w-full p-2 text-sm bg-zinc-700 rounded focus:outline-none"
      >
        <option value="">Select a Line</option> {/* Optional: Add a default option */}
        {lines.map((line) => (
          <option key={line._id} value={line.name}>
            {line.name}
          </option>
        ))}
      </select>
      {errors.slug && <span className="text-red-500">{errors.lineName.message}</span>}
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



  <div className={`${isTicketListVisible && isOrderListVisible ? 'hidden' : 'flex-grow flex flex-row bg-zinc-800 text-white'}`}>
{isLineListVisible && (
  <div className={`flex flex-col ${isLineFormVisible ? 'w-1/5' : 'w-full'} transition-width duration-300 ease-in-out`}>
    {showDeleteConfirmationModal && (
  <div className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-100 justify-center items-center">
    <div className="relative p-4 w-full max-w-md h-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={cancelLineFormDelete}
        >
          {/* Close icon */}
        </button>
        <div className="p-4 md:p-5 text-center">
          {/* Alert icon */}
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={confirmDeleteLine}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={cancelLineFormDelete}
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    {/* Header with buttons */}
    {!isLineFormVisible && (
          <div className="flex justify-between items-center p-2 sticky top-0 z-10 bg-zinc-900 shadow">
          <h2 className="text-xl font-bold">
          {isSelecting ? `${selectedLines.length > 0 ? `${selectedLines.length} Line(s) selected` : 'Select Lines...'}` : 'Lines'}
          </h2>
        <div className="flex space-x-2">
        {isSelecting ? (
                <>
                {selectedLines.length > 0 && (
                  <>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={(handleExportAllLines)}>Export</button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded shadow" onClick={() => initiateDeleteLine(currentLineId)}>Delete</button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded">Draft</button>
                    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow" onClick={() => handleLineArchive(currentLineId)}>Archive</button>
                  </>
                )}
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLineCancelClick}>Cancel</button>
              </>
          ) : (
            <>
              {/* Buttons to show when not in selecting mode */}
              <input type="text" placeholder="Search lines..." className="text-sm rounded p-2 bg-zinc-700" value={searchTerm} onChange={handleSearchChange} />
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleFilterLineClick}>Filter</button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleLineSelectClick}>Select</button>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={() => handleExportAllLines()}>Export</button>


              <label htmlFor="import-input" className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded cursor-pointer">Import</label>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => { setIsLineFormVisible(true); resetLineFormStates(); }}>+ New Line</button>
            </>
          )}
        </div>
      </div>
    
    )}
      {/* Lines table */}
      <div className="overflow-x-auto">
        {/* Filter Modal */}
{isLineFilterModalVisible && (
  <div
    className="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modalDialogTitle"
    role="dialog"
    aria-modal="true"
  >
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75"
        aria-hidden="true"
      ></div>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      {/* Modal panel */}
      <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-zinc-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-700">
          <div className='flex justify-between'>
          <h3 className="text-lg font-medium leading-6 text-white px-2 py-1">
            Filter
          </h3>
          <button
                  className="text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                  onClick={handleLineResetFilters}
                >
                  Reset
                </button>
          </div>
          
          <button
            type="button"
            className="text-zinc-400 bg-transparent hover:text-white-500"
            onClick={handleLineFilterCloseModal}
          >
            <span className="sr-only">Close</span>
            {/* SVG for 'x' icon */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="black"></path> </g></svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-6">
<div className="space-y-4">
<div className="space-y-2">
<h4 className="font-medium text-white dark:text-white">Status</h4>
<div className="space-y-1">
{['All', 'Published', 'Draft', 'Scheduled', 'Archived'].map((status) => (
<label key={status} className="flex items-center space-x-3">
<input
                   type="radio"
                   name="statusFilter"
                   value={status}
                   checked={LineFilterCriteria.status === status}
                  onChange={e => setLineFilterCriteria(prev => ({ ...prev, status: e.target.value }))}
                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                 />
<span className="text-sm text-white-700 dark:text-white-300">{status}</span>
</label>
))}
</div>
</div>

<div className="space-y-2">
<h4 className="font-medium text-white dark:text-white">Published</h4>
<div className="space-y-1">
{['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days'].map((status) => (
<label key={status} className="flex items-center space-x-3">
<input
                   type="radio"
                   name="publishedFilter"
                  value={status}
                  checked={LineFilterCriteria.published === status}
                  onChange={e => setLineFilterCriteria(prev => ({ ...prev, published: e.target.value }))}
                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                 />
<span className="text-sm text-white-700 dark:text-white-300">{status}</span>
</label>
))}
</div>
</div>

<div className="space-y-2">
<h4 className="font-medium text-white dark:text-white">Created</h4>
<div className="space-y-1">
{['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days'].map((status) => (
<label key={status} className="flex items-center space-x-3">
<input
                   type="radio"
                   name="createdFilter"
                  value={status}
                  checked={LineFilterCriteria.created === status}
                  onChange={e => setLineFilterCriteria(prev => ({ ...prev, created: e.target.value }))}
                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                 />
<span className="text-sm text-white-700 dark:text-white-300">{status}</span>
</label>
))}
</div>
</div>

<div className="space-y-2">
<h4 className="font-medium text-white dark:text-white">Modified</h4>
<div className="space-y-1">
{['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days'].map((status) => (
<label key={status} className="flex items-center space-x-3">
<input
                   type="radio"
                   name="modifiedFilter"
                  value={status}
                  checked={LineFilterCriteria.modified === status}
                  onChange={e => setLineFilterCriteria(prev => ({ ...prev, modified: e.target.value }))}
                   className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                 />
<span className="text-sm text-white-700 dark:text-white-300">{status}</span>
</label>
))}
</div>
</div>
{/* Repeat similar blocks for Published, Created, Modified with their respective options */}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
        <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleLineApplyFilters}
              >
            Apply filters
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
)}
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
      <tr key={`skeleton-${index}`} className="animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 bg-zinc-200 rounded"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 bg-zinc-200 rounded"></div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 bg-zinc-200 rounded w-1/2"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 bg-zinc-200 rounded w-1/4"></div>
        </td>
      </tr>
    ))
  ) : lines && lines.length > 0 ? (
    lines.map((line, index) => (
    
        <tr key={line._id || index} className={`${index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'} hover:bg-zinc-600 cursor-pointer`} onClick={(e) => {
          if (isSelecting) {
            // Prevent the default action to allow checkbox toggling without entering edit mode
            e.preventDefault();
            // Toggle selection state of the line
            toggleLineSelection(line._id);
          } else {
            // Not in selecting mode, handle entering edit mode
            handleEditLineClick(line._id);
          }
        }}
      >
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
  
  <main className="w-4/5 p-4 sticky top-0 z-10">
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
  <div className="flex items-center space-x-4">
  <button
  className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 flex items-center justify-center"
  onClick={() => setIsLineFormVisible(false)}
  style={{ width: '50px', height: '50px' }} // Set the button size explicitly if you need a square button
>
  {/* Back arrow icon */}
  <SVGArrow />
</button>
    <h2 className="text-xl font-semibold text-white">{newLine.name || 'New Line'}</h2>
  </div>

  {/* Action Buttons */}
<div className="flex relative text-left">
{/* Status Display */}
{lineEditMode && (
<div className="flex items-center">
  {newLine.status === 'Published' ? (
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
  )}
</div>
)}
  {/* Cancel button */}
  <button
          className="text-white bg-zinc-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-zinc-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-5 py-2 mx-4"
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
    {lineEditMode ? 'Publish' : 'Create'}
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
      {lineEditMode ? 'Publish' : 'Publish'}
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
   options={publishedTicketProducts} // Use the state for filtered published tickets
   selectedValues={selectedProducts} // Use the state variable here
   onSelect={handleProductSelect} // This function should update the selectedProducts
   onRemove={handleProductSelect} // This function should update the selectedProducts
   displayValue="ProductName" // Make sure this matches an existing key in your ticket objects
   placeholder="Select products"
  onChange={setSelectedProducts}
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
             {/* Details Section */}
             {lineEditMode && (
       <div className="bg-zinc-800 p-4 text-white rounded mt-4">
      <div className="mb-3">
        <label className="font-semibold">Item ID</label>
        <p>{newLine.itemId}</p>
      </div>
      <div className="mb-3">
        <label className="font-semibold">Created</label>
        <p>{new Date(lineAutomatedValues.created).toLocaleString()} by AI</p>
      </div>
      <div className="mb-3">
        <label className="font-semibold">Last edited</label>
        <p>{new Date(lineAutomatedValues.lastEdited).toLocaleString()} by AI</p>
      </div>
      <div className="mb-3">
        <label className="font-semibold">Last published</label>
        <p>{new Date(lineAutomatedValues.lastPublished).toLocaleString()} by AI</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow" onClick={() => handleLineArchive(currentLineId)}>Archive</button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded shadow" onClick={() => initiateDeleteLine(currentLineId)}>Delete</button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow" onClick={() => handleLineDuplicate(currentLineId)}>Duplicate</button>


      </div>
    </div>
       )}

{showDeleteConfirmationModal && (
  <div className="flex overflow-y-auto overflow-x-hidden fixed inset-0 z-100 justify-center items-center">
    <div className="relative p-4 w-full max-w-md h-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={cancelLineFormDelete}
        >
          {/* Close icon */}
        </button>
        <div className="p-4 md:p-5 text-center">
          {/* Alert icon */}
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={confirmDeleteLine}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={cancelLineFormDelete}
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
   

  </main>
)}
</div>


<div className={`${isTicketListVisible && isLineListVisible ? 'hidden' : 'flex-grow flex flex-row bg-zinc-800 text-white'}`}>
  
{isOrderListVisible && (
   <div className={`overflow-auto ${isOrderFormVisible ? 'w-2/5' : 'w-full'} transition-width duration-300 ease-in-out`}>
    {/* Header */}
    {!isOrderFormVisible && (
  <div className="flex justify-between items-center p-2 sticky top-0 z-10 bg-zinc-900 shadow">
    <h2 className="text-xl font-bold">
      {isOrderSelecting ? `${selectedOrders.length > 0 ? `${selectedOrders.length} Order(s) selected` : 'Select Orders...'}` : 'Orders'}
    </h2>
    <div className="flex space-x-2">
      {isOrderSelecting ? (
        <>
          {selectedOrders.length > 0 && (
            <>
              {orders.filter(order => selectedOrders.includes(order._id) && order.status === 'fulfilled').length > 0 && (
                <>
                  <button
                    className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded"
                    onClick={() => handleSetStatusForSelectedOrders('unfulfilled')}
                  >
                    Set as Unfulfilled
                  </button>
                  <button
                    className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded"
                    onClick={() => handleSetStatusForSelectedOrders('refunded')}
                  >
                    Set as Refunded
                  </button>
                </>
              )}
            </>
          )}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleOrderCancelClick}>Cancel</button>
        </>
        
      ) : (
        <>
          <div className="relative bg-zinc-700 rounded text-white">
  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
  <input
    type="text"
    placeholder="Search orders..."
    className="text-sm rounded pl-10 p-2 bg-zinc-700 text-white w-full"
    value={searchOrderTerm}
    onChange={(e) => {
      setIsSearching(true);
      handleOrderSearchChange(e);
    }}
    onMouseEnter={() => setIsLoading(false)} 
    onMouseLeave={() => setIsSearching(false)}
  />
</div>


          <div className="relative">
          <button onClick={toggleOrderModal} className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded flex items-center justify-between" type="button">
    {selectedFilter} {/* Display the selected filter */}
    <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {isOrderModalOpen && (
  <div ref={modalRef} className="absolute left-0 mt-2 w-48 bg-zinc-700 text-white shadow-lg rounded-lg overflow-hidden z-10">
    <ul className="list-none pl-4 pb-4">
      <li className={`py-2 hover:bg-zinc-700 rounded-md pl-2 cursor-pointer flex items-center ${selectedFilter === 'All Orders' ? 'text-green-500' : ''}`} onClick={() => handleStatusFilter('')}>
        {selectedFilter === 'All Orders' && <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
        All Orders
      </li>
      { /* Unfulfilled */ }
      <li className={`py-2 hover:bg-zinc-700 rounded-md pl-2 cursor-pointer flex items-center ${selectedFilter === 'unfulfilled' ? 'text-green-500' : ''}`} onClick={() => handleStatusFilter('unfulfilled')}>
        {selectedFilter === 'unfulfilled' && (
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        )}
        <svg className="w-4 h-4 mr-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FBBF24" /></svg>
        Unfulfilled
      </li>
      { /* Fulfilled */ }
      <li className={`py-2 hover:bg-zinc-700 rounded-md pl-2 cursor-pointer flex items-center ${selectedFilter === 'fulfilled' ? 'text-green-500' : ''}`} onClick={() => handleStatusFilter('fulfilled')}>
        {selectedFilter === 'fulfilled' && <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
        <svg className="w-4 h-4 mr-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#10B981" /></svg>
        Fulfilled
      </li>
      { /* Disputed */ }
      <li className={`py-2 hover:bg-zinc-700 rounded-md pl-2 cursor-pointer flex items-center ${selectedFilter === 'disputed' ? 'text-green-500' : ''}`} onClick={() => handleStatusFilter('disputed')}>
        {selectedFilter === 'disputed' && <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
        <svg className="w-4 h-4 mr-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#EF4444" /></svg>
        Disputed
      </li>
      { /* Refunded */ }
      <li className={`py-2 text-zinc-400 hover:bg-zinc-700 rounded-md pl-2 cursor-pointer flex items-center ${selectedFilter === 'refunded' ? 'text-green-500' : ''}`} onClick={() => handleStatusFilter('refunded')}>
        {selectedFilter === 'refunded' && <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
        <svg className="w-4 h-4 mr-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#9CA3AF" /></svg>
        Refunded
      </li>
    </ul>
  </div>
)}


          </div>

          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleOrderSelectClick}>Select</button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold p-2 rounded" onClick={handleExportAllOrders}>Export</button>
        </>
      )}
    </div>
  </div>
)}



    {/* Orders table */}
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-zinc-200">
        <thead>
          <tr>
          {isOrderSelecting ? (
  <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
    <input
      type="checkbox"
      checked={selectedOrders.length === orders.length && allOrdersFulfilled}
      onChange={handleSelectAllOrders}
      disabled={!allOrdersFulfilled} // Ensure checkbox is only enabled if all orders are 'fulfilled'
      className={`accent-white mr-4 ${!allOrdersFulfilled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
    />
    Order Number
  </th>
) : (
  <th className="mr-2 px-4 py-2 font-medium text-left text-white whitespace-nowrap">Order Number</th>
)}
    {!isOrderFormVisible && (
      <>
        <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Status</th>
        <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Customer</th>
        <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Date</th>
        <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Items</th>
        <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">Total</th>
      </>
    )}
  </tr>
</thead>

<tbody className="divide-zinc-200">
  {/* Check if it's loading */}
  {isLoading ? (
    [...Array(5)].map((_, index) => (
      <tr key={`skeleton-${index}`} className="animate-pulse">
        <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded"></div></td>
        {!isOrderFormVisible && (
          <>
            <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded"></div></td>
            <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded w-3/4"></div></td>
            <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded w-1/2"></div></td>
            <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded w-1/4"></div></td>
            <td className="px-4 py-2"><div className="h-4 bg-zinc-200 rounded w-1/4"></div></td>
          </>
        )}
      </tr>
    ))
  ) : orders.length > 0 ? (
    orders.map((order, index) => (
      <tr
        key={order._id}
        className={`${index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'} hover:bg-zinc-600 cursor-pointer ${isOrderSelecting && selectedOrders.includes(order._id) ? 'bg-zinc-600' : ''}`}
        onClick={() => {
          if (!isOrderSelecting) {
            setSelectedOrderDetails(order); // Set the selected order details
            setIsOrderFormVisible(true); // Show the order form
          } else {
            // Handle order selection logic here if needed
            const isSelected = selectedOrders.includes(order._id);
            setSelectedOrders(isSelected ? selectedOrders.filter(id => id !== order._id) : [...selectedOrders, order._id]);
          }
        }}
      >
        {/* Always display the order number */}
        <td className="px-4 py-2 text-white whitespace-nowrap">{order.order_id}</td>

        {/* Conditionally display other details if the order form is not visible */}
        {!isOrderFormVisible && (
          <>
            <td className="px-4 py-2 text-white whitespace-nowrap">{order.status}</td>
            <td className="px-4 py-2 text-white whitespace-nowrap">{order.customer_full_name}</td>
            <td className="px-4 py-2 text-white whitespace-nowrap">{new Date(order.created_on).toLocaleDateString()}</td>
            <td className="px-4 py-2 text-white whitespace-nowrap">{order.items_count}</td>
            <td className="px-4 py-2 text-white whitespace-nowrap">{order.order_total}</td>
          </>
        )}
      </tr>
    ))
  ) : (
    // Display this row if no orders match the search
    <tr>
      <td colSpan="1" className="text-center text-white py-4">No orders found</td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  </div>
)}
{isOrderFormVisible && (

<main className="w-full p-4 bg-zinc-800 overflow-y-auto">
    {isOrderModalVisible && (
  <div className="fixed inset-0 bg-zinc-700 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" style={{zIndex: 999}}>
    <div className="bg-zinc-900 rounded-lg max-w-sm mx-auto p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-4">Exit Without Saving?</h2>
      <p>This item can't be saved because it has errors. Would you like to exit without saving?</p>
      <div className="flex justify-end mt-4">
        <button onClick={() => setIsLineModalVisible(false)} className="bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-l">
          Keep editing
        </button>
        <button onClick={handleOrderCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
          Exit Without Saving
        </button>
      </div>
    </div>
  </div>
)}
   <div className="h-full bg-zinc-800 p-6">
    
<div className="flex items-center justify-between mb-8 bg-zinc-800 text-white p-4">
  {/* Back arrow and title */}
  <div className="flex items-center space-x-4">
  <button
  className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 flex items-center justify-center"
  onClick={() => setIsOrderFormVisible(false)}
  style={{ width: '50px', height: '50px' }} // Set the button size explicitly if you need a square button
>
  {/* Back arrow icon */}
  <SVGArrow />
</button>
<div>
      <h2 className="text-xl font-semibold">4ed-Oad</h2> {/* Dynamically replace '4ed-Oad' with order ID */}
      <p>Status: Fulfilled</p> {/* Dynamically replace 'Fulfilled' with order status */}
    </div>
  </div>

  {/* Right section with action buttons */}
  <div className="flex items-center">
    {/* Dropdown for more actions */}
    <div className="relative inline-block text-left">
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus:ring-offset-gray-100 focus:ring-zinc-500"
        id="menu-button" aria-expanded="true" aria-haspopup="true"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
      >
        More actions
        {/* Icon for dropdown */}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {/* Dropdown menu, conditional rendering based on state */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          {/* Actual dropdown items */}
        </div>
      )}
    </div>

    {/* Unfulfill order button */}
    <button
      className="ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      onClick={() => {}} // Add your unfulfill order logic here
    >
      Unfulfill order
    </button>

    {/* Refund button */}
    <button
      className="ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      onClick={() => {}} // Add your refund logic here
    >
      Refund
    </button>
  </div>
</div>


<div className="bg-zinc-800 p-4 rounded-lg">
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs text-gray-400 uppercase bg-zinc-700">
        <tr>
          <th scope="col" className="py-3 px-6">Item</th>
          <th scope="col" className="py-3 px-6">SKU</th>
          <th scope="col" className="py-3 px-6">Quantity</th>
          <th scope="col" className="py-3 px-6">Price</th>
        </tr>
      </thead>
      <tbody>
        {/* Assuming you might have multiple items in an order, iterate through them. If it's always one, adjust accordingly. */}
        <tr className="bg-zinc-700 border-b border-zinc-600">
          <td className="py-4 px-6">
            <div className="flex items-center">
              {/* If you have item images, replace the path accordingly */}
              <img className="w-8 h-8 mr-3" src="/path/to/item/image" alt="Item Image" />
              {/* Dynamically insert item name here */}
              Cortland Spring Break
            </div>
          </td>
          <td className="py-4 px-6">
            {/* Dynamically insert SKU here */}
            CU-SB-CM-HV-FM-24-RT
          </td>
          <td className="py-4 px-6">
            {/* Dynamically insert quantity here */}
            1
          </td>
          <td className="py-4 px-6">
            {/* Dynamically insert price here */}
            $140.00 USD
          </td>
        </tr>
        {/* Totals Row */}
        <tr className="bg-zinc-800 text-white">
          <td colSpan="3" className="py-4 px-6 text-right">Subtotal</td>
          <td className="py-4 px-6">
            {/* Dynamically insert subtotal here */}
            $140.00 USD
          </td>
        </tr>
        <tr className="bg-zinc-800 text-white">
          <td colSpan="3" className="py-4 px-6 text-right">Total</td>
          <td className="py-4 px-6">
            {/* Dynamically insert total here */}
            $140.00 USD
          </td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4 text-sm text-gray-400">
      Stripe Payment Charge ID: 
      {/* Dynamically insert Stripe Payment Charge ID here */}
      ch_3QfEuXFfEGtjCaG1WTdpTql
      <a href="https://dashboard.stripe.com" className="text-blue-500 hover:underline ml-1">Go to Stripe dashboard</a>
    </div>
  </div>
</div>

<div className="bg-zinc-800 p-4 rounded-lg text-white max-w-md mx-auto">
    {/* Order History Section */}
    <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Order history</h4>
        <div className="bg-zinc-700 p-4 rounded-md">
            <p>Order Fulfilled <span className="float-right">08:03 AM, Feb 2, 2024</span></p>
            <p>Order Received <span className="float-right">12:04 AM, Feb 2, 2024</span></p>
        </div>
    </div>

    {/* Billing Details Section */}
    <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Billing details</h4>
        <div className="bg-zinc-700 p-4 rounded-md">
            <p>Name: Jillian Maiorano</p>
            <p>Address: 1832 East 31 Street Brooklyn NY 11233 US</p>
            <p>Email: Jillianrose325@gmail.com</p>
            <p>Payment: <span className="font-bold">VISA</span> ending in 2414</p>
        </div>
    </div>

    {/* Additional Info Section */}
    <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Additional info</h4>
        <div className="bg-zinc-700 p-4 rounded-md">
            <p>Notes: Student Name:Jillian Maiorano Student Email:Jillianrose325@gmail.com Student Phone:6465100065 Parent Name: Parent Phone: Parent Email: Invoice Number: Stop:Hicksville Student 2 Name: Student 2 Email: Student 2 Phone:</p>
        </div>
    </div>
</div>


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
