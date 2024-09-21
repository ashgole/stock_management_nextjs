// components/ProductTable.js
import { fetchProducts } from '@/app/utils/api';
import { useEffect, useState } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch and set product data
  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts(); // Fetch products on component mount
  }, []);

  return (
    <div className="overflow-x-auto">
      {error && <div className="text-red-500">{error}</div>}
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

export default ProductTable;
