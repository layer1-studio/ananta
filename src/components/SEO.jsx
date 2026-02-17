import React from 'react';
import { Helmet } from 'react-helmet-async';
import ogImage from '../assets/ananta-circle.jpg';

const SEO = ({ title, description, pathname }) => {
    const siteTitle = "Ananta | Media & Narrative Consultancy";
    const defaultDescription = "A media and narrative consultancy working at the intersection of strategy, culture, and influence.";
    const siteUrl = "https://anantacollective.org";
    const canonicalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ananta Collective",
        "url": siteUrl,
        "logo": `${siteUrl}/favicon.jpg`,
        "description": defaultDescription,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Sri Lanka"
        }
    };

    return (
        <Helmet>
            <title>{title ? `${title} | Ananta` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title ? `${title} | Ananta` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={fullOgImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title ? `${title} | Ananta` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
