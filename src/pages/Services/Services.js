import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image1 from "../../images/Services/01 (1).png";
import Image2 from "../../images/Services/02.png";
import Image3 from "../../images/Services/03.png";
import Imagefly from "../../images/shape-small-1.png"
import { Carousel } from 'react-bootstrap';

const Services = () => {


  return (
    <>
      <section className="pt-0">
        <div className="rocket-shade">
          <img className="img-fluid" src={Imagefly} alt="" />
        </div>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <div className="featured-item style-1 text-center">
                <div className="featured-icon">
                  <img className="img-fluid" src={Image1} alt="" />
                </div>
                <div className="featured-title">
                  <h4>Google Maps Rank Services</h4>
                </div>
                <div className="featured-desc">
                  <p>
                    Our GBP Pack 3 optimizes your local SEO to boost your business to the top of Google’s Local Pack.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-6 mt-md-0">
              <div className="featured-item style-1 featured-active text-center">
                <div className="featured-icon">
                  <img className="img-fluid" src={Image2} alt="" />
                </div>
                <div className="featured-title">
                  <h4>Google Rank Services</h4>
                </div>
                <div className="featured-desc">
                  <p>
                    If you're on the first page but not getting leads because you're not at the top, we can help.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-6 mt-lg-0">
              <div className="featured-item style-1 text-center">
                <div className="featured-icon">
                  <img className="img-fluid" src={Image3} alt="" />
                </div>
                <div className="featured-title">
                  <h4>Mentoring</h4>
                </div>
                <div className="featured-desc">
                  <p>
                    Mentoring provides personalized guidance and support to help individuals grow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="stats-carousel mb-5"
        style={{
          background: 'linear-gradient(115deg, var(--themeht-primary-color), var(--themeht-secondary-color))', // Gradient background with vibrant colors
          padding: '60px 0',
          borderRadius: '10px', // Rounded corners for the section
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        }}
      >
        <Carousel interval={1000} controls={false} indicators={false}>
          <Carousel.Item>
            <div className="text-center text-white">
              <h2 style={{ fontSize: '2rem', fontWeight: '700' }}> {/* Bold text */}
                <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#fff' }}></i> {/* Increased icon size */}
                Client Retention
              </h2>
              <h1 style={{ fontSize: '5rem', fontWeight: '800' }}> {/* Bold text */}
                98 %
              </h1>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center text-white">
              <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
                <i className="bi bi-calendar-fill" style={{ fontSize: '4rem', color: '#fff' }}></i> {/* Increased icon size */}
                Years of Service
              </h2>
              <h1 style={{ fontSize: '5rem', fontWeight: '800' }}> {/* Bold text */}
                16
              </h1>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center text-white">
              <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
                <i className="bi bi-person-fill" style={{ fontSize: '4rem', color: '#fff' }}></i> {/* Increased icon size */}
                Professionals
              </h2>
              <h1 style={{ fontSize: '5rem', fontWeight: '800' }}> {/* Bold text */}
                60 +
              </h1>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center text-white">
              <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
                <i className="bi bi-people-fill" style={{ fontSize: '4rem', color: '#fff' }}></i> {/* Increased icon size */}
                Satisfied Clients
              </h2>
              <h1 style={{ fontSize: '5rem', fontWeight: '800' }}> {/* Bold text */}
                1280
              </h1>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      
    </>
  );
};

export default Services;
