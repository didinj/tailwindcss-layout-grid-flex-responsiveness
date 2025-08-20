// const ProductGrid = () => {
//   return (
//     <div className="grid grid-cols-3 gap-6 p-6">
//       <div className="bg-blue-200 p-4 rounded-lg">Item 1</div>
//       <div className="bg-blue-300 p-4 rounded-lg">Item 2</div>
//       <div className="bg-blue-400 p-4 rounded-lg">Item 3</div>
//       <div className="bg-blue-500 p-4 rounded-lg">Item 4</div>
//       <div className="bg-blue-600 p-4 rounded-lg">Item 5</div>
//       <div className="bg-blue-700 p-4 rounded-lg">Item 6</div>
//     </div>
//   );
// };

// export default ProductGrid;
const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-blue-500 p-6 rounded-xl text-white text-center font-semibold"
        >
          Product {i + 1}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
