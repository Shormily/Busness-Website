import React from 'react';
import {  Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Login.css";
import useAuth from '../Hooks/useAuth';
const Login = () => {
  

  const {signusInWithGoogle} = useAuth();
  
    return (
      
        <>
              <div>
        <div
          className="container  mt-5 shadow    col-12 col-md-12 col-lg-12 p-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="" data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 className="text-center text-primary">Log In</h1>
            <h1 className="text-center">Drop Us A Line</h1>
            <input
              className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow "
              placeholder="Name*"
              type="text"
            />
            <br />
            <input
              className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow"
              placeholder="E-mail*"
              type="text"
            />
            <br />
            <textarea
              className="mt-5 p-4 col-lg-6 col-md-6 col-12 w-100 shadow"
              placeholder="Message"
              type="text"
            />
            <Nav.Link
              className="text-center mt-2 text-success"
              as={NavLink}
              to="/signup"
            >
              You have already an account ? please sign up?{" "}
            </Nav.Link>
            <div className="d-flex mt-2 col-12 col-md-12 col-lg-12">
              <button className="googole-btn p-2 w-25 ">Log In</button>

              <button className="googole-btn p-2 w-25 ms-auto col-sm-12" onClick={signusInWithGoogle}>
                Google Log In
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;