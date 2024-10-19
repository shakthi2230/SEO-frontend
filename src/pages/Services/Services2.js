import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { FiMail, FiMonitor, FiEdit3, FiTrendingUp } from 'react-icons/fi';
import Image from "../../images/Services/2/02.png";
import './Services2.css'; // Import the CSS file

const Services2 = () => {
  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px', // Set width for the shape
    height: '50px', // Set height for the shape
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '50%', // Makes it round
    padding: '10px',
    border: '2px solid white',
    transition: 'background-color 0.3s',
  };

  const hoverStyle = {
    backgroundColor: 'white',
    color: 'blue',
  };
  return (
    <>
        <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="theme-title">
              <h6>Services</h6>
              <h2>Features Loved Our Digital Marketing Services!</h2>
            </div>
            <img className="img-fluid" src={Image} alt="" />
          </div>
          <div className="col-lg-7 ps-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="service-item style-1">
                  <div className="service-item-inner">
                    <div className="service-icon">
                      <i className="flaticon flaticon-seo-3"></i>
                    </div>
                    <div className="service-desc">
                      <div className="service-title">
                        <h4>#1 Rank Seo Strategist</h4>
                      </div>
                      <p>
                      Zammy Zaif, a leading SEO consultant since 2008, consistently delivers first-rank results for clients, recognized as an SEO First Rank Strategist since 2018.
                      </p>
                      <a className="arrow-btn" href="#">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-6">
                <div className="service-item style-1 service-active">
                  <div className="service-item-inner">
                    <div className="service-icon">
                      <i className="flaticon flaticon-content-marketing"></i>
                    </div>
                    <div className="service-desc">
                      <div className="service-title">
                        <h4>Google Maps Rank Services</h4>
                      </div>
                      <p>
                      GBP Pack 3 optimizes profiles for top local SEO rankings, boosting customer engagement and website traffic.
                      </p>
                      <a className="arrow-btn" href="#">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-6 mt-md-0">
                <div className="service-item style-1">
                  <div className="service-item-inner">
                    <div className="service-icon">
                      <i className="flaticon flaticon-digital-marketing"></i>
                    </div>
                    <div className="service-desc">
                      <div className="service-title">
                        <h4>Google Rank Services</h4>
                      </div>
                      <p>
                      If you're on the first page but not receiving leads, you've come to the right place.
                      </p>
                      <a className="arrow-btn" href="#">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-6">
                <div className="service-item style-1">
                  <div className="service-item-inner">
                    <div className="service-icon">
                      <i className="flaticon flaticon-email-2"></i>
                    </div>
                    <div className="service-desc">
                      <div className="service-title">
                        <h4>Local Seo Ranking</h4>
                      </div>
                      <p>
                      Maximize your reach with our GBP Local SEO services. According to recent reports, GBP is the most popular platform, responsible for driving 80% of local targeted traffic to neighborhood businesses.
                      </p>
                      <a className="arrow-btn" href="#">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

// Inline styles


export default Services2;
