<Container className='mt-6' style={styles.container}>
                <Row className="align-items-center mt-6" style={{ height: '100%' }}>
                    <Col md={6} className="container">
                        <div>
                            {/* Angled Welcome To */}
                            <div>
                                {/* Angled Welcome To */}

                                <div style={{ textAlign: 'start', marginTop: '150px' }}>
                                    {/* <div
                                        style={{
                                            display: 'inline-block',
                                            border: '1px solid blue',
                                            padding: '5px 10px',
                                            transform: 'rotate(-15deg)',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            marginLeft: '-10px',
                                            zIndex: 1,
                                        }}
                                    >
                                        Welcome To
                                    </div> */}
                                    <h1 style={{ fontSize, fontWeight: 'bold' }}>
                                        <span style={{ fontSize, fontWeight: 'bold' }}>D</span>igital <br />
                                        <span style={{ fontSize, fontWeight: 'bold' }}>M</span>arketing <br />
                                        <span style={{
                                            fontSize: largeFontSize,
                                            color: '#ff6600',
                                            display: 'block', 
                                        }}>
                                            {carouselWord}
                                        </span>
                                    </h1>
                                </div>
                            </div>

                            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                            Zammy Zaif, Google SEO Consultant, renowned worldwide for top-notch Google ranking expertise. Achieve unmatched online visibility and growth
                            </p>
                          

                            <a className="themeht-btn secondary-btn mt-5" href="#">
                                <span>Check Out Track Record</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>

                            {/* Rocket Image */}
                            <div>
                                <img src={Image1} alt="Rocket image" className="rocket" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <div className="round-bg">
                            <img src={Image} alt="SEO and Rocket" style={styles.image} />
                        </div>
                    </Col>

                </Row>
            </Container>