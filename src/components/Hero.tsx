import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Seattle Real Estate</h1>
                <p>Luxury Living in the Heart of the City</p>
                <Link to="/listings" className="cta-button">View Listings</Link>
                <Link to="/contact" className="cta-button secondary">Contact Us</Link>
            </div>
        </div>
    );
};

export default Hero;