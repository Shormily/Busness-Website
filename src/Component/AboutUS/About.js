import React from 'react';
import img5 from "../Images/img5.jpg";
import men4 from "../Images/men4.jpg";
import men1 from "../Images/men1.webp";
import men2 from "../Images/men2.jpg";
import men3 from "../Images/men3.jpg";
import CountUp from 'react-countup';
import "./About.css";
const About = () => {
    return (
        <>
    
    <section className="container mt-5 font">
      <div className="row about-text  d-flex mt-5" >
       <div data-aos="fade-up"
     data-aos-duration="3000">
       <h1 className="text-center mt-2 aboutus-h1">About us</h1>
       </div>
       
        <div className="col-12 col-md-12 col-lg-7 " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img
            src={img5}
            className="col-12 col-md-12 col-lg-7 mt-5 rounded-0 bg-white shadow p-2"
            alt=""
          />
        </div>
        <div className="col-12 col-md-12 col-lg-5" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
       
          <h1 className="text-center mt-5 about-h1-tag">
            We Help You To Get Your Best Work Done.
          </h1>
          <p className=" ">
            We’re all about creating a great experience for our members and
            adding them to a remarkable group of thousands of people who’ve made
            us what we are today. Since 2008, we’ve grown from one location in
            an old factory building in New York to seven locations in USA in
            general, and we’re still growing! Our mission is connecting
            like-minded people.
          </p>
        </div>
      </div>
    </section>
    <section className="text-center">
      <div className="container mt-5">
        <div className="row d-flex countUp ">
          <div className="col-lg-3 col-md-6 col-12">
              
            <CountUp end={2050} duration={100} className="countup-font " />
            <p className="about-pragraph">COFFEE CUPS</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <CountUp end={2144} duration={100} className="countup-font" />
            <p className="about-pragraph">SATISFIED CLIENTS</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <CountUp end={3128} duration={100} className="countup-font" />
            <p className="about-pragraph">FINISHED PROJECTS</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <CountUp end={9748} duration={100} className="countup-font" />
            <p className="about-pragraph">WORKING HOURS</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="about-text ">
        <div className="row mt-5 banner-text">
          <div className="aboutus-img text-center container text-light col-12 col-lg-12 col-md-12 font">
            <div data-aos="fade-up"
     data-aos-duration="3000">
            <p className="mt-5">WHAT WE DO</p>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Bound To Give You Prosperity & Confidence</h2>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="3000">
            <p>
              Open floor plans, communal desks for teams and private offices in
              a bright, airy atmosphere create an affordable,
            </p>
            </div>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <p>
              professional alternative to working from home, encourage
              collaboration and allow you to find new inspiration, every day.
            </p>
            </div>
           
           
           
           
          </div>
        </div>
      </div>
    </section>
    {/* <section>
            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-lg-4 col-12 col-md-6 box-sizing mx-1 mb-2  ">
                        <h1>GROWTH</h1>
                        <p>
                            You will be able to develop and grow in your profession thanks
                            to an appropriate environment in our coworking.
                        </p>
                    </div>
                    <div className="col-lg-4 col-12 col-md-6 mx-1 box-sizing mb-2 ">
                        <h1>RESULT</h1>
                        <p>
                            We ensure you, your productivity will grow and you will meet the
                            deadlines without stress working in our coworking.
                        </p>
                    </div>
                    <div className="col-lg-4 col-12 col-md-6 box-sizing mx-1 mb-2">
                        <h1>GROWTH</h1>
                        <p>
                            Your projects will be done successfully, and in time. In general
                            your professional results will become higher and high-quality.
                        </p>
                    </div>
                </div>
            </div>
        </section> */}
    <section>
      <div data-aos="fade-up"
     data-aos-duration="3000">
      <p className="text-center mt-5 font  ">OUR PROFESSIONALS</p>
      </div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <h1 className="text-center  mb-4 font">Meet Our Team</h1>
      </div>
      
      
      <div className="container">
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-3 font text-center gx-2" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div>
              <img className="picture-aboutus mb-4" src={men1} alt="" />
            </div>
            <div>
              <p className="text-center">JAMES DANIELS</p>
              <p className="text-center">Owner</p>
              <p className="text-center">
                Experienced businessman and programmer, who wants to unite
                people.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 font text-center " data-aos="fade-up"
     data-aos-duration="3000">
              <div >
              <img className="picture-aboutus mb-4 " src={men2} alt="" />
              </div>
            <div>
            <p className="text-center">DREAMA LEOS</p>
            <p className="text-center">Manager</p>
            <p className="text-center">
              Experienced businessman and programmer, who wants to unite people.
            </p>
            </div>
           
          </div>
          <div className="col-12 col-md-6 col-lg-3 font text-center" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <div>
              <img className="picture-aboutus mb-4 " src={men3} alt="" />
              </div>
          <div>
          <p>ROBERTO JOHNSON</p>
            <p>Supervisor</p>
            <p>
              A professional economist, who handles with coworking financial
              deals.
            </p>
          </div>
            
          </div>
          <div className="col-12 col-md-6 col-lg-3 font text-center"  data-aos="fade-up"
     data-aos-duration="3000">
              <div>
              <img className="picture-aboutus mb-4" src={men4} alt="" />
              </div>
           <div>
           <p>KRISTY BUTLER</p>
            <p>Manager</p>
            <p>
              Experienced businessman and programmer, who wants to unite people.
            </p>
           </div>
           
          </div>
        </div>
      </div>
    </section>
   
  </>
    );
};

export default About;