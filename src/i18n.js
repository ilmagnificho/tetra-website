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
                subtitle: '테트라는 투자, 법률, 인사·노무, PR 분야의 실무 전문가 4인이 결성한 파트너십 기반의 컨설팅 그룹입니다.',
                description: '창업자의 시선에서 문제를 바라보고, 성장을 위한 실질적이고 총체적인 솔루션을 One-team으로서 함께 제안합니다.',
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
                title: '테트라의 문제 해결 방법',
                consulting: {
                    title: 'Consulting',
                    intro: '테트라는 스타트업의 고민을 함께합니다.',
                    approach: '대리인/외부인의 입장에서가 아닌, 여러분의 In-House & One Team으로 함께 문제 해결에 집중합니다.',
                    philosophy: '모든 일에 있어 목표 달성을 위해서는 충분한 시간과 에너지 투입이 필요충분조건이라고 생각합니다.',
                    method: '테트라는 여러분에게 충분한 시간과 노력을 쏟기 위해, 시간에 구속받는 Time Charge는 지양합니다.',
                    value: '금전적 보상 이상으로 세상을 바꾸는 여정을 함께하고 같이 성장하는 것에 테트라는 보람을 느낍니다.',
                    solution: '신규 인력 채용 대신, 각 분야의 전문가로 이루어진 테트라 팀이 다함께 여러분을 돕겠습니다.'
                },
                investment: {
                    title: 'Investment',
                    philosophy: '모두가 유니콘을 목표할 필요는 없습니다. 트렌드에 연연할 필요도 없습니다. 맹목적인 글로벌 시장 진출도 필수가 아닙니다.',
                    data: '대한민국 상장기업 중 약 85%가 시가총액 5천억원 미만이고, KOSDAQ 기업의 불과 3% 정도만이 시가총액 1조원 이상의 소위 \'유니콘\' 입니다.',
                    approach: '테트라는 맹목적인 성장이 아닌, 여러분 스스로의 목표 성취를 응원합니다.',
                    commitment: '여러분들의 긴 여정의 첫 시작부터 테트라가 함께 하겠습니다.'
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
                        bio: 'KOSDAQ 상장사 법무팀장을 역임한 법률 및 IPO 자문 전문가입니다.',
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
                            '크래프톤 블루홀 (홍보팀장)',
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
                title: '협업 프로세스',
                subtitle: '테트라는 4단계의 체계적인 과정을 통해 여러분의 문제를 해결합니다',
                step1: {
                    title: 'Discover',
                    desc: '스타트업의 현재 상황과 잠재된 리스크를 면밀히 진단합니다.'
                },
                step2: {
                    title: 'Design',
                    desc: '전문가 4인의 다각도 시선으로 실질적인 전략을 수립합니다.'
                },
                step3: {
                    title: 'Draft & Drive',
                    desc: '외부인이 아닌 In-house 파트너로서 함께 문제를 돌파합니다.'
                },
                step4: {
                    title: 'Deliver Success',
                    desc: '지속 가능한 성장과 여러분이 정의한 진짜 성공을 달성합니다.'
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
                subtitle: 'A partnership-driven consulting group of four industry veterans in investment, legal, HR/labor, and PR.',
                description: 'We stand by founders as an integrated "One-team," offering holistic and practical solutions to fuel sustainable startup growth.',
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
                title: 'Our Solutions',
                consulting: {
                    title: 'Consulting',
                    intro: 'Tetra shares the concerns of startups.',
                    approach: 'We focus on solving problems together as your In-House & One Team, not as agents or outsiders.',
                    philosophy: 'We believe that sufficient time and energy investment is a necessary and sufficient condition for achieving goals.',
                    method: 'To dedicate sufficient time and effort to you, Tetra avoids time-constrained Time Charge.',
                    value: 'Beyond financial compensation, Tetra finds fulfillment in joining the journey to change the world and growing together.',
                    solution: 'Instead of hiring new personnel, the Tetra team of experts in each field will help you together.'
                },
                investment: {
                    title: 'Investment',
                    philosophy: 'Not everyone needs to aim for unicorn status. No need to obsess over trends. Blind global expansion is not mandatory.',
                    data: 'About 85% of Korean listed companies have a market cap below 500 billion won, and only about 3% of KOSDAQ companies are so-called \'unicorns\' with a market cap over 1 trillion won.',
                    approach: 'Tetra supports your own goal achievement, not blind growth.',
                    commitment: 'Tetra will be with you from the very beginning of your long journey.'
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
                        bio: 'Legal and IPO advisory expert who served as Legal Team Leader for a KOSDAQ-listed company.',
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
                title: 'Our Process',
                subtitle: 'Tetra solves your problems through a systematic 4-step process',
                step1: {
                    title: 'Discover',
                    desc: 'We closely diagnose the current status and potential risks of the startup.'
                },
                step2: {
                    title: 'Design',
                    desc: 'We establish practical strategies through the multi-angled perspectives of 4 experts.'
                },
                step3: {
                    title: 'Draft & Drive',
                    desc: 'As an In-house partner, not an outsider, we break through problems together.'
                },
                step4: {
                    title: 'Deliver Success',
                    desc: 'We achieve sustainable growth and the true success defined by you.'
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
