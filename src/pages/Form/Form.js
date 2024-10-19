
import React, { useState } from 'react';
import { Carousel, Tab, Tabs, Form, Button, Row, Col } from 'react-bootstrap';
import { FaToolbox, FaChartLine, FaRocket } from 'react-icons/fa';
import { FaStar, FaComment, FaDollarSign, FaLightbulb } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import countryData from '../../Json/countries+states+cities.json';
import axios from 'axios';
import "./Form.css"


const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState('');


    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);


        const selectedCountryObj = countryData.find(
            (c) => c.name === selectedCountry
        );


        if (selectedCountryObj) {
            setStates(selectedCountryObj.states || []);
        } else {
            setStates([]);
        }

        setState('');
        setCity('');
        setCities([]);
    };


    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);


        const selectedStateObj = states.find((s) => s.name === selectedState);


        if (selectedStateObj) {
            setCities(selectedStateObj.cities || []);
        } else {
            setCities([]);
        }


        setCity('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const contactData = {
          name,
          email,
          phone,
          country,
          state,
          city,
          message,
        };
    
        try {
          const response = await axios.post('http://localhost:5000/api/send-email', contactData);
          console.log('Contact saved:', response.data);
          alert('Your message was sent successfully!');
    
        } catch (error) {
          console.error('Error saving contact:', error);
          alert('Failed to send your message. Please try again later.');
        }
      };


    return (
        <>
            <section
                className="contact-section py-5"
                style={{
                    background: "linear-gradient(to  white)"
                }}
            >
                <div className="container">
                    <h2 className="text-center mb-4 text-success">Contact US</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mb-3 border-0 border-bottom"
                                    />
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mb-3 border-0 border-bottom"
                                    />
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="mb-3 border-0 border-bottom"
                                    />
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group controlId="formCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={country}
                                        onChange={handleCountryChange}
                                        className="mb-3 border-0 border-bottom"
                                    >
                                        <option value="">Select Country</option>
                                        {countryData.map((countryObj) => (
                                            <option key={countryObj.id} value={countryObj.name}>
                                                {countryObj.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            {country && (
                                <>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="formState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={state}
                                                onChange={handleStateChange}
                                                className="mb-3 border-0 border-bottom"
                                            >
                                                <option value="">Select State</option>
                                                {states.map((stateObj) => (
                                                    <option key={stateObj.id} value={stateObj.name}>
                                                        {stateObj.name}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                className="mb-3 border-0 border-bottom"
                                            >
                                                <option value="">Select City</option>
                                                {cities.map((cityObj) => (
                                                    <option key={cityObj.id} value={cityObj.name}>
                                                        {cityObj.name}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </>
                            )}
                        </Row>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mb-3 border-0 border-bottom"
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit" className="mt-3">
                                Submit
                            </Button>
                        </div>
                        {/* {notification && <p>{notification}</p>} */}
                    </Form>
                </div>
            </section>

        </>
    )
}

export default Forms