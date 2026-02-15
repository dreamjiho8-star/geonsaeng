'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const benefits = [
  {
    title: '미생물 생전환 (Biotransformation)',
    description: '미생물 효소가 한약재 구조를 생체이용률이 높은 활성형으로 전환해, 잠겨 있던 유효 성분을 실제로 활용 가능한 형태로 바꿉니다.',
    icon: '🧬',
  },
  {
    title: '흡수율의 극대화',
    description: '고분자 약성 성분을 미리 저분자로 분해해 소화 기능이 저하된 만성 염증 환자도 약효 성분을 더 빠르게 흡수할 수 있게 돕습니다.',
    icon: '📈',
  },
  {
    title: '안전성 향상과 독소 제거',
    description: '발효 과정에서 자극적 성분과 천연 독성이 중화되어 더 순하고 안전하게 작용하며, 만성 염증·난치 질환자에서 부작용 위험을 낮춥니다.',
    icon: '🛡️',
  },
  {
    title: '장내 생태계 복원',
    description: '유익균과 대사산물을 공급해 장 누수와 면역 불균형을 줄이고, 만성 염증의 근본 원인을 관리하는 기반을 만듭니다.',
    icon: '🦠',
  },
  {
    title: '장-뇌 축 (Gut-Brain Axis)',
    description: '발효 대사산물과 유익균 대사물질(GABA 등)이 마음 안정, 수면 장애 개선, 통증 완화 등 내부 기능 회복에 기여합니다.',
    icon: '🧠',
  },
]

export default function Fermented() {
  const { ref, isInView } = useInView()

  return (
    <section id="fermented" className="relative py-20 sm:py-28 bg-gradient-to-b from-forest-800 via-forest-900 to-forest-800">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-400/20 to-transparent" />
      <div className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-forest-600/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-600/20 text-forest-300 text-sm font-medium tracking-wider mb-4">
              발효한약
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">
              만성 염증 난치질환자를 위한<br />
              <span className="text-forest-300">발효한약</span>
            </h2>

            <blockquote className="border-l-4 border-gold-400/50 pl-4 sm:pl-6 my-6 sm:my-8">
              <p className="text-navy-300 text-base sm:text-lg italic font-display leading-relaxed">
                &ldquo;허약한 몸일수록, 흡수 가능한 약이 필요합니다.&rdquo;
              </p>
            </blockquote>

            <p className="text-navy-300 text-sm sm:text-base leading-relaxed mb-6">
              만성염증 난치질환자는 신체 기능이 무너져 있어 일반 한약의 유효 성분을 충분히 활용하지 못하는 경우가 많습니다.
              발효한약은 약재 속 자물쇠를 미리 풀어 체내 이용 효율을 높이는 치료 전략입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-800/60 border border-forest-700">
                <span className="text-forest-300 font-display font-bold text-sm">고흡수율</span>
                <p className="text-navy-400 text-[13px] sm:text-xs mt-1 leading-relaxed">저분자 활성형 구조로 전환해, 소화 기능이 약한 환자도 유효 성분을 실제로 활용할 수 있게 합니다.</p>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-800/60 border border-forest-700">
                <span className="text-forest-300 font-display font-bold text-sm">안전성 강화</span>
                <p className="text-navy-400 text-[13px] sm:text-xs mt-1 leading-relaxed">발효로 자극적 성분과 독성을 낮춰, 만성 염증과 난치질환자에게 더 안전한 복용 환경을 만듭니다.</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="font-display text-lg sm:text-xl font-bold text-gold-400 mb-4 sm:mb-6">
              발효한약이 필요한 이유
            </h3>
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="group flex gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl bg-forest-800/40 border border-forest-700 hover:border-forest-400/30 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-white text-[15px] sm:text-base mb-1.5 sm:mb-2">{item.title}</h4>
                  <p className="text-navy-400 text-[13px] sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
