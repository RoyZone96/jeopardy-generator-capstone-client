import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <h2>© Briceson Roy {currentYear}</h2>
        </div>
    );
}