export default function Footer() {
  return (
    <footer className="bg-forest-900 border-t border-forest-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white font-display font-bold text-[7px] leading-tight text-center">
              建生<br/>病死
            </div>
            <span className="text-navy-400 font-display text-sm">
              건생병사 — 세포 재생 프로젝트
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#principles" className="text-navy-500 hover:text-forest-300 transition-colors">핵심원리</a>
            <a href="#challenges" className="text-navy-500 hover:text-forest-300 transition-colors">4가지 과제</a>
            <a href="#nutrients" className="text-navy-500 hover:text-forest-300 transition-colors">영양소</a>
            <a href="#fermented" className="text-navy-500 hover:text-forest-300 transition-colors">발효한약</a>
            <a href="#acupuncture" className="text-navy-500 hover:text-forest-300 transition-colors">침치료</a>
            <a href="#contact" className="text-navy-500 hover:text-forest-300 transition-colors">문의</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-forest-800 text-center">
          <p className="text-navy-300 text-xs">
            © {new Date().getFullYear()} 건생병사 치료 프로토콜 한의원 · 문형철 치유연구소
          </p>
          <p className="text-navy-400 text-xs mt-1">
            본 사이트의 내용은 한의사 교육용으로 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
