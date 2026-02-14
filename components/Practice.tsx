'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

const dietPractice = [
  { text: '빵, 떡, 흰쌀밥, 면류 먹지 않기', emoji: '🚫🍞' },
  { text: '과자, 음료, 과일, 주스 먹지 않기', emoji: '🚫🍬' },
  { text: '유제품, 알코올, 카페인 줄이기', emoji: '🚫🥛' },
  { text: '비타민C, 비타민D, 오메가3, 타우린 섭취하기', emoji: '💊' },
  { text: '항산화, 항염증, 면역력 강화물질 한약 섭취', emoji: '🌿' },
]

const lifestylePractice = [
  { text: '매일 심장이 두근거릴 강도의 운동하기', emoji: '🏃' },
  { text: '저녁을 일찍 먹고 아침을 굶어 16시간 공복유지', emoji: '🕐' },
  { text: '항산화, 항염증, 면역력 강화물질 한약 섭취', emoji: '🛡️' },
]

export default function Practice() {
  const { ref, isInView } = useInView()

  return (
    <section id="practice" className="relative py-24 sm:py-32 bg-gradient-to-b from-forest-900 to-forest-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-400/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-400/10 text-forest-300 text-sm font-medium tracking-wider mb-4">
              실천 가이드
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              건생병사 <span className="text-forest-300">실천</span>
            </h2>
            <p className="text-navy-300 text-lg max-w-xl mx-auto">
              건생병사를 최소 4주 실천 해주세요!<br />
              몸의 대사 프로그램 변화를 체험하세요.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 식이 혁명 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-forest-800/40 border border-forest-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-xl">
                🍽️
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">식이 혁명</h3>
                <p className="text-navy-400 text-sm">염증을 만드는 탄수화물과 당을 끊고, 세포를 살리는 항산화 식단</p>
              </div>
            </div>

            <div className="space-y-3">
              {dietPractice.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-forest-700/30 border border-forest-600/50 hover:border-forest-400/20 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-navy-200 text-sm">{item.text}</span>
                  <div className="ml-auto w-5 h-5 rounded border-2 border-forest-500 flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* 생활 교정 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="p-8 rounded-2xl bg-forest-800/40 border border-forest-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xl">
                🧘
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">생활 교정</h3>
                <p className="text-navy-400 text-sm">16시간 공복과 미토콘드리아 신생합성 운동으로 치유할 시간을 줍니다</p>
              </div>
            </div>

            <div className="space-y-3">
              {lifestylePractice.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-forest-700/30 border border-forest-600/50 hover:border-forest-400/20 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-navy-200 text-sm">{item.text}</span>
                  <div className="ml-auto w-5 h-5 rounded border-2 border-forest-500 flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* 16시간 공복 타임라인 */}
            <div className="mt-8 p-6 rounded-xl bg-forest-900/50 border border-forest-600">
              <h4 className="font-display font-bold text-forest-300 mb-4 text-center">16시간 공복 타임라인</h4>
              <div className="flex items-center justify-between text-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">
                    🌅
                  </div>
                  <span className="text-navy-400 text-xs mt-2">이른 저녁</span>
                  <span className="text-navy-500 text-[10px]">~18:00</span>
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500/30 via-forest-600 to-forest-500/30 mx-2" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-forest-600/50 flex items-center justify-center text-forest-300 text-sm font-bold">
                    🌙
                  </div>
                  <span className="text-navy-400 text-xs mt-2">공복 유지</span>
                  <span className="text-navy-500 text-[10px]">16시간</span>
                </div>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-forest-500/30 via-forest-600 to-green-500/30 mx-2" />
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">
                    ☀️
                  </div>
                  <span className="text-navy-400 text-xs mt-2">다음 날 점심</span>
                  <span className="text-navy-500 text-[10px]">~10:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-forest-500/10 via-forest-400/5 to-forest-500/10 border border-forest-400/20">
            <p className="font-display text-xl sm:text-2xl text-white italic">
              &ldquo;건강한 세포가 많아진 만큼 내 몸은 건강해진다&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
