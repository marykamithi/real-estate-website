import React from 'react';
import './RealtorCard.css';

interface RealtorCardProps {
    name: string;
    phone: string;
    email: string;
    picture: string;
}

const RealtorCard: React.FC<RealtorCardProps> = ({ name, phone, email, picture }) => {
    return (
        <div className="realtor-card">
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default RealtorCard;

