import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '건생병사 — 세포 재생 프로젝트 | Bio-Science Korean Medicine',
  description: '건강한 세포는 살리고, 병든 세포는 없앤다. 현대의학의 기능의학과 전통의 미생물 발효한약, 내성없는 침치료를 결합한 세포 재생 프로젝트.',
  keywords: ['건생병사', '세포재생', '발효한약', '한의학', '기능의학', '미토콘드리아'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
