import React, { useState } from 'react';
import PropertyGrid from '../components/PropertyGrid';
import './ListingsPage.css';

const properties = [
    { id: 1, title: 'Luxury Villa', price: 1200000, baths: 3, type: 'villa', image: '/images/3.avif' },
    { id: 2, title: 'Modern Apartment', price: 800000, baths: 2, type: 'apartment', image: '/images/2.avif' },
    { id: 3, title: 'Cozy Cottage', price: 500000, baths: 1, type: 'studio', image: '/images/4.avif' },
    { id: 4, title: '1 Bedroom Apartment', price: 600000, baths: 1, type: 'apartment', image: '/images/5.avif' },
];

const ListingsPage: React.FC = () => {
    const [filters, setFilters] = useState({
        type: '',
        baths: '',
        minPrice: '',
        maxPrice: '',
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredProperties = properties.filter(property => {
        const matchesType = filters.type ? property.type === filters.type : true;
        const matchesBaths = filters.baths ? property.baths === parseInt(filters.baths) : true;
        const matchesMinPrice = filters.minPrice ? property.price >= parseInt(filters.minPrice) : true;
        const matchesMaxPrice = filters.maxPrice ? property.price <= parseInt(filters.maxPrice) : true;
        return matchesType && matchesBaths && matchesMinPrice && matchesMaxPrice;
    });

    return (
        <div>
            <h1>Property Listings</h1>
            <div className="filters">
                <select name="type" value={filters.type} onChange={handleFilterChange}>
                    <option value="">All Types</option>
                    <option value="studio">Studio</option>
                    <option value="apartment">1 Bedroom</option>
                    <option value="villa">Villa</option>
                </select>
                <select name="baths" value={filters.baths} onChange={handleFilterChange}>
                    <option value="">Any Baths</option>
                    <option value="1">1 Bath</option>
                    <option value="2">2 Baths</option>
                    <option value="3">3 Baths</option>
                </select>
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                />
            </div>
            <PropertyGrid properties={filteredProperties} />
        </div>
    );
};

export default ListingsPage;