// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [bookData, setBookData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch book data
    axios.post('http://localhost:5000/api/bookData')
      .then(response => {
        setBookData(response.data.book);
        setCategoryData(response.data.category);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Book Data</h2>
      <ul>
        {bookData.map(book => (
          <li key={book._id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>

      <h2>Category Data</h2>
      <ul>
        {categoryData.map(category => (
          <li key={category._id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
