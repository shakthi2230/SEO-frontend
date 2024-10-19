import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import Image from "../images/01.png"
import Image1 from "../images/flyanimate.png"
import Logo from "../images/it2-logo.svg"
import { ArrowRight, Grid3x3GapFill } from 'react-bootstrap-icons';
import './Landingpage.css';
import countryData from '../Json/countries+states+cities.json';
import { Carousel } from 'react-bootstrap';

const LandingPageWithNavBar = () => {
    const [carouselWord, setCarouselWord] = useState('AGENCY');
    const randomWords = ['AGENCY', 'BRAND', 'DESIGN', 'STRATEGY'];
    const [hover, setHover] = useState(null);
    const [fontSize, setFontSize] = useState('4rem');
    const [largeFontSize, setLargeFontSize] = useState('6rem');


    const updateFontSize = () => {
        if (window.innerWidth < 768) {
            setFontSize('3rem');
            setLargeFontSize('5rem');
        } else {
            setFontSize('4rem');
            setLargeFontSize('6rem');
        }
    };

    useEffect(() => {
        updateFontSize(); // Set initial font sizes
        window.addEventListener('resize', updateFontSize); // Update on resize
        return () => window.removeEventListener('resize', updateFontSize); // Cleanup
    }, []);

    // Define your CSS styles as JavaScript objects
    const styles = {

        textSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
        },
        heading: {
            fontSize: '3rem',
            color: '#333',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        subText: {
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '20px',
        },
        button: {
            marginRight: '10px',
            backgroundColor: '#ff9800',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
        },
        image: {
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
        },
        navbar: {
            marginTop: '2%',
            backgroundColor: '#fff',
            boxShadow: '0 14px 6px  rgba(0,0,0,0.1)',


        },
        container: {
            marginTop: "0%"
        },
        logo: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#333',
            textDecoration: 'none',
        },
        navLink: {
            color: '#333',
            marginRight: '20px',
        },
        chatButton: {
            color: '#333',
            fontSize: '1rem',
            padding: '8px 15px',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
        },

        arrowContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            border: '2px solid #ff9800',
            marginLeft: '10px',
        },
        arrowContainer2: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            border: '2px solid #dfe8e1',
            marginLeft: '10px',
        },
        arrow: {
            fontSize: '20px',
            color: '#333',
        },
        fullWidth: {
            width: '100%',  // Ensure full width for rows
            padding: '0',
            margin: '0',
        },
        navLink: (isHovered) => ({
            color: isHovered ? '#ff6600' : '#000', // Orange on hover, black otherwise
            textDecoration: 'none',
        }),




        // Media queries for responsive design
        '@media (max-width: 768px)': {
            heading: {
                fontSize: '2rem',
            },
            subText: {
                fontSize: '1rem',
            },
            image: {
                maxWidth: '100%', // Full width on smaller screens
            },
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * randomWords.length);
            setCarouselWord(randomWords[randomIndex]);
        }, 1000); // Change word every 1 second
        return () => clearInterval(interval); // Clean up the interval
    }, []);



    return (
        <>
            {/* Navbar */}
            <header id="site-header" className="header">
                <div id="header-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                {/* Navbar */}
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand logo" href="#">
                                        <img className="img-fluid" src={Logo} alt="" />
                                    </a>
                                    <button className="navbar-toggler ht-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <svg width="100" height="100" viewBox="0 0 100 100">
                                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                                            <path className="line line2" d="M 20,50 H 80"></path>
                                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
                                        </svg>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        {/* Left nav */}
                                        <ul className="nav navbar-nav mx-auto">
                                            {/* Home */}
                                            <li className="nav-item dropdown">
                                                <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Home 01</a></li>
                                                    <li><a href="#">Home 02</a></li>
                                                    <li><a href="#">Home 03</a></li>
                                                    <li><a href="#">Home 04</a></li>
                                                    <li><a href="#">Home 05</a></li>
                                                    <li><a href="#">Home 06</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="about-us#">About Us</a></li>
                                                    <li><a href="team#">Team</a></li>
                                                    <li><a href="team-single#">Team Single</a></li>
                                                    <li><a href="price-table#">Price Table</a></li>
                                                    <li><a href="faq#">Faq</a></li>
                                                    <li><a href="login#">Login</a></li>
                                                    <li><a href="coming-soon#">Coming Soon</a></li>
                                                    <li><a href="error-404#">Error 404</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Product Grid</a></li>
                                                    <li><a href="#">Product List</a></li>
                                                    <li><a href="#">Product Single</a></li>
                                                    <li><a href="#">Cart</a></li>
                                                    <li><a href="#">Checkout</a></li>
                                                    <li><a href="#">Order Completed</a></li>
                                                    <li><a href="#">Forgot Password</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="services#">Service 01</a></li>
                                                    <li><a href="services-2#">Service 02</a></li>
                                                    <li><a href="services-single#">Service Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Portfolio</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="portfolio-masonry#">Portfolio Masonry</a></li>
                                                    <li><a href="portfolio-grid-2#">Portfolio Grid 2</a></li>
                                                    <li><a href="portfolio-grid-3#">Portfolio Grid 3</a></li>
                                                    <li><a href="portfolio-slider#">Portfolio Slider</a></li>
                                                    <li><a href="portfolio-single#">Portfolio Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">News</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="blog-left-sidebar#">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar#">Blog Right Sidebar</a></li>
                                                    <li><a href="blog-single#">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="contact#">Contact 1</a></li>
                                                    <li><a href="contact-2#">Contact 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-right d-flex align-items-center">
                                        <a className="header-btn" href="contact#">Let's Chat <i className="bi bi-arrow-right"></i></a>
                                        <a href="#" className="ht-nav-toggle">
                                            <i className="bi bi-grid-fill"></i>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* Landing Page */}
            <section className="banner overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 order-lg-1 ps-lg-8">
                            <div className="banner-img animate__animated animate__fadeInRight animate__slow">
                                <img className="img-fluid" src={Image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-10 mt-lg-0">
                            <div className="animate__animated animate__shakeX animate__slow">
                                <h6>
                                    Welcome To <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </h6>
                            </div>
                            <h1 className="mb-4 animate__animated animate__shakeX animate__slow">
                                Digital Marketing <span>Agency</span>
                            </h1>
                            <p className="lead mb-5 animate__animated animate__zoomIn animate__slow">
                                Zammy Zaif, Google SEO Consultant, renowned worldwide for top-notch Google ranking expertise. Achieve unmatched online visibility and growth.
                            </p>
                            <div className="d-sm-flex align-items-center animate__animated animate__fadeInUp animate__slow">
                                <a className="themeht-btn primary-btn" href="#">
                                    <span>Get Started</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                                <a className="video-btn is-play popup-youtube ms-7" href="#">
                                    <div className="video-btn-outer-circle has-scale-animation"></div>
                                    <div className="video-btn-outer-circle has-scale-animation has-delay-short"></div>
                                    <div className="video-btn-icon is-play">
                                        <i className="flaticon flaticon-play"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                        <linearGradient id="bannerwave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                            <stop className="stop-color1" offset="0%" stopOpacity="1" />
                            <stop className="stop-color2" offset="100%" stopOpacity="1" />
                        </linearGradient>
                        <path fill="url(#bannerwave)">
                            <animate
                                repeatCount="indefinite"
                                attributeName="d"
                                dur="10s"
                                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
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
              c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                            />
                        </path>
                    </svg>
                </div>
            </section>
            


            {/* carosel */}
            
        </>
    );
};

export default LandingPageWithNavBar;
