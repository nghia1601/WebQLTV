
import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer.js';
import AdminPage from './views/AdminPage.js';
import UserList from './views/UserList.js';




function App() {
  return (

    <CartProvider>




      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loginuser" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route exact path="/userList" element= {<UserList/>} />
            

            
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
