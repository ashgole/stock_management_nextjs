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
  const response = await fetch(`${rootPath}/api/product`,{cache:'no-store'});
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};

// Fetch products by name
export const fetchProductsByName = async (name) => {
  const res = await fetch(`/api/product?name=${name}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
};

// Update product quantity
export const updateProductQuantity = async (productId, newQuantity) => {
  const res = await fetch('/api/product/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, newQuantity }),
  });
  if (!res.ok) {
    throw new Error('Failed to update quantity');
  }
  return await res.json();
};
