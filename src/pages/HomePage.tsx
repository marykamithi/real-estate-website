import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RealtorCard from '../components/RealtorCard';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

const properties = [
    { id: 1, title: 'Luxury Villa', price: 1200000, baths: 3, type: 'villa', image: '/images/3.avif' },
    { id: 2, title: 'Modern Apartment', price: 800000, baths: 2, type: 'apartment', image: '/images/2.avif' },
    { id: 3, title: 'Cozy Cottage', price: 500000, baths: 1, type: 'studio', image: '/images/4.avif' },
    { id: 4, title: '1 Bedroom Apartment', price: 600000, baths: 1, type: 'apartment', image: '/images/1.avif' },
];

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <RealtorCard 
                name="Edwin Wahiu" 
                phone="123-456-7890" 
                email="johndoe@example.com" 
                picture="/images/realtor.jpeg" 
            />
            <PropertyGrid properties={properties} />
            <Footer />
        </div>
    );
};

export default HomePage;