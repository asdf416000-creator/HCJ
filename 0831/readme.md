이 코드는 ChatGPT로 만들었습니다.

팀별 경주 여행 1박2일 계획

프롬프트 : 팀 MT를 주제로 웹페이지를 만들고 각 팀원들의 Github에 작업 내용을 업로드 합니다.
수정사항 알려줄게 장소는 경주, 참가 인원은 5명으로 바꿔줘 그에 맞는 스케쥴도 다 짜줘
팀 MT를 주제로 웹페이지를 만들어줘

# 🍁 2026 경주 청춘 팀 MT 대시보드 (5인 1박 2일)

Google Apps Script(GAS) 기반으로 제작된 5인 맞춤형 여행 일정 및 팀빌딩 웹 대시보드입니다.  
실시간 D-Day 카운트다운부터 1박 2일 타임테이블, 바베큐 경비 계산기, 팀 레크리에이션 도구까지 한 페이지에서 지원합니다.

---

### ✨ 주요 기능
- **실시간 D-Day 타이머:** 출발 일시까지 남은 일/시/분/초 실시간 카운트다운
- **1박 2일 타임라인:** 탭 전환 방식(DAY 1 / DAY 2)의 상세 일정 브라우징
- **5인 역할 분담 카드:** 리더/총무/그릴/MC/포토 담당별 R&R 및 GitHub 프로필 링크 제공
- **바베큐 & 경비 계산기:** 먹성/주류 스타일에 따른 고기·주류 수량 및 1인당 예상 비용 자동 산출
- **레크리에이션 허브:** 2:3 랜덤 팀 셔플, 경주/IT 초성 퀴즈, 벌칙/당번 추첨 룰렛 (`canvas-confetti` 축하 효과)
- **인터랙티브 체크리스트:** 준비물 확인 및 진행률 프로그레스 바 (`localStorage` 영구 저장)
- **모바일 QR 및 Git 가이드:** 현장 스캔용 동적 QR 코드 및 팀원용 Git 배포 가이드 모달 탑재

---

### 🛠 기술 스택
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **Icons & Effects:** Lucide Icons, Canvas-Confetti
- **Backend / Hosting:** Google Apps Script (GAS HtmlService Template)
- **Storage / API:** LocalStorage (체크리스트), QR Server API

---

### 📂 파일 구조
```text
├── Code.gs      # doGet() 웹 앱 서빙 및 getMtData() 일정/멤버 데이터 공급
└── index.html   # 반응형 대시보드 UI, 인터랙티브 위젯 및 이벤트 핸들링
```

웹사이트 주소 : https://urlcut.kr/GFxPBnCRdI
