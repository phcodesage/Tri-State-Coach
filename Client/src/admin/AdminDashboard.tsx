import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
   const navigate = useNavigate();
   const [lines, setLines] = useState([]);
  const navigateRef = useRef(navigate);
  const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);
   const [isLineFormVisible, setIsLineFormVisible] = useState(false);
   const toggleLineFormVisibility = () => {
      setIsLineFormVisible(!isLineFormVisible);
    };
    const toggleTicketFormVisibility = () => {
      setIsTicketFormVisible(!isTicketFormVisible);
    };
    const authToken = localStorage.getItem('token'); // or your state management
    const [creationTime, setCreationTime] = useState(new Date().toISOString());
   const [lastEditedTime, setLastEditedTime] = useState('');
   const [lastPublishedTime, setLastPublishedTime] = useState('');
   const [ticketData, setTicketData] = useState({
      productType: '',
      name: '',
      slug: '',
      description: '',
      price: '',
      compareAtPrice: '',
      sku: '',
      trackInventory: false,
      requiresShipping: false,
    });
    const [newLine, setNewLine] = useState({
      name: '',
      status: 'Published', // default value
      products: 0, // default value, assuming it's a new line with no products yet
      modified: new Date().toISOString(),
      published: new Date().toISOString(),
    });

    const createLine = async (lineData) => {
      const authToken = localStorage.getItem('token');
    
      if (!authToken) {
        console.error('Auth token is not available.');
        navigateRef.current('/login');
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
          navigateRef.current('/login');
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
   
    
    // Fetch lines when the component mounts
  useEffect(() => {
   async function fetchLines() {
     const response = await fetch('http://localhost:5000/api/lines');
     const data = await response.json();
     setLines(data);
   }

   fetchLines();
 }, []);
}
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
         await createLine(newLine);
         // Optionally clear the form or navigate the user to another page
         setNewLine({
           name: '',
           status: 'Published',
           products: 0,
           modified: new Date().toISOString(),
           published: new Date().toISOString(),
         });
         // No need to manually fetch lines here as createLine will update the state
       };

       const handleSubmit = async (e) => {
         e.preventDefault();
         // Here you would typically make an HTTP request to your backend API
         // to create the new ticket, using the state `ticketData`.
         console.log(ticketData);
     
         // After submitting, you might want to navigate the user to a different page
         // or clear the form, depending on your UX needs.
         setTicketData({
           productType: '',
           name: '',
           slug: '',
           description: '',
           price: '',
           compareAtPrice: '',
           sku: '',
           trackInventory: false,
           requiresShipping: false,
         });
       };

  const handleLogout = () => {
   localStorage.removeItem('token'); // Remove the token
   navigate('/'); // Redirect to home page
 };

 
  return (
    <>
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Ecommerce</span>
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

{isTicketFormVisible && (<div className="p-4 sm:ml-64">
   
   <div className="my-4">
          <h1>Create New Ticket</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="productType"
              value={ticketData.productType}
              onChange={handleInputChange}
              placeholder="Product Type"
            />
            <input
              type="text"
              name="name"
              value={ticketData.name}
              onChange={handleInputChange}
              placeholder="Ticket Name"
            />
            <input
              type="text"
              name="slug"
              value={ticketData.slug}
              onChange={handleInputChange}
              placeholder="Slug"
            />
            <textarea
              name="description"
              value={ticketData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <input
              type="text"
              name="price"
              value={ticketData.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              type="text"
              name="compareAtPrice"
              value={ticketData.compareAtPrice}
              onChange={handleInputChange}
              placeholder="Compare at Price"
            />
            <input
              type="text"
              name="sku"
              value={ticketData.sku}
              onChange={handleInputChange}
              placeholder="SKU"
            />
            <label>
              Track Inventory:
              <input
                type="checkbox"
                name="trackInventory"
                checked={ticketData.trackInventory}
                onChange={(e) => setTicketData({ ...ticketData, trackInventory: e.target.checked })}
              />
            </label>
            <label>
              Requires Shipping:
              <input
                type="checkbox"
                name="requiresShipping"
                checked={ticketData.requiresShipping}
                onChange={(e) => setTicketData({ ...ticketData, requiresShipping: e.target.checked })}
              />
            </label>
            <button type="submit">Create Ticket</button>
          </form>
        </div>
</div>
)}

{isLineFormVisible && (
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
    <div className="p-4 sm:ml-64">
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
            <tbody className="divide-y divide-gray-200">
              {lines.map((line) => (
                <tr key={line._id}>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.name}</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.status}</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{line.products}</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{new Date(line.modified).toLocaleString()}</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{new Date(line.published).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  </div>
  
  
)}

    </>
  );
              }
  
export default AdminDashboard;
