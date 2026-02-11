import React from 'react';
import EngagementModels from '../components/EngagementModels';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const WorkWithUs = () => {
    return (
        <div className="pt-24 bg-ananta-bg min-h-screen">
            <SEO title="Work With Us" description="Engagement models for brands and leaders requiring sustained narrative control." />
            <EngagementModels />
            <ContactForm />
        </div>
    );
};

export default WorkWithUs;
