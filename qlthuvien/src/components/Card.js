import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3"  style={{ "width": "18rem", "maxHeight": "360px" }}>
                    
                    <img  src="https://i.pinimg.com/originals/d5/61/71/d561719414a4c0d89e9d6bf5f3bcee8b.jpg" className="card-img-top" alt="..." />
                    
                    
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

                            <div className='d-inline h-100 fs-5'>
                                Giá Thuê:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
