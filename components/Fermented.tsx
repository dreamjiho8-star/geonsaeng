'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const benefits = [
  {
    title: '약효 성분 증진',
    description: '발효를 통해 한약재의 약효 성분이 분해되어 더 좋은 약효 성분이 생산됩니다.',
    icon: '🧬',
  },
  {
    title: '흡수율 극대화',
    description: '한약의 영양소가 발효를 통해 저분자로 분해되어 소화·흡수율이 높아집니다. 이는 단순히 영양학적 가치만을 따지는 식품의 경우와 차별화됩니다.',
    icon: '📈',
  },
  {
    title: '장내 유익균 증식 및 유해균 억제',
    description: '질병의 근원인 장내 유해균을 해결하는 효능이 업그레이드되어 치료효과가 높아집니다.',
    icon: '🦠',
  },
]

export default function Fermented() {
  const { ref, isInView } = useInView()

  return (
    <section id="fermented" className="relative py-24 sm:py-32 bg-gradient-to-b from-forest-800 via-forest-900 to-forest-800">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-400/20 to-transparent" />
      <div className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-forest-600/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-600/20 text-forest-300 text-sm font-medium tracking-wider mb-4">
              발효 한약
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              미생물 <span className="text-forest-300">발효 한약</span>
            </h2>

            <blockquote className="border-l-4 border-gold-400/50 pl-6 my-8">
              <p className="text-navy-300 text-lg italic font-display leading-relaxed">
                &ldquo;흡수는 빠르게, 독성은 없게, 효과는 깊게!&rdquo;
              </p>
            </blockquote>

            <p className="text-navy-300 text-base leading-relaxed mb-6">
              약물과 영양제로 효과가 없는 이유는 약하고 노화된 장 때문입니다.
              발효한약이 최적의 솔루션입니다.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-forest-800/60 border border-forest-700">
                <span className="text-forest-300 font-display font-bold text-sm">고흡수율</span>
                <p className="text-navy-400 text-xs mt-1">유효 성분을 저분자로 쪼개어 소화 기능이 떨어진 분들도 세포 깊숙이 흡수됩니다.</p>
              </div>
              <div className="p-4 rounded-xl bg-forest-800/60 border border-forest-700">
                <span className="text-forest-300 font-display font-bold text-sm">안전성</span>
                <p className="text-navy-400 text-xs mt-1">발효 과정에서 독성이 제거되어 간 부담 없이 장기간 복용하며 세포를 재생할 수 있습니다.</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl font-bold text-gold-400 mb-6">
              발효한약의 효과
            </h3>
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="group flex gap-5 p-6 rounded-2xl bg-forest-800/40 border border-forest-700 hover:border-forest-400/30 transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-navy-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
