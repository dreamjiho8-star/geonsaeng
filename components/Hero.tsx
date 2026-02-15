'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-start lg:items-center justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-24 pb-[max(4rem,env(safe-area-inset-bottom))] sm:pb-[max(5rem,env(safe-area-inset-bottom))] lg:pb-24">
      {/* Background - warm dark green */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-navy-800" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-forest-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-400/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-forest-400/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-forest-400/5" />

      {/* Stars / dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-forest-300/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forest-400/30 bg-forest-400/5 mb-8">
            <span className="text-forest-200 text-lg sm:text-xl tracking-[0.35em] font-display">
              建生病死
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            건생
            <span className="text-forest-300">병사</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-navy-200 font-display font-medium mb-4">
            세포 재생 프로젝트
          </p>

          {/* Quote */}
          <div className="relative inline-block my-8">
            <span className="absolute -top-4 -left-6 text-forest-400/40 text-5xl font-display">&ldquo;</span>
            <p className="text-lg sm:text-xl text-navy-300 font-body leading-relaxed max-w-2xl">
              건강한 세포는 살리고,<br />
              병든 세포는 없앤다.
            </p>
            <span className="absolute -bottom-4 -right-6 text-forest-400/40 text-5xl font-display">&rdquo;</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Description */}
          <p className="text-navy-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            만성통증, 만성염증, 만성피로, 만성질환.<br />
            증상만 쫓아다니는 치료는 이제 멈춰야 합니다.
          </p>

  <p className="text-forest-300/80 text-sm tracking-widest mt-12 mb-4">
  더 알아보기 ↓
</p>
        </motion.div>

        {/* Three pillars preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: '🔬', label: '건생병사 프로그램', href: '#acupuncture' },
            { icon: '🌿', label: '발효 한약', href: '#fermented' },
            { icon: '⚙️', label: '건생병사 핵심원리', href: '#principles' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex flex-col items-center gap-2 px-4 py-6 sm:py-5 rounded-xl bg-forest-700/50 border border-forest-300/25 shadow-lg shadow-black/25 backdrop-blur-sm hover:bg-forest-600/55 hover:border-forest-200/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-300/60 transition-all duration-300"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-white font-display font-semibold">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
