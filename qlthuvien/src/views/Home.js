import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';




export default function Home() {
  const [search, setSearch] = useState('');
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
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            {/* <div className="carousel-caption" id='carousel'> */}

                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <div className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>
                </div>

                <div className="carousel-inner" id="anhCarousel">
                    <div className="carousel-item active">
                        <img src="https://th.bing.com/th/id/R.20b9ae028ac1a7f4902387337d49bf60?rik=2h1j06C865hA6Q&pid=ImgRaw&r=0" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">     
                        <img src="https://source.unsplash.com/random/900x700/?novel" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100" style={{ filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
            {/* </div> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

          </div>
      </div>



      <div className='container'>
      <div className='m-3'>
      {
        Array.isArray(bookCat) && bookCat.length !== 0
          ? bookCat.map((data) => (<div className='row mb-3'>
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {bookItem.length !== 0
              //bookItem !== []
              ? 
              bookItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
              .map(filterItems=>{
                return (
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card bookItem={filterItems}
                          
                    ></Card>
                  </div>
                )
              }
              ): <div> No Such Data Found </div> }
              </div>
            ))
          : "No data found"
      }

        
      </div>
      </div>
      <div><Footer /></div> 
    </div>
  );
}
