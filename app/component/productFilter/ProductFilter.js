'use client'
import { useState, useEffect, useCallback } from 'react';
import { debounce } from "lodash"
import { fetchProductsByName ,updateProductQuantity} from '@/app/utils/api';

const ProductFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [updatingProductId, setUpdatingProductId] = useState(null); // Track which product is being updated
  const [error, setError] = useState(null);
  // Debounced search for products
  const debouncedFetchProducts = useCallback(
    debounce(async (term) => {
      if (term.length > 0) {
        try {
          const products = await fetchProductsByName(term);
          setFilteredProducts(products);
        } catch (err) {
          setError('Error fetching products');
        }
      } else {
        setFilteredProducts([]);
      }
    }, 300), // 300ms debounce delay
    []
  );

  // Handle input change for the search bar
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedFetchProducts(e.target.value);
  };

  // Handle quantity increment
  const incrementQuantity = async (id, currentQuantity) => {
    await updateQuantity(id, parseInt(currentQuantity) + 1);
  };

  // Handle quantity decrement
  const decrementQuantity = async (id, currentQuantity) => {
    if (currentQuantity > 0) {
      await updateQuantity(id, parseInt(currentQuantity) - 1);
    }
  };

  // Handle updating quantity with API call
  const updateQuantity = async (id, newQuantity) => {
    try {
      setUpdatingProductId(id); // Disable the button during update
      await updateProductQuantity(id, newQuantity);
      setSelectedProducts((prev) => ({
        ...prev,
        [id]: newQuantity,
      }));
    } catch (err) {
      setError('Error updating quantity');
    } finally {
      setUpdatingProductId(null); // Re-enable the buttons after update
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-4">
      <input
        type="text"
        placeholder="Search product"
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Dropdown for filtered products */}
      {filteredProducts.length > 0 && (
        <ul className="mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className="flex justify-between items-center p-2 border-b last:border-b-0"
            >
              <span>{product.name}</span>
              <div className="flex items-center">
                <button
                  className={`${updatingProductId === product._id ? 'bg-gray-400':'bg-blue-600'} text-white px-2 py-1 text-sm rounded-md`}
                  onClick={() => decrementQuantity(product._id, selectedProducts[product._id] || product.quantity)}
                  disabled={updatingProductId === product._id}
                >
                  -
                </button>
                <span className="mx-2">{selectedProducts[product._id] || product.quantity}</span>
                <button
                  className={`${updatingProductId === product._id ? 'bg-gray-400':'bg-blue-600'} text-white px-2 py-1 text-sm rounded-md`}
                  onClick={() => incrementQuantity(product._id, selectedProducts[product._id] || product.quantity)}
                  disabled={updatingProductId === product._id}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductFilter;
