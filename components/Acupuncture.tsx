'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Acupuncture() {
  const { ref, isInView } = useInView()

  return (
    <section id="acupuncture" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-forest-50/30 to-white" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest-100 to-forest-200/50" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <span className="text-6xl mb-4">📍</span>
                <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">무(無)내성</h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  침치료는 약물이 아닙니다.<br />
                  막힌 근육을 이완하고<br />
                  신경계를 조절하여,<br />
                  내성 없이 우리 몸의<br />
                  자연 치유력을 극대화합니다.
                </p>
              </div>

              {/* Orbiting dots */}
              {['진통제 끊기', '자연 치유', '신경 조절', '근육 이완'].map((text, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180)
                const radius = 48
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                return (
                  <div
                    key={i}
                    className="absolute w-20 h-20 rounded-full bg-white shadow-lg border border-forest-200 flex items-center justify-center"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span className="text-navy-700 text-xs font-display font-semibold text-center leading-tight">
                      {text}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-100 text-forest-700 text-sm font-medium tracking-wider mb-4">
              내성 없는 침치료
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-6 leading-tight">
              내성 없이 지속할 수 있는<br />
              <span className="text-forest-600">침치료</span>
            </h2>

            <blockquote className="border-l-4 border-forest-400 pl-6 my-8">
              <p className="text-navy-600 text-lg italic font-display leading-relaxed">
                &ldquo;진통제를 끊고 스스로 낫는 힘을 깨웁니다.&rdquo;
              </p>
            </blockquote>

            <p className="text-navy-500 text-base leading-relaxed mb-8">
              화학적 소염진통제는 통증을 잠시 가릴 뿐이며, 장기 복용 시 내성과 부작용이 따릅니다.
              침치료는 약물이 아닙니다. 막힌 근육을 이완하고 신경계를 조절하여,
              내성 없이 우리 몸의 자연 치유력(Natural Healing Power)을 극대화합니다.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              {[
                { label: '무(無)내성', text: '약물이 아니므로 장기간 치료해도 내성이 생기지 않습니다.' },
                { label: '근육 이완', text: '막힌 근육과 조직을 이완하여 혈류를 개선합니다.' },
                { label: '신경계 조절', text: '자율신경계를 조절하여 자연 치유 반응을 활성화합니다.' },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-forest-50/50 border border-forest-100">
                  <div className="w-2 h-2 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-display font-bold text-navy-700 text-sm">{point.label}</span>
                    <p className="text-navy-500 text-sm mt-0.5">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
