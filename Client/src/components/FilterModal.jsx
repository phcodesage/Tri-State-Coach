import React from 'react';

const FilterSection = ({ title, options, selectedOption, setName, onChange }) => (
  <div className="space-y-2">
    <h4 className="font-medium text-white">{title}</h4>
    <div className="space-y-1">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-3">
          <input
            type="radio"
            name={setName}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm text-white-700">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const FilterModal = ({ isOpen, onClose, filterCriteria, setFilterCriteria, resetFilters, applyFilters }) => {
  if (!isOpen) {
    return null;
  }

  const handleFilterChange = (setName) => (e) => {
    setFilterCriteria({ ...filterCriteria, [setName]: e.target.value });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modalDialogTitle"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity bg-zinc-500 bg-opacity-75" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-zinc-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-700">
            <h3 className="text-lg font-medium leading-6 text-white px-2 py-1">Filter</h3>
            <button className="text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded" onClick={resetFilters}>Reset</button>
            <button type="button" className="text-zinc-400 bg-transparent hover:text-white" onClick={onClose}>
              <span className="sr-only">Close</span>
              {/* SVG for 'x' icon */}
              {/* Inline SVG omitted for brevity */}
            </button>
          </div>
          <div className="px-4 py-6 space-y-4">
            {/* Reusable Filter sections */}
            <FilterSection
              title="Status"
              options={['All', 'Published', 'Draft', 'Scheduled', 'Archived']}
              selectedOption={filterCriteria.status}
              setName="status"
              onChange={handleFilterChange('status')}
            />
            <FilterSection
              title="Published"
              options={['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days']}
              selectedOption={filterCriteria.published}
              setName="published"
              onChange={handleFilterChange('published')}
            />
            <FilterSection
              title="Created"
              options={['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days']}
              selectedOption={filterCriteria.created}
              setName="created"
              onChange={handleFilterChange('created')}
            />
            <FilterSection
              title="Modified"
              options={['All', 'Last 24 hours', 'Last 7 days', 'Last 30 days']}
              selectedOption={filterCriteria.modified}
              setName="modified"
              onChange={handleFilterChange('modified')}
            />
            {/* Add more FilterSections as needed */}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={applyFilters}
            >
              Apply filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
