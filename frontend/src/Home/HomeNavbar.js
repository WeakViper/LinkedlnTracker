import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeNavbar.css";
import { Link } from 'react-router-dom';
import { House , Person, ChevronDown } from 'react-bootstrap-icons';
import { NavDropdown } from 'react-bootstrap';

const HomeNavbar = () => {
    const navigate = useNavigate();

    const handlehome=()=>{
        navigate("/home")
    }
    const handlesettings=()=>{
        navigate("/settings")
    } 

    return (
        <nav class="navbar navbar-expand-md navbar-dark introNavbar">
          <div class="container-fluid">
            <div class="me-auto">
                <Link to="/home" className="menu-icon-link">
                    <House className= "mx-0 list-icon-home" size={45}/>
                </Link>
            </div>
              <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              </div>

              <div class="mx-auto order-0 d-flex align-items-center">
                <h1 className="ms-0 hw text-white fw-bold">Linkedln Messenger</h1>
              </div>


              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className=" ms-auto px-5 mx-3">
                    <NavDropdown
                        title={<div className="d-flex align-items-center"><Person className="text-white me-2" size={35}/><ChevronDown className="text-white" /></div>}
                        id="profile-dropdown"
                        className="custom-dropdown"
                    >
                    <NavDropdown.Item href="/userprofile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/4.4">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </div>    
                </div> 
            </div> 
        </nav>
    );

}
 
export default HomeNavbar;