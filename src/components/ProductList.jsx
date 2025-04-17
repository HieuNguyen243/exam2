import React, {useState, useEffect} from 'react';

const ProductList = ({products, deleteProduct, toggleStatus, EdittingProduct}) => {

    return (
        <div className='card p-4'>
            <h3 className="text-center">Danh Sách Sản Phẩm</h3>
            {products.length === 0 ?(<p className="text-center">Chưa có sản phẩm nào.</p>):
                (
                    products.map(product => (
                        <div key={product.id} className="card p-3 mb-2">
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <p>Giá: {product.price}đ</p>
                            <p>Trạng Thái: {product.status}</p>
                            <div className="d-flex gap-2">
                                <button onClick={() => toggleStatus(product.id)} className='btn'>
                                    {product.status === "Còn hàng" ? "Đánh dấu hết hàng" : "Đánh dấu còn hàng"}
                                </button>

                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>
                                    Xóa
                                </button>

                                <button onClick={() => EdittingProduct(product)} className='btn btn-danger'>
                                    Sửa
                                </button>

                            </div>

                        </div>
                        )
                    )
                )
            }
        </div>
    );
}

export default ProductList;