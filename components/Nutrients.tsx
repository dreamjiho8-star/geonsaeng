'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const nutrients = [
  {
    symbol: 'C',
    name: '비타민 C',
    role: '강력한 항산화제',
    description: '세포를 산화 스트레스로부터 보호하는 가장 강력한 항산화제입니다. 활성산소를 중화하고 면역 기능을 강화합니다.',
    color: 'from-orange-400 to-yellow-500',
    bgColor: 'bg-gold-50',
    borderColor: 'border-gold-200',
  },
  {
    symbol: 'D',
    name: '비타민 D',
    role: '세포 재생신호 전달자',
    description: '세포의 재생과 분화를 촉진하는 신호를 전달합니다. 면역 조절과 뼈 건강에도 필수적인 역할을 합니다.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-gold-50',
    borderColor: 'border-gold-100',
  },
  {
    symbol: 'Ω3',
    name: '오메가-3',
    role: '세포막의 파수꾼',
    description: '세포막의 유연성과 투과성을 유지하는 핵심 지방산입니다. 항염증 작용으로 세포 환경을 개선합니다.',
    color: 'from-forest-400 to-forest-600',
    bgColor: 'bg-forest-50',
    borderColor: 'border-forest-200',
  },
  {
    symbol: 'Tau',
    name: '타우린',
    role: '미토콘드리아의 엔진오일',
    description: '미토콘드리아의 에너지 생산 효율을 높이는 아미노산입니다. 세포 내 에너지 대사의 핵심 역할을 합니다.',
    color: 'from-forest-500 to-forest-700',
    bgColor: 'bg-forest-50',
    borderColor: 'border-forest-100',
  },
]

const harmfulFoods = [
  { category: '정제탄수화물', items: '빵, 떡, 흰쌀밥, 면류 먹지 않기', icon: '🍞' },
  { category: '정제당', items: '과자, 음료, 과일, 주스 먹지 않기', icon: '🍬' },
  { category: '유제품·알코올·카페인', items: '유제품, 알코올, 카페인 줄이기', icon: '🥛' },
]

export default function Nutrients() {
  const { ref, isInView } = useInView()

  return (
    <section id="nutrients" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-forest-100/30 blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-50 text-forest-700 text-sm font-medium tracking-wider mb-4">
              세포를 살리는 영양소
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 mb-4">
              염증을 줄이고 세포재생을 위한<br />
              <span className="text-forest-600">필수 영양소</span>
            </h2>
          </motion.div>
        </div>

        {/* Nutrients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {nutrients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl ${item.bgColor} border ${item.borderColor} hover:shadow-xl transition-all duration-500`}
            >
              {/* Symbol */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-display font-bold text-xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.symbol}
              </div>

              <h3 className="font-display text-lg font-bold text-navy-800 mb-1">
                {item.name}
              </h3>
              <p className="text-forest-600 text-sm font-medium mb-3">
                {item.role}
              </p>
              <p className="text-navy-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Harmful Foods Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-navy-800 mb-2 text-center">
              🚨 세포를 망치는 <span className="text-red-600">영양소</span>
            </h3>
            <p className="text-navy-500 text-center mb-8">
              &ldquo;달콤한 독, 혈당 스파이크를 멈추세요.&rdquo;
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {harmfulFoods.map((food, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-red-100">
                  <span className="text-2xl">{food.icon}</span>
                  <div>
                    <span className="font-display font-semibold text-navy-700 text-sm">{food.category}</span>
                    <p className="text-navy-500 text-xs mt-1">{food.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
