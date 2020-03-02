import React from "react";
import logo from "../Assets/images/Elearning-logo.png";
import headerStyle from "./Css/Header.module.css";
import {Link,NavLink} from 'react-router-dom';  


const Header = () => {
  return (
    <div className="bg-light p-3 position-relative ">
      <div className='container'>
      <nav className="navbar navbar-expand-md bg-light text-dark  navbar-light">
        {/* Brand */}
        <Link className="navbar-brand" to="/trang-chu">
          <img src={logo} />
        </Link>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className={headerStyle.dropdown}>
                <Link className="nav-link" to="/trang-chu">
                  Home
                </Link>
                <div className={headerStyle.dropdownContent}>
                  <a href="#">Home 1</a>
                  <a href="#">Home 2</a>
                  <a href="#">Home 3</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <a className="nav-link" href="#">
                  About
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className={headerStyle.dropdown}>
                <Link className="nav-link" to="courses">
                  Courses
                </Link>
                <div className={headerStyle.dropdownContent}>
                  <Link to="courses">Courses</Link>
                  <a href="#">Course List</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className={headerStyle.dropdown}>
                <a className="nav-link" href="#">
                  Blog
                </a>
                <div className={headerStyle.dropdownContent}>
                  <a href="#">Blog 1</a>
                  <a href="#">Blog 2</a>
                  <a href="#">Blog 3</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className={headerStyle.dropdown}>
                <a className="nav-link" href="#">
                  Events
                </a>
                <div className={headerStyle.dropdownContent}>
                  <a href="#">Event 1</a>
                  <a href="#">Event 2</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          
          </ul>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav ">
          <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                <button className='btn'>Sign in</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
              <button className='btn btn-success'data-toggle="modal" data-target="#modalRegisterForm">Sign up</button>
              </Link>
              <div>
  <div className="modal fade" id="modalRegisterForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <div className="md-form mb-5">
            <i className="fa fa-user prefix grey-text mr-2" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Your name</label>
            <input type="text" id="orangeForm-name" className="form-control validate" />
            
          </div>
          <div className="md-form mb-5">
            <i className="fa fa-envelope prefix grey-text mr-2" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your email</label>
            <input type="email" id="orangeForm-email" className="form-control validate" />
            
          </div>
          <div className="md-form mb-4">
            <i className="fa fa-lock prefix grey-text mr-2" />
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass">Your password</label>
            <input type="password" id="orangeForm-pass" className="form-control validate" />
           
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button className="btn btn-success">Sign up</button>
        </div>
        <div class="options text-left mx-5">
                <p class="pt-1">Already have an account? <Link to="sign-in" data-dismiss="modal" class="blue-text">Log In</Link></p>
              </div>
      </div>
    </div>
  </div>
  
</div>

            </li>
          </ul>

        </div>
      </nav>
      </div>  
      

      

    </div>
  );
};

export default Header;
