'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const challenges = [
  {
    number: 1,
    title: '염증을 일으키는 요인 차단',
    items: ['글루텐', '유당', '과당', '설탕', '히스타민 음식', '알레르기 음식'],
    description: '달콤한 독, 혈당 스파이크를 멈추세요. 과도한 정제 탄수화물과 설탕, 액상과당, 과일은 세포를 병들게 하는 주범입니다.',
    details: [
      { label: '인슐린 저항성 유발', text: '혈당이 급격히 오르면 인슐린이 과다 분비되고, 결국 세포는 인슐린 신호를 무시하게 됩니다.' },
      { label: '염증 폭풍', text: '혈액 속에 넘쳐나는 포도당은 단백질과 엉겨 붙어 독소를 만들고, 이것이 전신 염증을 일으킵니다.' },
      { label: '장내 염증유발', text: '정제 탄수화물, 정제당은 장내 유해균을 증가시키고, 염증을 유발하여 장누수 증후군을 만듭니다.' },
    ],
    icon: '🔥',
  },
  {
    number: 2,
    title: '비타민, 미네랄, 영양소 결핍·불균형 개선',
    items: ['비타민C', '비타민D', '오메가-3', '타우린'],
    description: '세포 재생에 필수적인 4대 영양소를 충분히 보충하여 세포 수준의 영양 균형을 맞춥니다.',
    details: [
      { label: '비타민 C', text: '강력한 항산화제로 세포를 보호합니다.' },
      { label: '비타민 D', text: '세포 재생신호 전달자 역할을 합니다.' },
      { label: '오메가-3', text: '세포막의 파수꾼으로 세포 구조를 지킵니다.' },
      { label: '타우린', text: '미토콘드리아의 엔진오일 역할을 합니다.' },
    ],
    icon: '💎',
  },
  {
    number: 3,
    title: '염증물질을 청소, 재활용하는 세포 제거 시스템',
    items: ['16시간 공복', 'Proteasome', 'Lysosome', 'Autophagy 시스템'],
    description: '비울 때 비로소 채워지는 치유의 시간. 하루 16시간 공복을 유지하면 오토파지 스위치가 켜집니다.',
    details: [
      { label: '오토파지(자가포식)', text: '염증찌꺼기나 병든 세포를 분해하여 에너지로 재활용하는 시스템입니다.' },
    ],
    icon: '♻️',
  },
  {
    number: 4,
    title: '미생성 운동법, 일주기 리듬 운동법, 생체역학 운동법',
    items: ['미토콘드리아 신생합성운동', '고강도 운동', '일주기 리듬 맞추기'],
    description: '미토콘드리아는 에너지를 만드는 발전소입니다. 고강도의 운동과 적절한 영양 공급이 핵심입니다.',
    details: [
      { label: '신생합성운동', text: '매일 심장이 두근거릴 강도의 운동으로 새로운 미토콘드리아를 생성합니다.' },
    ],
    icon: '🏃',
  },
]

export default function Challenges() {
  const { ref, isInView } = useInView()

  return (
    <section id="challenges" className="relative py-24 sm:py-32 bg-gradient-to-b from-forest-900 to-forest-800">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-400/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-400/10 text-forest-300 text-sm font-medium tracking-wider mb-4">
              실천 과제
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              건생병사 <span className="text-forest-300">4가지 과제</span>
            </h2>
            <p className="text-navy-300 text-lg max-w-xl mx-auto">
              건생병사를 최소 4주 실천해주세요!<br />
              몸의 대사 프로그램 변화를 체험하세요.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl bg-forest-800/50 border border-forest-700 hover:border-forest-400/30 backdrop-blur-sm transition-all duration-500"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                {item.number}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 ml-8">{item.icon}</div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.items.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-full bg-forest-700/80 text-forest-200 border border-forest-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Details */}
              <div className="space-y-3 border-t border-forest-700 pt-4">
                {item.details.map((detail, j) => (
                  <div key={j}>
                    <span className="text-forest-300 font-display text-sm font-semibold">
                      {detail.label}
                    </span>
                    <p className="text-navy-300 text-sm leading-relaxed mt-0.5">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
