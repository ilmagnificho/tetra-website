import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg-accent"></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">
                        {t('hero.title')}
                        <br />
                        <span className="text-tetra">{t('hero.titleHighlight')}</span>
                    </h1>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    <p className="hero-description">{t('hero.description')}</p>
                    <p className="hero-note">{t('hero.note')}</p>
                    <div className="hero-actions">
                        <button onClick={scrollToContact} className="btn btn-primary">
                            {t('hero.cta')}
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="scroll-indicator"
                >
                    <div className="scroll-text">Scroll Down</div>
                    <ChevronDown className="scroll-icon" size={24} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
