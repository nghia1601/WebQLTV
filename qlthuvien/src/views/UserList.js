import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const AdminPage = () => {
  
  const [userList, setUserList] = useState([]);
  const loadData = async () => {
    try {
      let response = await fetch("https://web-qltv-api.vercel.app/api/bookData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      response = await response.json();
      console.log(response);
  
      // Sử dụng trực tiếp dữ liệu từ response
      setUserList(response.user)
      // setBookItem(response.book);
      // setBookCat(response.category);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    loadData();
  }, []);

  // Đây là hàm handleDelete, hãy đảm bảo rằng bạn đã định nghĩa nó
  const handleDelete = (bookId) => {
    // Gọi API hoặc thực hiện logic xóa tại đây
    console.log('Deleting book with ID:', bookId);
  };

  return (
    <div className="container">
      <h1 className="mt-4">User List</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><Link to="/">Home Page</Link></li>
        <li className="breadcrumb-item active"><Link to="/admin">Book List</Link></li>
      </ol>

      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          Danh Sách Account
          <Link to="/adduser" className="btn btn-primary">Thêm Account</Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr className='bg-success'>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Password</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
            {userList.map((user, index) => (
                <tr key={user._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>
                    {user.location}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    {/* You can add delete/edit buttons or links here */}
                    <button type='button' className='btn p-0 bg-danger' onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                    <button type='button' className='btn p-0 btn-primary'>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
