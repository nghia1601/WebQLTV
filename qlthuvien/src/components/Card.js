import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>

                    <img src="https://cf.shopee.vn/file/0709dc1278f56bae15597fad741d8f20" className="card-img-top" alt="..." />


                    <div className="card-body">
                        <h5 className="card-title">{props.bookName}</h5>
                        <p className="card-text">Thông Tin Sách</p>
                        <div className='d-inline h-100 fs-5'>
                            {props.price}
                        </div>
                        <div className='container' style={{ width: "100%" }}>
                            {/* <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                                
                            </select> */}
                            <button type="submit" className="m-3 btn btn-success">Mượn Sách</button>


                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
