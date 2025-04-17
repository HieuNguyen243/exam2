import React, {useState, useEffect} from 'react';


const ProductForm = ({addProduct}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [status, setStatus] = useState("Còn hàng");

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if(!name) setErrors(newErrors.name = "Không được để trường tên trống!");
        else if(name.length > 30) setErrors(newErrors.name = "Tên không quá 30 kí tự!");

        if(!description) setErrors(newErrors.description = "Không được để trường mô tả trống!");
        

        if(!price) setErrors(newErrors.price = "Không được để trường giá trống!");
        else if(price < 0) setErrors(newErrors.price = "Giá không âm!");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()){
            return
        }
        else{
            const newProduct = {
                id : 0,
                name,
                description,
                price,
                status
            }

            addProduct(newProduct);
            setName('');
            setDescription('');
            setPrice('');
            setStatus('');
        }
    }

    return (
        <div className='card p-4 mb-4'>
            <h3 className="text-center">Thêm Sản Phẩm Mới</h3>

            <div className='mb-3'>
                <label className="form-label">Tên Sản Phẩm</label>
                <input 
                    type="text"
                    className='form-control'
                    value ={name}
                    onChange = {(e) => setName(e.target.value)}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className='mb-3'>
                <label className="form-label">Mô tả</label>
                <textarea
                    className='form-control'
                    value ={description}
                    onChange = {(e) => setDescription(e.target.value)}
                >
                </textarea>
                {errors.description && <small className="text-danger">{errors.description}</small>}
            </div>

            <div className='mb-3'>
                <label className="form-label">Giá</label>
                <input 
                    type="number"
                    className='form-control'
                    value ={price}
                    onChange = {(e) => setPrice(e.target.value)}
                />
                {errors.price && <small className="text-danger">{errors.price}</small>}
            </div>

            <div className='mb-3'>
                <label className="form-label">Trạng thái</label>
                <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Hết hàng">Hết hàng</option>
                </select>
                {errors.status && <small className="text-danger">{errors.status}</small>}
            </div>

            <button className = 'btn btn-success w-100' onClick={handleSubmit}>Thêm sản phẩm</button>
        </div>
    )
}

export default ProductForm;