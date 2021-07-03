import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className='text-center footers'>Copyright @{date} <b>Mehzad Galib</b>  all Rights Reserved</footer>
        </>
    );
};

export default Footer;