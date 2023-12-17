import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/carousel';



export default function Home() {
  const [bookCat, setBookCat] = useState([]);
  const [bookItem, setBookItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/bookData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      response = await response.json();
      console.log(response);
  
      // Sử dụng trực tiếp dữ liệu từ response
      setBookItem(response.book);
      setBookCat(response.category);
    } catch (error) {
      console.error(error.message);
    }
  }
  

  // const loadData = async () => {
    
  //     let response = await fetch("http://localhost:5000/api/bookData", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     response = await response.json();
  //     console.log(response)
  //     setBookItem(response[0]);
  //     setBookCat(response[1]);
    
  // }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className='m-3'>
      {
        Array.isArray(bookCat) && bookCat.length !== 0
          ? bookCat.map((data) => (
              <div key={data._id}>Hello</div>
            ))
          : "No data found"
      }

        <Card />
      </div>
      <Footer />
    </div>
  );
}
