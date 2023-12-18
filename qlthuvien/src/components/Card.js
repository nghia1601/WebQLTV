import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
export default function Card(props) {
let dispatch = useDispatchCart();
let data = useCart()
    // const [qty, setQty] = useState(1);
    // const [size, setSize] = useState("")
    const handleAddToCart = async () =>{
        // let book = []
        // for (const item of data) {
        //     if(item.id === props.bookItem._id) {
        //         book = item;
        //         break;
        //     }
        // }
        

        await dispatch({type:"ADD", id:props.bookItem._id, name:props.bookItem.name, price:props.bookItem.price, img:props.bookItem.img})
        console.log(data)
    }
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "700px" }}>

                    <img src={props.bookItem.img} className="card-img-top" alt="..." style={{ height:"300px", objectFit:"fill"}} />


                    <div className="card-body">
                        <h5 className="card-title">{props.bookItem.name}</h5>
                        <p className="card-text">Thông Tin Sách</p>
                        <div className='d-inline h-100 fs-5'>
                            Giá Thuê: {props.bookItem.price} VNĐ
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
                    <button className={`btn btn-success justify-center ms-2`} style={{marginTop: '-15px'}} onClick={handleAddToCart}>Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
