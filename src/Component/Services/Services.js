import React from 'react';
import { Accordion } from "react-bootstrap";
import img7 from "../Images/img7.jpg";
import img9 from "../Images/img9.png";
import "./Services.css";

const Services = () => {
    return (
        <>
        <section className="container">
          <div className="row d-flex service-text">
            <div className="col-12 col-md-6 col-lg-5">
              <p className="text-dark mt-5 ">Our Work Process</p>
             
                <h1 className="mb-5 text-primary" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                  We Have Created Professional ServiceFor Our Visitors
                </h1>
              
  
                <Accordion defaultActiveKey="0" data-aos="flip-up" data-aos-duration="3000">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>CREATE A COMMUNITY</Accordion.Header>
                    <Accordion.Body>
                      Make meaningful connections and increase your day-to-day
                      potential by building relationships with like-minded
                      individuals.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>PERFECT WORKSPACE</Accordion.Header>
                    <Accordion.Body>
                      We provides the flexibility needed to create a motivational
                      and energizing environment where you work well.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
             
            </div>
            <div
              className="col-12 col-md-6 col-lg-7"
             
            >
              <img
                className="col-lg-12 col-md-12 col-12 rounded-0 bg-white shadow p-2 mt-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={img7}
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row service-text">
              <p className="text-center text-danger mt-5">OUR SERVICES</p>
              <h1 className="text-center text-primary">Look Our Best Services</h1>
            </div>
          </div>
        </section>
        <section className="center mx-5 ">
          <div className="center mt-5">
            <div className="container">
              <div className="row d-flex center">
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-brands fa-d-and-d fa-5x mb-3 text-primary"></i>
                  <h2 className=" text-primary">BEST PRICES</h2>
                  <p>
                    You can select one of the suggested plan, which perfect fits
                    to you. at the best price.
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-solid fa-scale-balanced fa-5x text-primary mb-3"></i>
                  <h2 className="text-primary ">CONSULTING</h2>
                  <p>
                    You can consult with our experts and like-minded people
                    according your projects.
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-solid fa-envelope-open-text fa-5x text-primary mb-3"></i>
                  <h2 className="text-primary">BRAINSTORMING</h2>
                  <p>
                    We always hold brainstorming meeetings in our coworking space
                    for like-minded people.
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-solid fa-arrow-up-right-dots fa-5x text-primary mb-3"></i>
                  <h2 className="text-primary ">GROWTH</h2>
                  <p>
                    You can develop and increase your professional skills in the
                    coworking.
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-solid fa-book-open-reader fa-5x text-primary mb-3"></i>
                  <h2 className="text-primary ">LIBRARY</h2>
                  <p>
                    You get an access to a huge library, where you can find needed
                    materials for your work.
                  </p>
                </div>
                <div
                  className="col-lg-4 col-md-6 box-sizing mx-1 mb-2 shadow p-5"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <i className="fa-solid fa-comments-dollar fa-5x text-primary mb-3"></i>
                  <h2 className="text-primary ">VARIETY OF WORKSPACE</h2>
                  <p>
                    We provide you with different types of coworking space, that
                    your time is productive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-img mt-5">
          <div className="container text-light p-5">
            <div className="row banner-text">
              <div
                className="col-lg-6 col-12 col-md-6"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
              >
                <p>OUR FEATURES</p>
                <h2>We Are Here To Increase Your Productivity.</h2>
                <p>
                  We are a workplace community of entrepreneurs, startups,
                  freelancers, and innovative companies seeking flexible office
                  space in creative environments. We provide the platform –
                  offices, desks, conference rooms, networking opportunities,
                  internet, coffee, etc. – so that you can focus on the success of
                  your business.
                </p>
              </div>
              <div
                className="col-lg-6 col-12 col-md-6"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <p>INNOVATIVE APPROACH</p>
                <p>
                  From coffee to office supplies , we set you up with the
                  amenities you need so that you can focus on your business.
                </p>
                <h6>QUALITY TIME</h6>
                <p>
                  We provide perfect conditions for your productive work and that
                  your projects are done in time.
                </p>
                <h6>BEST SUPPORT</h6>
                <p>
                  Our managers are always at your service. They help you with any
                  matters with big pleasure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
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
                  <h4 className="text-primary">MEMBERSHIP</h4>
                  <h1>
                    <sup>$</sup>35<sub>/month</sub>
                  </h1>
                  <p className="text-primary">
                    If you are looking for a perfect workplace it is a best option
                    for you.
                  </p>
  
                  <button className="button-service text-light bg-primary mt-3 mb-5">
                    Read More
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-2">
                <div
                  className=" card p-3 w-100 h-100  card-color  "
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img className="img-size  " src={img9} alt="" />
                  <h4 className="text-light">PRIVATE OFFICE</h4>
                  <h1 className="text-light">
                    <sup>$</sup>
                    <span className="text-light">90</span>
                    <sub>/month</sub>
                  </h1>
                  <p className="text-light">
                    If you need private workspace, our beautiful offices are the
                    perfect solution.
                  </p>
  
                  <button className="button-service text-dark bg-light mt-3 mb-5">
                    Read More
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-3">
                <div
                  className="card  p-3 w-100 h-100 shadow "
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img className="img-size " src={img9} alt="" />
                  <h4 className="text-primary">DEDICATED DESK</h4>
                  <h1 className="mt-2">
                    <sup>$</sup>
                    <span>60</span>
                    <sub>/month</sub>
                  </h1>
                  <p className="text-primary">
                    Choosing this plan you will be provided with your personal
                    desk.
                  </p>
  
                  <button className="button-service text-light bg-primary mt-3 mb-5">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="servic-img mt-5">
          <div className="container">
            <div className="row">
              <div
                className="text-center text-light col-lg-12 col-md-12 col-12 mt-5 "
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <h2>Still Have Some Questions Left?</h2>
                <h1>Call Us Tel:013-121-55566</h1>
                <p>
                  Feel free to contact our support team to learn more about the
                  services provided by us and multiple offers for Your business!
                </p>
                <button className="contact-service-btn ">Contact US</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-md-6 col-lg-6 p-5 "
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
              >
                <p className="text-primary">GET IN TOUCH</p>
                <h1 className="mb-4">Contact Details</h1>
                <p>
                  If you are interested in working with us then please drop us a
                  line, we would love to hear from you.
                </p>
                <p className="shadow pb-4 pt-1">
                  <span>
                    <i className="fa-solid fa-location-dot mx-3 mt-2 fa-3x text-primary"></i>
                  </span>
                  121 Wallstreet Street, New York , USA
                </p>
                <p className="shadow pb-4 pt-1">
                  <span>
                    <i className="fa-solid fa-envelope mx-3 mt-2 fa-3x text-primary"></i>
                  </span>
                  Shormilyrais@gmail.com
                </p>
                <p className="shadow pb-4 pt-1">
                  <span>
                    <i className="fa-solid fa-phone mx-3 mt-2 fa-3x text-primary"></i>
                  </span>
                  + 013-121-55566{" "}
                </p>
              </div>
              <div
                className="col-12 col-md-12 col-lg-6 p-5"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
              >
                <p className="text-primary">CONTACT US</p>
                <h1>Drop Us A Line</h1>
                <input
                  className="mt-5 mb-3 p-3 col-lg-6 col-md-6 col-12 w-100 shadow"
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
                 <button className="banner-button mt-2 ">Send</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Services;