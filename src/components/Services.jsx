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
                    {['investment', 'legal', 'hr', 'pr'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="service-card"
                        >
                            <div className="service-icon-container">
                                {item === 'investment' && <TrendingUp size={32} />}
                                {item === 'legal' && <Briefcase size={32} />}
                                {item === 'hr' && <img src="/images/tetra-mark.png" alt="" style={{ width: '24px', opacity: 0.6 }} />}
                                {item === 'pr' && <TrendingUp size={32} />}
                            </div>
                            <h3 className="service-title">{t(`services.items.${item}.title`)}</h3>
                            <p className="service-item">{t(`services.items.${item}.desc`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
