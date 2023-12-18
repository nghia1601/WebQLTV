import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AddBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    CategoryName: '',
    img: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Gửi dữ liệu đến máy chủ
      const response = await fetch('https://web-qltv-api.vercel.app/api/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Ghi log phản hồi từ máy chủ
      console.log(data);

      // Xóa biểu mẫu
      setFormData({
        name: '',
        CategoryName: '',
        img: '',
        description: '',
        price: '',
      });
    } catch (error) {
      console.error('Lỗi khi thêm sách:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-4">Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tên Sách</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="CategoryName" className="form-label">Loại Sách</label>
            <input type="text" className="form-control" id="CategoryName" name="CategoryName" value={formData.CategoryName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image URL</label>
            <input type="text" className="form-control" id="img" name="img" value={formData.img} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Mô Tả</label>
            <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Giá</label>
            <input type="text" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
