import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="section services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-tag">{t('nav.services')}</span>
                    <h2 className="section-title">{t('services.title')}</h2>
                </motion.div>

                <div className="services-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="service-card"
                    >
                        <div className="service-icon-container">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="service-title">{t('services.consulting.title')}</h3>
                        <div className="service-content-list">
                            <p className="service-item">{t('services.consulting.intro')}</p>
                            <p className="service-item highlight">{t('services.consulting.approach')}</p>
                            <p className="service-item">{t('services.consulting.philosophy')}</p>
                            <p className="service-item highlight">{t('services.consulting.method')}</p>
                            <p className="service-item">{t('services.consulting.value')}</p>
                            <p className="service-item">{t('services.consulting.solution')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="service-card"
                    >
                        <div className="service-icon-container">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="service-title">{t('services.investment.title')}</h3>
                        <div className="service-content-list">
                            <p className="service-item">{t('services.investment.philosophy')}</p>
                            <p className="service-item">{t('services.investment.data')}</p>
                            <p className="service-item highlight">{t('services.investment.approach')}</p>
                            <p className="service-item">{t('services.investment.commitment')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
