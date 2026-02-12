import React from 'react';
import { Helmet } from 'react-helmet-async';
import ogImage from '../assets/ananta-circle.jpg';

const SEO = ({ title, description }) => {
    const siteTitle = "Ananta | Media & Narrative Consultancy";
    const defaultDescription = "A media and narrative consultancy working at the intersection of strategy, culture, and influence.";

    return (
        <Helmet>
            <title>{title ? `${title} | Ananta` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title ? `${title} | Ananta` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | Ananta` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
