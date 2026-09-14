Gemini를 이용하여 작업함

프롬프트 : 팀 작업으로 주제를 하나 정해서 자료 수집하는 페이지 만들껀데 도와줄레? 좋아하는 아이돌이나 좋아하는 연예인으로 할까? 자신 이름(익명가능), 좋아하는 사람, 언제부터 좋아했는지 이런거 연관해서 좀 해줘

# 💜 나의 최애 아이돌 & 연예인 자랑하기

Google Apps Script(GAS)와 Google Sheets를 연동해 제작한 최애 자랑 및 팬레터 접수 웹 앱입니다.  
Tailwind CSS 기반의 감성적인 글래스모피즘(Glassmorphism) UI와 함께, 작성된 덕질 일기와 응원 메시지를 구글 시트에 실시간으로 기록합니다.

---

### ✨ 주요 기능
- **최애 정보 및 팬레터 수집:** 작성자(닉네임), 최애 이름/그룹, 입덕 시기 및 계기, 매력 포인트/추천작, 응원 메시지, 비밀 속마음 작성
- **현장 및 SNS 공유 지원:** 현재 페이지 URL 원클릭 복사 및 실시간 QR 코드 생성 (`QR Server API`)
- **연속 작성 지원:** 전송 완료 후 '다른 최애도 추가로 자랑하기' 버튼을 통한 폼 초기화
- **스프레드시트 자동 동기화:** KST 기준 타임스탬프와 함께 구글 시트에 자동 행 추가 (헤더 자동 생성)

---

### 🛠 기술 스택
- **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript, Material Symbols
- **Backend / Database:** Google Apps Script (GAS), Google Sheets
- **External API:** QR Server API

---

### 📂 파일 구조
```text
├── Code.gs      # 웹 앱 서빙(doGet) 및 스프레드시트 적재 함수(submitFavorite)
└── index.html   # Tailwind 스타일링이 적용된 반응형 폼 및 QR 공유 UI
```

웹사이트 주소 : https://zrr.kr/KXPJOR
