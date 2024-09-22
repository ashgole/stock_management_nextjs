// utils/api.js

import { rootPath } from "./constants";


export const addProduct = async (productData) => {
  const response = await fetch(`${rootPath}/api/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error adding product');
  }

  return await response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(`${rootPath}/api/product`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};