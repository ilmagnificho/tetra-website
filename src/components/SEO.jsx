import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const siteTitle = 'Tetra Corporation | 테트라 주식회사';
    const description = t('hero.subtitle') + ' ' + t('hero.description');
    const siteUrl = 'https://www.tetracorp.co.kr';
    const siteImage = 'https://www.tetracorp.co.kr/images/og-image.jpg'; // Placeholder

    // JSON-LD for Local Business / Organization (GEO SEO)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Corporation',
        'name': 'Tetra Corporation',
        'alternateName': '테트라 주식회사',
        'url': siteUrl,
        'logo': 'https://www.tetracorp.co.kr/images/tetra-logo.png',
        'description': description,
        'address': {
            '@type': 'PostalAddress',
            'addressRegion': 'Seoul',
            'addressCountry': 'KR'
        },
        'contactPoint': {
            '@type': 'ContactPoint',
            'email': 'info@tetracorp.co.kr',
            'contactType': 'customer support'
        },
        'sameAs': [
            'https://www.linkedin.com/company/tetra-corporation'
        ]
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="Tetra Corporation, 테트라 주식회사, Startup Consulting, Venture Capital, 스타트업 투자, 경영 컨설팅" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={siteUrl} />
            <html lang={currentLang} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:locale" content={currentLang === 'ko' ? 'ko_KR' : 'en_US'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={siteImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
