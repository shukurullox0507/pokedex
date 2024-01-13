// SearchBox.tsx

import React, { useState } from 'react';

interface SearchBoxProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search Pokemon..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBox;
