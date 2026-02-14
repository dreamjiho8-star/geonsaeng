# 건생병사 — 세포 재생 프로젝트 사이트

한의사 교육용 건생병사 콘텐츠 웹사이트입니다.

## 🚀 빠른 시작

### 방법 1: Docker로 개발 (추천)
```bash
# 개발 모드 (코드 수정 시 자동 반영)
docker compose --profile dev up

# 브라우저에서 http://localhost:3000 접속
```

### 방법 2: Docker로 배포
```bash
# 프로덕션 빌드 & 실행
docker compose up -d --build

# 브라우저에서 http://localhost:3000 접속
```

### 방법 3: 로컬 직접 실행
```bash
# Node.js 20+ 필요
npm install
npm run dev      # 개발 모드
# 또는
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 실행
```

## 📁 프로젝트 구조
```
├── app/
│   ├── layout.tsx       # 루트 레이아웃 (메타데이터, 폰트)
│   ├── page.tsx         # 메인 페이지
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Header.tsx       # 상단 네비게이션
│   ├── Hero.tsx         # 히어로 섹션
│   ├── Principles.tsx   # 5대 핵심원리
│   ├── Challenges.tsx   # 4가지 과제
│   ├── Nutrients.tsx    # 세포를 살리는 영양소
│   ├── Fermented.tsx    # 발효한약
│   ├── Acupuncture.tsx  # 침치료
│   ├── Practice.tsx     # 실천 가이드
│   ├── Contact.tsx      # 문의/소개
│   ├── Footer.tsx       # 푸터
│   └── useInView.ts     # 스크롤 애니메이션 훅
├── Dockerfile           # 프로덕션 Docker 이미지
├── docker-compose.yml   # Docker Compose 설정
└── README.md
```

## 🛠️ 서버 배포 방법

서버 관리자분에게 이 폴더 전체를 전달하세요.

```bash
# 서버에서 실행
docker compose up -d --build
```

기본 포트는 3000번입니다. nginx 등 리버스 프록시 뒤에서 운영하실 수 있습니다.

## 📝 콘텐츠 수정

각 섹션의 텍스트는 `components/` 폴더의 해당 파일에서 직접 수정할 수 있습니다.
