import React from 'react';
import { Helmet } from 'react-helmet-async';

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

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | Ananta` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;
