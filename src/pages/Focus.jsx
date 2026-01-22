import React from 'react';
import FocusAreas from '../components/FocusAreas';
import SEO from '../components/SEO';

const Focus = () => {
    return (
        <div className="pt-24 bg-ananta-bg min-h-screen">
            <SEO title="Focus Areas" description="Our specialized sectors: Finance, Technology, Diplomacy, and Heritage." />
            <FocusAreas />
        </div>
    );
};

export default Focus;
