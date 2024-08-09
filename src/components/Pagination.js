import React from 'react';

function Pagination({ totalItems, pageSize, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const maxPageButtons = 5;
    let startPage, endPage;

    if (totalPages <= maxPageButtons) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const middlePage = Math.floor(maxPageButtons / 2);
        if (currentPage <= middlePage + 1) {
            startPage = 1;
            endPage = maxPageButtons;
        } else if (currentPage + middlePage >= totalPages) {
            startPage = totalPages - maxPageButtons + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - middlePage;
            endPage = currentPage + middlePage;
        }
    }

    const pages = Array.from({ length: (endPage - startPage + 1) }, (_, index) => startPage + index);

    return (
        <div className="flex justify-center my-10">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 border rounded mx-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`px-3 py-1 border rounded mx-1 ${currentPage === page ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1 border rounded mx-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
