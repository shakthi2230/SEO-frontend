import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "animate.css"; // Importing animation library
import Image1 from "../../images/aboutus/expert-google-search.webp"
import { CheckCircleFill } from "react-bootstrap-icons"
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./animate.css";
import Image22 from "../../images/about/01.jpg"

const AboutUs = () => {
    const containerStyle = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%', // Full width of the container
        backgroundColor: '#f8f9fa', // Optional: Background color
        padding: '10px 0', // Optional: Padding for aesthetics
    };

    const scrollingTextStyle = {
        display: 'inline-block',
        animation: 'scroll 15s linear infinite', // Animation duration and behavior
        fontSize: '2.5rem', // Font size
    };



    return (
        <section className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="shape-img-bg">
                <img className="mask-img" src={Image22} alt="" />
                <div className="img-bg-shape">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                    <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                      <stop className="stop-color2" offset="0%" stopOpacity="1" />
                      <stop className="stop-color1" offset="100%" stopOpacity="1" />
                    </linearGradient>
                    <path fill="url(#imagewave)">
                      <animate
                        repeatCount="indefinite"
                        attributeName="d"
                        dur="5s"
                        values={`M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                            c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                            c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                            c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                            
                            M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                            c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                            c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                            C48.9,198.6,57.8,191,51,171.3z;
                            
                            M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                            c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                            c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                            c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z`}
                      />
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10">
              <div className="theme-title mb-4">

                <h6>About Zammy Zaif</h6>
                <h2>
                Google Expert from India - Asia
                </h2>
                <p>
                Zammy Zaif, an SEO expert from Tirunelveli, Tamilnadu, India, achieved first place on Google for "Google Ranking Expert" through his dedication, hard work, and early adoption of SEO, beginning his career when Google PageRank emerged.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="flaticon flaticon-check-mark"></i>Best SEO Expert in India
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="flaticon flaticon-check-mark"></i> Google Ranking Expert
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="flaticon flaticon-check-mark"></i> GMB Ranking Specialist
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="flaticon flaticon-check-mark"></i> Internet Influencer
                    </li>
                  </ul>
                </div>
              </div>
              <a className="themeht-btn secondary-btn mt-5" href="#">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

// Inline styles for the components
const styles = {
    container: {
        backgroundColor: "#f9f9f9",
        padding: "50px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    row: {
        display: "flex",
        alignItems: "center",
    },
    imageCol: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "80%", // Adjust the image size
        borderRadius: "10px",
    },
    textCol: {
        textAlign: "left",
        paddingLeft: "30px",
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
    paragraph: {
        fontSize: "1.2rem",
        color: "#555",
        lineHeight: "1.6",
        marginBottom: "30px",
    },
    list: {
        display: "grid", // Grid display for two columns
        gridTemplateColumns: "repeat(2, 1fr)", // Two columns
        gap: "20px",
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        fontSize: "1.1rem",
        color: "#333",
        marginBottom: "10px",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "1.1rem",
        marginTop: "20px",
    },
};

export default AboutUs;
