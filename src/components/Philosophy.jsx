import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TriangleAlert, Sparkles } from 'lucide-react';
import './Philosophy.css';

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <section id="philosophy" className="section philosophy">
            <div className="philosophy-bg-text">OUR VISION</div>
            <div className="container">
                <div className="philosophy-layout">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="philosophy-header"
                    >
                        <span className="section-tag">{t('philosophy.title')}</span>
                        <h2 className="section-title">{t('philosophy.subtitle')}</h2>
                    </motion.div>

                    <div className="philosophy-items">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="philosophy-item item-risk"
                        >
                            <div className="item-header">
                                <span className="item-number">01</span>
                                <TriangleAlert className="item-icon" size={24} />
                            </div>
                            <h3 className="item-title">{t('philosophy.risk.title')}</h3>
                            <p className="item-desc">{t('philosophy.risk.intro')}</p>
                            <p className="item-desc">{t('philosophy.risk.challenge')}</p>
                            <blockquote className="item-quote">
                                {t('philosophy.risk.question')}
                            </blockquote>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="philosophy-item item-unicorn"
                        >
                            <div className="item-header">
                                <span className="item-number">02</span>
                                <Sparkles className="item-icon" size={24} />
                            </div>
                            <h3 className="item-title">{t('philosophy.unicorn.title')}</h3>
                            <p className="item-desc">{t('philosophy.unicorn.intro')}</p>
                            <blockquote className="item-quote">
                                {t('philosophy.unicorn.question')}
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
