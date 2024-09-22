
// components/Page.js

import { fetchProducts } from "@/app/utils/api";

const Page = async () => {
  const products = await fetchProducts();
  return (
    <div className="overflow-x-auto mt-4">
      {/* {error && <div className="text-red-500">{error}</div>} */}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Product</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
            <th className="px-4 py-2 border border-gray-300">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-2 border border-gray-300 text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
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

export default Page;
