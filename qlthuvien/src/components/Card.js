import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>

                    <img src="https://cf.shopee.vn/file/0709dc1278f56bae15597fad741d8f20" className="card-img-top" alt="..." />


                    <div className="card-body">
                        <h5 className="card-title">Tên Sách</h5>
                        <p className="card-text">Thông Tin Sách</p>
                        <div className='container' w-100>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>


                        </div>
                        <div className='d-inline h-100 fs-5'>
                            Giá Thuê: 13,999Đ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
