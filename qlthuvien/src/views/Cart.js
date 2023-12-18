import React from 'react'
// import trash from "./trash.svg"

import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>Giỏ Hàng</div>
      </div>
    )
  }
  let totalPrice = data.reduce((total, book) => total + parseInt(book.price, 10), 0);

  return (
    <div>

      
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >STT</th>
              <th scope='col' >Tên Sách</th>
              <th scope='col' >Hình Ảnh</th>
              <th scope='col' >Ngày Thuê</th>
              <th scope='col' >Giá</th>
              <th scope='col' >Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{book.name}</td>
                <td>
                  <img src={book.img} alt={book.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </td>
                <td>{book.descripsiton}</td>
                <td>{book.price} VNĐ</td>
                
                
                <td >
                  <button type='button' className='btn p-0 bg-danger' onClick={() => dispatch({ type: 'REMOVE', index: index })}>
                    {/* Use an image here if you want */}
                    Delete
                  </button> 
                  </td>
                  </tr>
            
            
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice} VNĐ</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' > Check Out </button>
        </div>
      </div>
    </div>
  )
}