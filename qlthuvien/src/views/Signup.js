import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'






export default function Signup() {
  const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
      
    //     const response = await fetch("http://localhost:5000/api/creatuser", {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
    //     });
    //     const json = await response.json()
    //     console.log(json);

    //     if(!json.success){
    //       alert("Nhập thông tin đăng nhập hợp lệ")
    //     }
    // } 

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch("http://localhost:5000/api/creatuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation})
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
    
        if (json.success) {
          alert("Đăng Ký Thành Công");
          navigate("/loginuser")
          
          
        } else {
          alert("Có lỗi xảy ra trong quá trình xử lý.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Có lỗi xảy ra trong quá trình gửi yêu cầu.");
      }
    }
    
    const onChange=(event) =>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Họ Tên</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Email</label>
            <input type="text" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Passowrd</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Địa Chỉ</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/loginuser" className='m-3 '>Đả có tài khoản !</Link>
        </form>
      </div>
    )
  }
  