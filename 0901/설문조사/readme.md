Gemini를 이용하여 작성함.

프롬프트 : GAS환경에서 개발 및 배포할거야.
Code.gs, index.html 만들어줘 
이전것과는 다른 설문조사 페이지를 만들껀데 도와줄레? 스프레드시트를 써도 되고 아무 설문조사나 가능해

# 📋 만족도 및 피드백 설문조사 웹 앱

Google Apps Script(GAS)와 Google Sheets 기반으로 제작된 반응형 피드백 수집 웹 앱입니다.  
별도의 서버 없이 설문 작성부터 구글 시트 자동 저장, 현장 공유(QR 코드)까지 지원합니다.

🔗 **[웹 앱 바로가기](https://zrr.kr/D6VRM4)**

---

### ✨ 주요 기능
- **피드백 설문 작성:** 만족도(5점 척도), 유익했던 점, 건의사항, 추천 의향 수집 (익명 작성 가능)
- **현장 즉시 공유:** 접속 URL 원클릭 복사 및 스마트폰 스캔용 동적 QR 코드 생성
- **구글 시트 자동 연동:** 제출 즉시 한국 시간(KST) 타임스탬프와 함께 시트에 행 추가 (헤더 자동 생성)

---

### 🛠 기술 스택
- **Frontend:** HTML5, CSS3, JavaScript
- **Backend / DB:** Google Apps Script, Google Sheets
- **External API:** QR Server API

---

### 📂 파일 구조
```text
├── Code.gs      # 웹 서빙(doGet) 및 스프레드시트 저장 로직
└── index.html   # 설문 UI, 반응형 스타일 및 QR/복사 기능
```

웹사이트 링크 : https://zrr.kr/D6VRM4
