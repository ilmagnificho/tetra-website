import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
    const { t } = useTranslation();

    const members = ['cho', 'park', 'yang', 'kim'];

    return (
        <section id="team" className="section team bg-light">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">{t('team.title')}</h2>
                    <p className="section-subtitle">{t('team.subtitle')}</p>
                </motion.div>

                <div className="team-grid">
                    {members.map((member, index) => (
                        <motion.div
                            key={member}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="team-card"
                        >
                            <div className="team-info">
                                <div className="team-header-info">
                                    <h3 className="team-name">{t(`team.members.${member}.name`)}</h3>
                                    <p className="team-role">{t(`team.members.${member}.role`)}</p>
                                    <p className="team-expertise">{t(`team.members.${member}.expertise`)}</p>
                                </div>
                                <div className="team-details">
                                    <p className="team-bio">{t(`team.members.${member}.bio`)}</p>
                                    <ul className="team-careers">
                                        {t(`team.members.${member}.careers`, { returnObjects: true }).map((career, i) => (
                                            <li key={i}>{career}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {member === 'cho' && (
                                <a href="https://www.linkedin.com/in/yjcho/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                    <img src="/images/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
