// components/ProductTable.js
const ProductTable = () => {
    const products = [
      { id: 1, name: 'Product A', price: 50, quantity: 10 },
      { id: 2, name: 'Product B', price: 30, quantity: 5 },
      { id: 3, name: 'Product C', price: 100, quantity: 20 },
    ];

    return (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Product</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{product.name}</td>
                <td className="px-4 py-2 border border-gray-300">${product.price}</td>
                <td className="px-4 py-2 border border-gray-300">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default ProductTable;
