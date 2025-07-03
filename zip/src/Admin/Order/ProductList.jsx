import { useState } from 'react';
import sampleData from '../../assets/mockData'; 
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const ProductList = () => {
  const [products, setProducts] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product_id: products.length + 1,
    product_name: '',
    product_Description: '',
    product_price: 0,
    product_star: 0,
    product_image: ''
  });

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
    // Reset form
    setNewProduct({
      product_id: products.length + 2,
      product_name: '',
      product_Description: '',
      product_price: 0,
      product_star: 0,
      product_image: ''
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.product_id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Product Management</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md flex items-center gap-1 sm:gap-2 hover:bg-blue-700 transition text-sm sm:text-base"
          >
            <FiPlus size={16} /> Add Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" size={16} />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="pl-9 sm:pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Products Table - Mobile View */}
        <div className="sm:hidden space-y-3">
          {filteredProducts.map((product) => (
            <div key={product.product_id} className="bg-white rounded-lg shadow p-3">
              <div className="flex items-start gap-3">
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="h-12 w-12 object-contain rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm sm:text-base">{product.product_name}</h3>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FiEdit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.product_id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs line-clamp-2 mt-1">{product.product_Description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-medium text-sm">₹{product.product_price.toLocaleString()}</span>
                    <span className="text-yellow-500 text-sm">{product.product_star} ★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Table - Desktop View */}
        <div className="hidden sm:block bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Description</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.product_id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                        className="h-10 w-10 object-contain"
                      />
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-sm">{product.product_name}</div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 max-w-xs hidden md:table-cell">
                      <div className="text-gray-600 text-sm truncate">{product.product_Description}</div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                      ₹{product.product_price.toLocaleString()}
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm">
                        <span className="text-yellow-500 mr-1">{product.product_star}</span>
                        ★
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <FiEdit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.product_id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Add New Product</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1 text-sm sm:text-base">Product Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    value={newProduct.product_name}
                    onChange={(e) => setNewProduct({...newProduct, product_name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm sm:text-base">Description</label>
                  <textarea
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    rows="3"
                    value={newProduct.product_Description}
                    onChange={(e) => setNewProduct({...newProduct, product_Description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm sm:text-base">Price (₹)</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    value={newProduct.product_price}
                    onChange={(e) => setNewProduct({...newProduct, product_price: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm sm:text-base">Rating (0-5)</label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    value={newProduct.product_star}
                    onChange={(e) => setNewProduct({...newProduct, product_star: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 text-sm sm:text-base">Image URL</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    value={newProduct.product_image}
                    onChange={(e) => setNewProduct({...newProduct, product_image: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 border rounded-md hover:bg-gray-100 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;