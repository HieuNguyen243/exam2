
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null)

  // Lấy dữ liệu từ data.json khi component mount
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Lỗi khi lấy dữ liệu:', error));
  }, []);

  // Lưu dữ liệu vào localStorage mỗi khi procducts thay đổi
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, {...newProduct, id: products.length+1 }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  
  const toggleStatus = (id) => {
    setProducts(products.map(
      product => product.id === id
        ?{...product, status: product.status === "Còn hàng" ? "Hết hàng" : "Còn hàng"}
        : product))
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(
      product => product.id === updatedProduct.id ? updatedProduct : product
        )
    )
    setEditProduct(null);
  }

  const EdittingProduct = (EdittingProduct) => {
    setEditProduct(EdittingProduct);
  }
  return(
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quản Lý Sản Phẩm</h1>
      <ProductForm 
        addProduct={addProduct}
        updateProduct={updateProduct}
        EditProduct = {editProduct}
      />
      <ProductList 
        products={products}
        deleteProduct={deleteProduct}
        toggleStatus={toggleStatus}
        EdittingProduct = {EdittingProduct}
      />
    </div>
  );

}
export default App;