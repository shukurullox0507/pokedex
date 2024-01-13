// Pagination.tsx

import React from 'react';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, totalPages }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {/* Display pagination buttons */}
      {Array.from(Array(totalPages).keys()).map((page) => (
        <button key={page} onClick={() => handlePageChange(page + 1)}>
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
