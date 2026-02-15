'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Acupuncture() {
  const { ref, isInView } = useInView()

  return (
    <section id="acupuncture" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-forest-50/30 to-white" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[320px] sm:max-w-md mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-forest-100 to-forest-200/50" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 sm:p-12">
                <span className="text-5xl sm:text-6xl mb-3 sm:mb-4">📍</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-800 mb-2">건생병사 프로그램</h3>
                <p className="text-navy-500 text-xs sm:text-sm leading-relaxed">
                  세포의 시간을 되돌리는<br />
                  치유 혁명.<br />
                  질병 이전보다 더 건강한 삶을<br />
                  목표로 하는<br />
                  건생병사 프로그램.
                </p>
              </div>

              {/* Orbiting dots */}
              {['치료 철학', '자가 치유', '해독 재생', '장 건강'].map((text, i) => {
                const angle = (i * 90 - 45) * (Math.PI / 180)
                const radius = 48
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                return (
                  <div
                    key={i}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg border border-forest-200 flex items-center justify-center"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span className="text-navy-700 text-[10px] sm:text-xs font-display font-semibold text-center leading-tight">
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
              건생병사 프로그램
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-800 mb-5 sm:mb-6 leading-tight">
              세포의 시간을 되돌리는 치유 혁명<br />
              <span className="text-forest-600">건생병사(健生病死) 프로그램</span>
            </h2>

            <blockquote className="border-l-4 border-forest-400 pl-4 sm:pl-6 my-6 sm:my-8">
              <p className="text-navy-600 text-base sm:text-lg italic font-display leading-relaxed">
                &ldquo;질병 이전보다 더 건강한 삶을 향해.&rdquo;
              </p>
            </blockquote>

            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              우리는 단순히 통증이 없는 상태를 목표로 하지 않습니다.
              질병이라는 피해 상황에만 매몰되는 치료를 넘어,
              스스로 회복하고 더 강해지는 몸의 방향을 회복하는 데 집중합니다.
            </p>

            {/* Key points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  label: '자가 치유의 완성',
                  text: '모든 질병은 스스로 치유될 수 있는 능력이 있으며, 올바른 움직임을 회복하면 통증은 자연스럽게 사라집니다.',
                },
                {
                  label: '회복을 넘어선 강화',
                  text: '환자는 질병 발생 전보다 육체적·정신적으로 더 건강해져야 한다는 치료 철학을 기반으로 합니다.',
                },
                {
                  label: '근본적 해독',
                  text: '노화 세포(좀비 세포) 제거와 정상 세포 재생을 돕는 집중치료로 몸의 기초 생태계를 다시 세웁니다.',
                },
                {
                  label: '만성 염증과 장 건강',
                  text: '만성 염증은 장내 환경(Dysbiosis), 장 누수(Leaky Gut), 음식 과민증과 밀접하게 연결되며 전신 질환으로 확산될 수 있습니다.',
                },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-forest-50/50 border border-forest-100">
                  <div className="w-2 h-2 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-display font-bold text-navy-700 text-[13px] sm:text-sm">{point.label}</span>
                    <p className="text-navy-500 text-[13px] sm:text-sm mt-0.5 leading-relaxed">{point.text}</p>
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
