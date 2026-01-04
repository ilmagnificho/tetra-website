import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, Award } from 'lucide-react';
import './Process.css';

const Process = () => {
    const { t } = useTranslation();

    const steps = [
        { icon: <Search size={32} />, id: '1' },
        { icon: <PenTool size={32} />, id: '2' },
        { icon: <Rocket size={32} />, id: '3' },
        { icon: <Award size={32} />, id: '4' }
    ];

    return (
        <section id="process" className="section process bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">{t('process.title')}</h2>
                    <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>{t('process.subtitle')}</p>
                </motion.div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="process-item"
                        >
                            <div className="process-icon-container">
                                <div className="process-number">{index + 1}</div>
                                <div className="process-icon-box">
                                    {step.icon}
                                </div>
                                {index < steps.length - 1 && <div className="process-connector" />}
                            </div>
                            <div className="process-content">
                                <h3 className="process-step-title">{t(`process.steps.${step.id}.title`)}</h3>
                                <p className="process-step-desc">{t(`process.steps.${step.id}.desc`)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
