import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();


  const [credentials, setcredentials] = useState({ email: "", password: ""});
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://web-qltv-trnghia.vercel.app/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        alert("Đăng Nhập Thành Công");
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/")
        
      } else {
        alert("Có lỗi xảy ra trong quá trình xử lý.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Email Hoặc Password Không Đúng !");
    }
  }
  
  const onChange=(event) =>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Email</label>
            <input type="text" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Passowrd</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 '>Chưa có tài khoản, đăng ký ngay !</Link>
        </form>
      </div>
  )
}
