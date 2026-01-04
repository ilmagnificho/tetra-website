import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-content"
                >
                    <h2 className="contact-title">{t('contact.title')}</h2>
                    <p className="contact-subtitle">{t('contact.subtitle')}</p>
                    <a href="mailto:info@tetracorp.co.kr" className="btn btn-primary contact-btn">
                        {t('contact.cta')}
                    </a>
                </motion.div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <img src="/images/tetra-logo.png" alt="Tetra" className="footer-logo-image" />
                            </div>
                            <p className="footer-address">
                                Seoul, Republic of Korea<br />
                                <a href="mailto:info@tetracorp.co.kr" className="footer-email">info@tetracorp.co.kr</a>
                            </p>
                        </div>

                        <div className="footer-right">
                            <div className="footer-links">
                                <span className="footer-link-group">
                                    <a href="#philosophy" className="footer-link">{t('nav.philosophy')}</a>
                                    <a href="#services" className="footer-link">{t('nav.services')}</a>
                                    <a href="#team" className="footer-link">{t('nav.team')}</a>
                                </span>
                            </div>
                            <p className="footer-copyright">{t('footer.copyright')}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
