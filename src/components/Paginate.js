import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Paginate = ({ itemsPerPage, totalItems, changePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination pagination-lg">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a
                  href="#"
                  onClick={() => changePage(number)}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
