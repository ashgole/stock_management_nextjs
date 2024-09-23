"use client"

// context/ProductContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";

//   import { useProductContext } from "@/app/context/ProductContext";
// const { products,  } = useProductContext();

// Create ProductContext
const ProductContext = createContext();

// ProductProvider to wrap around components that need product data
export const ProductProvider = ({ children }) => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products and store them in the state
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        console.log('ok  ash',)
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for accessing product context
export const useProductContext = () => {
  return useContext(ProductContext);
};
