'use client'

import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-50 text-forest-700 text-sm font-medium tracking-wider mb-4">
              문의 및 소개
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              건생병사 치료 프로토콜 <span className="text-forest-600">한의원</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-forest-50 to-gold-50/50 border border-forest-100">
            {/* Logo area */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white font-display font-bold text-xs leading-tight text-center">
                  建生<br/>病死
                </div>
              </div>
              <p className="text-navy-500 text-base leading-relaxed">
                저희 한의원은 문형철 치유 연구소의<br />
                <strong className="text-navy-700">건생병사 치료 프로토콜 한의원</strong>입니다.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="https://www.youtube.com/@Cellheal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-4 p-5 rounded-xl bg-white border border-navy-100 hover:border-red-300 hover:shadow-md transition-all duration-300 group min-h-[72px] text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.5c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="font-display font-semibold text-navy-700 text-sm group-hover:text-red-600 transition-colors break-keep">YouTube</span>
                  <p className="text-navy-400 text-xs break-keep">문형철 치유연구소</p>
                </div>
              </a>

              <a
                href="https://cafe.naver.com/gsbscafe?tc=shared_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-4 p-5 rounded-xl bg-white border border-navy-100 hover:border-green-300 hover:shadow-md transition-all duration-300 group min-h-[72px] text-left"
              >
                <div
                  aria-label="네이버 로고"
                  className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-no-repeat bg-[length:200%_200%] bg-left-top"
                  style={{ backgroundImage: "url('/naver-icon-file.png')" }}
                />
                <div className="min-w-0">
                  <span className="font-display font-semibold text-navy-700 text-sm group-hover:text-green-600 transition-colors break-keep">네이버 카페</span>
                  <p className="text-navy-400 text-xs break-keep">건생병사 실천생활</p>
                </div>
              </a>
            </div>

            {/* Call to action */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-r from-forest-500/10 to-forest-400/5 border border-forest-200">
              <p className="text-navy-600 text-sm mb-2">
                현대의학의 기능의학(Functional Medicine)과<br />
                전통의 미생물 발효 한약, 내성없이 지속할 수 있는 침치료
              </p>
              <p className="font-display font-bold text-navy-800 text-lg">
                이것을 결합하여<br />
                당신의 몸을 세포 단위에서부터 다시 설계합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
