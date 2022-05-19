import React from "react";
import { NavLink } from "react-router-dom";
import img4 from "../Images/img4.webp";
import img9 from "../Images/img9.png";
// import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
    <section>
    <section className="row Banner-image banner-text center">
        <div className="col-md-12">
        
            <h2  data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500" className=" text-center text-light ">PROBABLY THE BEST</h2>
          
            <h1 data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500" className="text-light text-center ">This is Business Website</h1>
         
            <p  data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500" className="text-center text-light">
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo enim ipsam.
            </p>
       

          <button className="banner-button text-center " to="/aboutus" as={NavLink}>
            Get started
          </button>
        </div>
      </section>
    </section>
     
      <section className="banner-seckond-part-img">
        <div className="container p-5 text-light">
          <div className="row p-5">
            <div className="col-12 col-lg-4 col-md-12">
              <p className="text-danger">WHO WE ARE</p>
              <div data-aos="fade-right">
                <h1>We’re Creative Coworking Working Space For Sucsess</h1>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-12">
              
                <p data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                  Coworking is not only about the physical place, but about
                  establishing the coworking community first. Its benefits can
                  already be experienced outside of its places, and it is
                  recommended
                </p>
             
             
                <p  data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                  To start with building a coworking community first before
                  considering opening a Coworking place.
                </p>
             
            </div>
            <div className="col-12 col-lg-4 col-md-12">
              
                <p data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                  However, some coworking places don’t build a community: they
                  just get a part of an existing one by combining their opening
                  with
                </p>
              
             
                <p  data-aos="flip-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                  An event which attracts their target group. Real-estate
                  centric coworking spaces are about selling desks first, with
                  building community as a secondary goal.
                </p>
              
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="row banner-text">
            <div className=" col-lg-6 col-md-12 p-0 mt-0">
              <img className="w-100" src={img4} alt="" />
            </div>
            <div
              className=" col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
             >
              <p className="text-primary">WHO WE ARE</p>
              <h1 className="h1-color">It Is Modern Office,​</h1>
              <h1 className="h1-color">Only For Good Peoples</h1>
              <p className="w-75 mt-5">
                Coworking is not only about the physical place, but about
                establishing the coworking community first. Its benefits can
                already be experienced outside of its places, and it is
                recommended,
              </p>
              <p className="w-75">
                To start with building a coworking community first before
                considering opening a Coworking place.
              </p>
              <button className="banner-button-2 text-light ">
                Our Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="center mx-5 ">
        <div className="container center ">
          <div className="row">
            <div>
              <p
                className="text-info"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                OUR BENEFITS
              </p>
            </div>
            
              <h2  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className="mb-5">Your Comfort Is Our Priority</h2>
           

            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5  "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-comment-dots fa-4x mb-4 text-info"></i>

              <h4>CONFERENCE ROOMS</h4>
              <p>You can book the room for conference, presentation etc.</p>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5"
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-wifi fa-4x mb-4 text-info"></i>
              <h4>HIGH SPEED INTERNET</h4>
              <p>
                We provide you with a free high speed Internet 24/7. MAIL
                SERVICE
              </p>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-envelope mx-3 mt-2 fa-4x mb-4 text-info"></i>
              <h4>MAIL SERVICE</h4>
              <p>
                We offer mailing address and hold your mail until you are a
                member of our coworking.
              </p>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-kitchen-set fa-4x mb-4 text-info"></i>
              <h4>EQUIPPED KITCHEN</h4>
              <p>
                You can make a coffee break or have a full dinner during the day
                using our kitchen.
              </p>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5"
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-mug-hot fa-4x mb-4 text-info"></i>
              <h4>ORGANIC TEA & COFFEE</h4>
              <p>
                We provide our visitors with organic tea and coffee that they
                feel comfortable.
              </p>
            </div>
            <div
              className="col-12 col-lg-4 col-md-4 box-sizing mx-1 mb-2 shadow p-5"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <i className="fa-solid fa-computer fa-4x mb-4 text-info"></i>
              <h4>EVENTS SPACE</h4>
              <p>
                It is available to rent the space for holding meetings, events
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-last-img">
        <div
          className="container text-center mt-5"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-info">WE ARE OPEN FOR EVERYBODY</p>
          <div>
            <h3 className="">
              You Can Reserve For Yourself And Your Team Working Space By Taking
              A Subscription For Any Period And Getting A Discount For An
              Additional Week Of Coworking.
            </h3>
          </div>

          <button className="banner-button-3 text-light p-3 w-25 ">
            Make A Reservation
          </button>
        </div>

       
      </section>
      <section className="mb-5">
        <div className="container-fluid cust-main-container container mt-5 text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                className="card  p-3 w-100 h-100 shadow "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img className="img-size " src={img9} alt="" />
                <h6>MEMBERSHIP</h6>
                <h1>
                  <sup>$</sup>35<sub>/month</sub>
                </h1>
                <p>
                  If you are looking for a perfect workplace it is a best option
                  for you.
                </p>

                <button className="button-service mt-3 mb-5">Read More</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-2">
              <div
                className=" card p-3 w-100 h-100  text-light bg-color"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img className="img-size " src={img9} alt="" />
                <h6>PRIVATE OFFICE</h6>
                <h1>
                  <sup>$</sup>90<sub>/month</sub>
                </h1>
                <p>
                  If you need private workspace, our beautiful offices are the
                  perfect solution.
                </p>

                <button className="button-service mt-3 mb-5 bg-white text-dark">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div
                className="card  p-3 w-100 h-100 shadow "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <img className="img-size " src={img9} alt="" />
                <h6>DEDICATED DESK</h6>
                <h1>
                  <sup>$</sup>60<sub>/month</sub>
                </h1>
                <p>
                  Choosing this plan you will be provided with your personal
                  desk.
                </p>

                <button className="button-service mt-3 mb-5">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
