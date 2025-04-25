import React from 'react';
import './PropertyGrid.css';

interface Property {
    id: number;
    title: string;
    price: number;
    baths: number;
    type: string;
    image: string;
}

interface PropertyGridProps {
    properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
    return (
        <div className="property-grid" id="listings">
            {properties.map(property => (
                <div key={property.id} className="property-card">
                    <img src={property.image} alt={property.title} />
                    <h3>{property.title}</h3>
                    <p>Price: ${property.price.toLocaleString()}</p>
                    <p>Baths: {property.baths}</p>
                    <p>Type: {property.type}</p>
                </div>
            ))}
        </div>
    );
};

export default PropertyGrid;