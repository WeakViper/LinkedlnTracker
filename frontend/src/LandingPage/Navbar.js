import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const handleClickLogin= () =>{
        navigate("/signin")
    }
    const handleSignUp= () =>{
        navigate("/signup")
    }
    const handlehome=()=>{
        navigate("/home")
    }
    const handlesettings=()=>{
        navigate("/settings")
    } 

    return (
        <nav class="navbar navbar-expand-md navbar-dark introNavbar">
          <div class="container-fluid">
              <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              </div>

              <div class="mx-auto order-0 d-flex align-items-center">
                <h1 className="ms-0 hw text-white fw-bold">Linkedln Messenger</h1>
              </div>
      
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <button className='btn btn-orange rounded-pill ms-auto px-5 mx-3 btn-primary' onClick={handleClickLogin}>Login</button>
                <button className='btn btn-orange rounded-pill px-5 mr-5 btn-primary' onClick={handleSignUp}>SignUp</button>
              </div> 
          </div>
        </nav>
    );

}
 
export default Navbar;