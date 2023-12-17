import React from 'react'

export default function Card(props) {
    const handleAddToCart = () =>{

    }
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "700px" }}>

                    <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height:"300px", objectFit:"fill"}} />


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
                            {/* <button type="submit" className="m-3 btn btn-success">Mượn Sách</button> */}


                        </div>
                        
                    </div>
                    <hr >
                    </hr>
                    <div className="d-flex justify-content-center">
                    <button className={`btn btn-success justify-center ms-2`} style={{marginTop: '-15px'}} onclick={handleAddToCart}>Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
