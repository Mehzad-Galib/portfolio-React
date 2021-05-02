import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='text-center footers'>Copyright @{date} Mehzad Galib all Rights Reserved</footer>
        </>
    );
};

export default Footer;