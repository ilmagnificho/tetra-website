import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import SEO from './components/SEO';
import './i18n';
import './index.css';

// Initialize Google Analytics with a placeholder ID
// REPLACE 'G-XXXXXXXXXX' with your actual Measurement ID
ReactGA.initialize('G-1DT5XQJ7J6');

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.classList.toggle('korean', i18n.language === 'ko');
        // Track page view
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, [i18n.language]);

    return (
        <div className="App">
            <SEO />
            <Navbar />
            <Hero />
            <Philosophy />
            <Services />
            <Process />
            <Team />
            <Contact />
        </div>
    );
}

export default App;
