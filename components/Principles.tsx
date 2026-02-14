'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const principles = [
  {
    number: '01',
    title: '탄수화물·당·유제품·알코올·카페인 줄이기',
    description: '염증을 만드는 탄수화물과 당을 끊고, 세포를 살리는 항산화 식단을 실천합니다.',
    icon: '🚫',
    color: 'from-red-500/10 to-red-600/5',
    detail: '정제 탄수화물(빵, 떡, 흰쌀밥, 면류)과 정제당(과자, 음료, 과일, 주스) 섭취를 줄이세요.',
  },
  {
    number: '02',
    title: '비타민C·비타민D·오메가3·타우린 섭취',
    description: '세포 재생에 필수적인 4대 영양소를 충분히 보충합니다.',
    icon: '💊',
    color: 'from-forest-500/10 to-forest-600/5',
    detail: '약효 성분의 흡수율을 높이고 세포 수준의 영양 균형을 맞춥니다.',
  },
  {
    number: '03',
    title: '미토콘드리아 신생합성 촉진하기',
    description: '세포 안의 발전소를 늘려야 합니다. 고강도의 운동과 적절한 영양 공급이 핵심입니다.',
    icon: '⚡',
    color: 'from-gold-500/10 to-gold-600/5',
    detail: '낡은 미토콘드리아를 없애고, 건강하고 새로운 미토콘드리아를 생성합니다.',
  },
  {
    number: '04',
    title: '간헐적 단식으로 몸 청소하기',
    description: '16시간 공복(간헐적 단식)을 유지하면 오토파지 스위치가 켜집니다.',
    icon: '🕐',
    color: 'from-forest-400/10 to-forest-500/5',
    detail: '오토파지란 염증찌꺼기나 병든 세포를 분해하여 에너지로 재활용하는 시스템입니다.',
  },
  {
    number: '05',
    title: '항산화·항염증·면역력 강화물질 섭취',
    description: '발효한약을 통해 항산화, 항염증, 면역력 강화물질을 지속적으로 섭취합니다.',
    icon: '🛡️',
    color: 'from-forest-300/10 to-gold-500/5',
    detail: '발효 과정에서 독성이 제거되어 간 부담 없이 장기간 복용하며 세포를 재생할 수 있습니다.',
  },
]

export default function Principles() {
  const { ref, isInView } = useInView()

  return (
    <section id="principles" className="relative py-24 sm:py-32 bg-navy-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%232d3a2e'/%3E%3C/svg%3E")`,
      }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-100 text-forest-700 text-sm font-medium tracking-wider mb-4">
              建生病死 · 5대 원리
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 mb-4">
              건생병사 <span className="text-forest-600">핵심원리</span>
            </h2>
            <p className="text-navy-500 text-lg max-w-2xl mx-auto leading-relaxed">
              질병을 넘어, 세포를 다시 설계하다.<br />
              &ldquo;살아 숨쉬는 한, 세포는 건강하게 할 수 있다.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 rounded-2xl border border-navy-100 hover:border-forest-300 bg-gradient-to-br ${item.color} hover:shadow-xl hover:shadow-forest-100/50 transition-all duration-500 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display text-5xl font-bold text-navy-100 group-hover:text-forest-200 transition-colors duration-500">
                {item.number}
              </span>

              {/* Icon */}
              <span className="text-3xl mb-4 block">{item.icon}</span>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-navy-800 mb-3 pr-12 leading-snug">
                {item.title}
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-navy-400 text-xs leading-relaxed border-t border-navy-100 pt-3">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="font-display text-xl sm:text-2xl text-navy-700 italic max-w-2xl mx-auto">
            &ldquo;삶의 방식을 바꾸면 세포가 바뀝니다.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
