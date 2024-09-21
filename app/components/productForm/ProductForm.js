// components/ProductForm.js
import { addProduct } from '@/app/utils/api';
import { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await addProduct(formData);
      console.log('Product added:', data);
      setFormData({ name: '', price: '', quantity: '' });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="price">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
