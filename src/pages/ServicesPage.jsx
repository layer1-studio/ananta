import React from 'react';
import Services from '../components/Services';
import SEO from '../components/SEO';

const ServicesPage = () => {
    return (
        <div className="pt-24 bg-ananta-bg min-h-screen">
            <SEO title="Our Services" description="Strategic narrative architecture, creative systems, and media execution." />
            <Services />
        </div>
    );
};

export default ServicesPage;
