import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="mt-5 pagination flex gap-[10px] justify-end text-white items-center max-sm:justify-start text-sm">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={
                currentPage === number
                  ? "active bg-black px-2 py-1 rounded-lg"
                  : "px-2 py-1 rounded-lg"
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
