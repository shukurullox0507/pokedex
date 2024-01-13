// TypeFilter.tsx

import React, { useState } from 'react';

interface TypeFilterProps {
  types: string[];
  onFilterChange: (selectedTypes: string[]) => void;
}

const TypeFilter: React.FC<TypeFilterProps> = ({ types, onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeSelect = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const applyFilters = () => {
    onFilterChange(selectedTypes);
  };

  return (
    <div className="type-filter">
      {/* Display type filter options */}
      {types.map((type) => (
        <label key={type}>
          <input
            type="checkbox"
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeSelect(type)}
          />
          {type}
        </label>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default TypeFilter;
