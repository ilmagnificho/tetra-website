import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ko: {
        translation: {
            nav: {
                about: '소개',
                philosophy: '철학',
                services: '서비스',
                team: '팀',
                contact: '문의하기'
            },
            hero: {
                title: '스타트업의 성공을',
                titleHighlight: '함께 만듭니다',
                subtitle: "테트라는 투자, 법률, 인사·노무, PR 분야의\n실무 전문가 4인이 결성한\n스타트업 스튜디오이자 전문 컨설팅 펌입니다.",
                description: "단순한 자문을 넘어, 투자부터 실제 운영까지.\n창업팀의 One-team이 되어\n위대한 기업을 함께 만들어 갑니다.",
                note: '* 그리스어로 숫자 \'4\'를 뜻하는 \'Tetra\'로 Founding Partner 4명을 사명에 표현하였습니다.',
                cta: '문의하기'
            },
            philosophy: {
                title: '테트라의 시작',
                subtitle: '두 가지 의문에서 시작되었습니다',
                risk: {
                    number: '01',
                    title: 'Risk, 위기와 기회',
                    intro: '스타트업은 기존 산업을 새롭게 정의하고 관습에 도전하면서 폭발적인 성장을 이루어 냅니다.',
                    challenge: '때문에 창업자들은 매 순간 크고 작은 리스크와 어려움에 노출되어 있지만, 사업의 본질과 핵심에만 집중하기에도 창업자의 에너지는 항상 부족합니다.',
                    reality: '하지만 경직된 고용 제도, 전문 인력 채용에 대한 금전/시간적 부담 등 여러 이유로, 우선은 지금의 리소스로 당장의 문제 해결에 급급하게 됩니다.',
                    question: '신규 채용만이 유일한 해결 방법일까요? 왜 외부 전문가들은 비싸야만 할까요?'
                },
                unicorn: {
                    number: '02',
                    title: 'Unicorn, 창업자의 목표?',
                    intro: '최근까지 시장은 전설의 \'유니콘\'이 마치 유일한 정답인 것처럼 이야기해 왔습니다. 하지만 무리한 밸류에이션 추구는 때로 사업의 본질을 흐리기도 합니다.',
                    question: '테트라는 모두가 유니콘이 될 필요는 없다고 믿습니다. 각 스타트업마다 어울리는 성장 속도와 목표는 다릅니다. 우리는 맹목적인 숫자가 아닌, 여러분이 정의한 \'진짜 성공\'을 향한 지속 가능한 경로를 함께 찾아가겠습니다.'
                }
            },
            services: {
                title: 'Our Model',
                subtitle: 'Investing & Co-building',
                items: {
                    investment: {
                        title: 'Investment',
                        desc: '잠재력 있는 초기 스타트업을 발굴하여 투자를 집행하고 성장을 지원합니다.'
                    },
                    legal: {
                        title: 'Business Ops',
                        desc: '초기 기업이 흔히 겪는 시행착오를 줄이고, 안정적인 기업 운영을 위한 최적의 구조를 제안합니다.'
                    },
                    hr: {
                        title: 'HR & Culture',
                        desc: '채용, 보상 설계, 조직 문화 등 성장에 최적화된 HR 시스템을 함께 만듭니다.'
                    },
                    pr: {
                        title: 'Strategic PR',
                        desc: '브랜딩부터 언론 홍보까지, 기업의 가치를 세상에 알리는 커뮤니케이션 전략을 실행합니다.'
                    }
                }
            },
            team: {
                title: 'Team',
                subtitle: '각 분야 전문가 4명의 파트너가 함께합니다',
                members: {
                    cho: {
                        name: '조융재',
                        role: 'Partner',
                        expertise: '투자 · 사업',
                        bio: 'PE, VC 투자와 창업, 스타트업 운영을 두루 경험한 스타트업 전문가입니다.',
                        careers: [
                            '크래프톤 (CEO Staff)',
                            '띵스플로우 (COO)',
                            '본엔젤스벤처파트너스 (심사역)'
                        ]
                    },
                    park: {
                        name: '박소영',
                        role: 'Partner (변호사)',
                        expertise: '투자 · 인사노무',
                        bio: 'KOSDAQ 상장사 법무팀장을 역임한 기업 법무 전문가입니다.',
                        careers: [
                            '카카오게임즈 (법무팀장)',
                            '한글과컴퓨터 (법무팀)'
                        ]
                    },
                    yang: {
                        name: '양윤지',
                        role: 'Partner',
                        expertise: '투자 · 인사노무',
                        bio: '국내외 글로벌 기업의 법무와 운영을 총괄해온 인사·노무 컨설팅 전문가입니다.',
                        careers: [
                            'BlueStacks (USA, Corp. Dev Director)',
                            '크래프톤 펍지 (GCS실 실장)'
                        ]
                    },
                    kim: {
                        name: '김경범',
                        role: 'Partner',
                        expertise: '투자 · 홍보PR',
                        bio: '100여 개 이상의 스타트업 홍보를 전담해온 전략적 PR 전문가입니다.',
                        careers: [
                            '(현) (주)더프루브 Founder, CEO',
                            'Altos Ventures (PR Advisor)',
                            '블루홀 (현 크래프톤) 홍보팀',
                            '본엔젤스벤처파트너스 (Chief Supporter)'
                        ]
                    }
                }
            },
            contact: {
                title: '함께 성장할 준비가 되셨나요?',
                subtitle: '테트라와 함께 스타트업의 성공을 만들어가세요',
                cta: '문의하기'
            },
            process: {
                title: 'How We Work',
                subtitle: 'From Zero to Great',
                steps: {
                    1: {
                        title: 'Partnership',
                        desc: '신뢰를 바탕으로 진정성 있는 파트너십을 맺습니다.'
                    },
                    2: {
                        title: 'Co-building',
                        desc: '각 분야 전문가가 직접 실무에 참여하여 문제를 해결합니다.'
                    },
                    3: {
                        title: 'Investment',
                        desc: '성장에 필요한 자금을 직접 투자하거나 후속 투자를 유치합니다.'
                    },
                    4: {
                        title: 'Scale-up',
                        desc: '지속 가능한 성장과 목표 달성을 위해 끝까지 함께합니다.'
                    }
                }
            },
            footer: {
                copyright: '© 2024 Tetra Corporation. All rights reserved.',
                company: '테트라 주식회사'
            }
        }
    },
    en: {
        translation: {
            nav: {
                about: 'About',
                philosophy: 'Philosophy',
                services: 'Services',
                team: 'Team',
                contact: 'Contact'
            },
            hero: {
                title: 'Building Success',
                titleHighlight: 'Together',
                subtitle: 'A Startup Studio & Consulting Firm founded by four hands-on experts in Investment, Legal, HR, and PR.',
                description: 'Beyond advice, we execute.\nWe become your "One-team" to co-build great companies from investment to operations.',
                note: '* "Tetra" means the number \'4\' in Greek, representing our 4 Founding Partners.',
                cta: 'Contact Us'
            },
            philosophy: {
                title: 'Our Beginning',
                subtitle: 'Started with two fundamental questions',
                risk: {
                    number: '01',
                    title: 'Risk, Crisis and Opportunity',
                    intro: 'Startups achieve explosive growth by redefining existing industries and challenging conventions.',
                    challenge: 'Therefore, founders are exposed to various risks and difficulties at every moment, but their energy is always insufficient to focus solely on the essence and core of the business.',
                    reality: 'However, due to rigid employment systems and financial/time burdens of hiring professionals, they often rush to solve immediate problems with current resources.',
                    question: 'Is hiring the only solution? Why must external experts be expensive?'
                },
                unicorn: {
                    number: '02',
                    title: 'Unicorn, The Founder\'s Goal?',
                    intro: 'Until recently, the market spoke as if the legendary \'Unicorn\' was the only right answer. However, chasing excessive valuations can sometimes blur the essence of the business.',
                    question: 'Tetra believes that not everyone needs to become a unicorn. Every startup has a different growth pace and destination. Instead of blind numbers, we find the most sustainable path toward the \'true success\' defined by you.'
                }
            },
            services: {
                title: 'Our Model',
                subtitle: 'Investing & Co-building',
                items: {
                    investment: {
                        title: 'Investment',
                        desc: 'We invest in early-stage startups with great potential and support their growth.'
                    },
                    legal: {
                        title: 'Business Ops',
                        desc: 'We help establish optimal corporate structures and minimize operational trial and error.'
                    },
                    hr: {
                        title: 'HR & Culture',
                        desc: 'We co-build HR systems optimized for growth, including recruiting, compensation, and culture.'
                    },
                    pr: {
                        title: 'Strategic PR',
                        desc: 'We execute communication strategies to share your value with the world.'
                    }
                }
            },
            team: {
                title: 'Team',
                subtitle: '4 expert partners working together in each field',
                members: {
                    cho: {
                        name: 'Yoongjae Cho',
                        role: 'Partner',
                        expertise: 'Investment · Business',
                        bio: 'Startup expert with extensive experience in PE/VC investment, entrepreneurship, and startup operations.',
                        careers: [
                            'Krafton (CEO Staff)',
                            'Thingsflow (COO)',
                            'BonAngels Venture Partners (Associate)'
                        ]
                    },
                    park: {
                        name: 'Soyoung Park',
                        role: 'Partner (Attorney)',
                        expertise: 'Investment · HR',
                        bio: 'Corporate law expert who served as Legal Team Leader for a KOSDAQ-listed company.',
                        careers: [
                            'Kakao Games (Legal Team Leader)',
                            'Hancom (Legal Team)'
                        ]
                    },
                    yang: {
                        name: 'Yunji Yang',
                        role: 'Partner',
                        expertise: 'Investment · HR',
                        bio: 'HR and labor consulting expert who has overseen legal and operations for global companies.',
                        careers: [
                            'BlueStacks (USA, Corp. Dev Director)',
                            'Krafton PUBG (GCS Dept. Director)'
                        ]
                    },
                    kim: {
                        name: 'Bom Kim',
                        role: 'Partner',
                        expertise: 'Investment · PR',
                        bio: 'Strategic PR expert dedicated to the promotion of over 100 startups.',
                        careers: [
                            '(Current) The Prove Founder, CEO',
                            'Altos Ventures (PR Advisor)',
                            'Krafton Bluehole (PR Team Leader)',
                            'BonAngels Venture Partners (Chief Supporter)'
                        ]
                    }
                }
            },
            contact: {
                title: 'Ready to Grow Together?',
                subtitle: 'Create startup success with Tetra',
                cta: 'Contact Us'
            },
            process: {
                title: 'How We Work',
                subtitle: 'From Zero to Great',
                steps: {
                    1: {
                        title: 'Partnership',
                        desc: 'We build a genuine partnership based on deep trust.'
                    },
                    2: {
                        title: 'Co-building',
                        desc: 'Experts in each field participate directly to solve problems.'
                    },
                    3: {
                        title: 'Investment',
                        desc: 'We invest directly or help secure follow-on funding for growth.'
                    },
                    4: {
                        title: 'Scale-up',
                        desc: 'We stay with you until you achieve sustainable growth and goals.'
                    }
                }
            },
            footer: {
                copyright: '© 2024 Tetra Corporation. All rights reserved.',
                company: 'Tetra Corporation'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ko',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
