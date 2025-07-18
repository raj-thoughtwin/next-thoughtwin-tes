export const THOUGHTWIN_ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ThoughtWin',
    url: 'https://www.thoughtwin.com/',
    logo: 'https://www.thoughtwin.com/assets/img/header.png',
    description: 'Partner with ThoughtWin for cutting-edge web and mobile solutions. Contact us to start your journey toward business success.',
    email: 'info@thoughtwin.com',
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-xxx-xxx-xxxx',
        contactType: 'Customer Service',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
    },
    sameAs: [
        'https://twitter.com/thoughtwin',
        'https://www.facebook.com/thoughtwin/',
        'https://in.linkedin.com/company/thoughtwin',
        'https://www.instagram.com/thoughtwin_solutions/',
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Office Address',
        addressLocality: 'Indore',
        addressRegion: 'MP',
        postalCode: '452001',
        addressCountry: 'IN',
    },
    foundingDate: '2017',
    founders: [
        {
            '@type': 'Person',
            name: 'Founder Name',
        },
    ],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '250',
    },
};
