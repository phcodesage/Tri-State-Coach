import React from 'react'

function TicketList() {
  return (
    <>
    <div className={`flex flex-col ${isTicketFormVisible ? 'w-1/3' : 'w-full'} bg-gray-800 text-white`}>
  <div className="p-4 flex justify-between items-center">
    <h2 className="text-xl font-bold">Tickets</h2>
    {!isTicketFormVisible && (
      <div className="flex items-center">
        {/* Buttons go here */}
        <input type="text" placeholder="Search tickets..." className="text-sm rounded p-2 bg-gray-700" />
        <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Filter</button>
        <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Select</button>
        <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Export</button>
        <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Import</button>
        <button className="ml-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Settings</button>
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsTicketFormVisible(true)}
        >
          + New Ticket
        </button>
      </div>
    )}
  </div>
    <ul className="overflow-y-auto">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
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
          {tickets.map((ticket) => (
            <tr
              key={ticket._id}
              onClick={() => handleTicketSelect(ticket)}
              className="hover:bg-gray-700 cursor-pointer"
            >
              <td className="p-2">{ticket.name}</td>
              <td className={`p-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-300 text-gray-800'}`}>
                {ticket.status}
              </td>
              {/* Other cells... */}
              <td className="p-2 text-left">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    pinTicket(ticket._id);
                  }}
                  disabled={isTicketFormVisible}
                  className="text-gray-600 hover:text-gray-900"
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
    </>
  )
}

export default TicketList