import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './StepBox.css'; // Custom CSS for gradients
import Image1 from "../../images/portfolio/01.jpg"
import Image2 from "../../images/portfolio/02.jpg"
import Image3 from "../../images/portfolio/03.jpg"
import Image4 from "../../images/portfolio/04.jpg"
import Image5 from "../../images/portfolio/05.jpg"
import Image6 from "../../images/portfolio/06.jpg"

const StepBox = () => {
    const [filter, setFilter] = useState('*');

    const portfolioItems = [
        { id: 1, category: 'cat3', title: 'SEO Tracking Analysis', image: Image1 },
        { id: 2, category: 'cat3', title: 'Email Marketing Solution', image: Image2 },
        { id: 3, category: 'cat4', title: 'Offline SEO Marketing', image: Image6 },
        { id: 4, category: 'cat2', title: 'Article Data Analysis', image: Image3 },
        { id: 5, category: 'cat2', title: 'Online Media Management', image: Image4 },
        { id: 6, category: 'cat1', title: 'Design System & UI Kit', image: Image5 },
    ];

    const filteredItems = filter === '*'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div>
            <section class="step-process-area position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="step-item style-1 text-white">
                                <div class="step-icon">
                                    <i class="flaticon flaticon-search-analysis"></i>
                                </div>
                                <h4>Research</h4>
                                <p class="mb-0">Migrating your rank Google Analytics to another solution.</p>
                                <span>1st Step</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-6 mt-md-0">
                            <div class="step-item style-1 text-white step-bg">
                                <div class="step-icon">
                                    <i class="flaticon flaticon-market-analysis"></i>
                                </div>
                                <h4>Customize</h4>
                                <p class="mb-0">Migrating your rank Google Analytics to another solution.</p>
                                <span>2nd Step</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-6 mt-lg-0">
                            <div class="step-item style-1 text-white">
                                <div class="step-icon">
                                    <i class="flaticon flaticon-target"></i>
                                </div>
                                <h4>Targeting</h4>
                                <p class="mb-0">Migrating your rank Google Analytics to another solution.</p>
                                <span>3rd Step</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-6 mt-lg-0">
                            <div class="step-item style-1 text-white step-bg">
                                <div class="step-icon">
                                    <i class="flaticon flaticon-results"></i>
                                </div>
                                <h4>Result</h4>
                                <p class="mb-0">Migrating your rank Google Analytics to another solution.</p>
                                <span>4th Step</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dark-bg ht-bg-move"></div>
            </section>
            <section class="price-section">
                <div class="container-fluid px-lg-10">
                    <div class="row align-items-center my-6">
                        <div class="col-lg-4 col-md-12 ps-lg-8 order-lg-1">
                            <div class="theme-title z-index-1">
                                <h6>Pricing Plan</h6>
                                <h2>Unbeatable Pricing Find Your Perfect Plan Now</h2>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="row gx-lg-2 align-items-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="price-table">
                                        <h3 class="price-title">Basic</h3>
                                        <div class="price-list">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Increase Traffic 130%
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>SEO Optimization
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Social Media Management
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Content Marketing
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>24/7 Hours Support
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="price-value">
                                            <h2>
                                                <sup>$</sup>24
                                            </h2>
                                            <span>/Month</span>
                                        </div>
                                        <a class="themeht-btn primary-btn" href="#">
                                            <span>Choose Plan</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-6 mt-md-0">
                                    <div class="price-table price-active">
                                        <div class="price-label">Popular</div>
                                        <h3 class="price-title">Premium</h3>
                                        <div class="price-list">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Increase Traffic 130%
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>SEO Optimization
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Social Media Management
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Content Marketing
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>24/7 Hours Support
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="price-value">
                                            <h2>
                                                <sup>$</sup>48
                                            </h2>
                                            <span>/Month</span>
                                        </div>
                                        <a class="themeht-btn dark-btn" href="#">
                                            <span>Choose Plan</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-6 mt-lg-0">
                                    <div class="price-table">
                                        <h3 class="price-title">Advanced</h3>
                                        <div class="price-list">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Increase Traffic 130%
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>SEO Optimization
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Social Media Management
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>Content Marketing
                                                </li>
                                                <li>
                                                    <i class="flaticon flaticon-check"></i>24/7 Hours Support
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="price-value">
                                            <h2>
                                                <sup>$</sup>72
                                            </h2>
                                            <span>/Month</span>
                                        </div>
                                        <a class="themeht-btn primary-btn" href="#">
                                            <span>Choose Plan</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="overflow-hidden p-0">
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col">
                            <div class="marquee-wrap">
                                <div class="marquee-text">
                                    <span>Analysis</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>SEO</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Marketing</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Digital</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Agency</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Digital Marketing</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Business Solutions</span>
                                    <i class="bi bi-square-fill"></i>
                                    <span>Marketing Strategy</span>
                                    <i class="bi bi-square-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          

            <section>
            <div className="container " >
                <div className="row align-items-end">
                    <div className="col-lg-6 col-md-12 mb-5">
                        <div className="theme-title  ">
                            <h6>Portfolio</h6>
                            <h2>Let’s Check Latest Work from here</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-lg-end mb-5">
                        <div className="portfolio-filter">
                            <button onClick={() => handleFilterChange('*')} className={filter === '*' ? 'is-checked' : ''}>All</button>
                            <button onClick={() => handleFilterChange('cat1')} className={filter === 'cat1' ? 'is-checked' : ''}>Design</button>
                            <button onClick={() => handleFilterChange('cat2')} className={filter === 'cat2' ? 'is-checked' : ''}>Marketing</button>
                            <button onClick={() => handleFilterChange('cat3')} className={filter === 'cat3' ? 'is-checked' : ''}>Branding</button>
                            <button onClick={() => handleFilterChange('cat4')} className={filter === 'cat4' ? 'is-checked' : ''}>Development</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="light-bg  mt-5 " >
                <div className="container">
                    <div className="row mt-n15">
                        <div className="col-lg-12 col-md-12">
                            <div className="grid columns-3 row popup-gallery">
                                <div className="grid-sizer"></div>

                                {filteredItems.map(item => (
                                    <div key={item.id} className={`grid-item ${item.category}`}>
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img className="img-fluid w-100" src={item.image} alt={item.title} />
                                                <a className="portfolio-btn" href="#">
                                                    <i className="bi bi-arrow-down-right"></i>
                                                </a>
                                            </div>
                                            <div className="portfolio-title">
                                                <span>Branding</span>
                                                {/* <span>{item.category.replace('cat', '').charAt(0).toUpperCase() + item.category.slice(3)}</span> */}
                                                <h4>
                                                    <a href="#">{item.title}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Shape */}
                <div className="wave-shape top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,224L24,197.3C48,171,96,117,144,106.7C192,96,240,128,288,160C336,192,384,224,432,208C480,192,528,128,576,122.7C624,117,672,171,720,186.7C768,203,816,181,864,154.7C912,128,960,96,1008,69.3C1056,43,1104,21,1152,21.3C1200,21,1248,43,1296,74.7C1344,107,1392,149,1416,170.7L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
                    </svg>
                </div>
            </section>
        </section>





        </div>
    );
};

export default StepBox;
