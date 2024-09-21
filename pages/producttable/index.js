import { fetchProducts } from "@/app/utils/api";

const ProductTable = ({ products, error }) => {
  return null
  // return (
  //   <div className="overflow-x-auto">
  //     {error && <div className="text-red-500">{error}</div>}
  //     <table className="min-w-full table-auto border-collapse border border-gray-300">
  //       <thead className="bg-gray-100">
  //         <tr>
  //           <th className="px-4 py-2 border border-gray-300">Product</th>
  //           <th className="px-4 py-2 border border-gray-300">Price</th>
  //           <th className="px-4 py-2 border border-gray-300">Quantity</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {products.length > 0 ? (
  //           products.map((product) => (
  //             <ProductRow key={product._id} product={product} />
  //           ))
  //         ) : (
  //           <tr>
  //             <td colSpan="3" className="px-4 py-2 border border-gray-300 text-center">
  //               No products available
  //             </td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

const ProductRow = ({ product }) => {
  return (
    <tr className="text-center">
      <td className="px-4 py-2 border border-gray-300">{product.name}</td>
      <td className="px-4 py-2 border border-gray-300">${product.price}</td>
      <td className="px-4 py-2 border border-gray-300">{product.quantity}</td>
    </tr>
  );
};

// Fetch product data from server-side
export async function getServerSideProps() {
  let products = [];
  let error = null;

  try {
    products = await fetchProducts(); // Fetch products via your API call
    console.log('ok products',products )
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      products,
      error,
    },
  };
}

export default ProductTable;
