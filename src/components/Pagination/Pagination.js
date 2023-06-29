// import React, { useContext } from "react";
// import ContextShop from "../../context/ContextShop";
//
// const PaginationExample = () => {
//   const { totalItems, currentPage, setCurrentPage, paginate, itemsPerPage } =
//     useContext(ContextShop);
//
//   // Calculate the total number of pages
//
//   // Handle page change
//   const handlePageChange = (page) => {
//     paginate(page);
//   };
//
//   // No need for useEffect to fetch data, assuming it's done in the context
//
//   return (
//     <div>
//       {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//         (page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             disabled={page === currentPage}
//           >
//             {page}
//           </button>
//         )
//       )}
//     </div>
//   );
// };
//
// export default PaginationExample;
