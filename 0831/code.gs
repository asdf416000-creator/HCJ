function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('2026 경주 청춘 팀 MT (5인 1박 2일)')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getMtData() {
  return {
    title: '2026 경주 팀 MT (5인)',
    location: '경주 보문단지 펜션',
    targetDate: '2026-09-19T10:30:00+09:00',
    qrUrl: 'https://urlcut.kr/GFxPBnCRdI',
    members: [
      { role: '총괄 리더 & 드라이버', name: '곽민선 (리더)', desc: '전체 일정 조율, 숙소 예약 및 안전 운전 총괄', icon: '👑', github: 'https://github.com' },
      { role: '총무 & 재정 관리', name: '이수동', desc: '영수증 수집, 장보기 결제, 실시간 경비 및 1/N 정산 및 안전 운전', icon: '💰', github: 'https://github.com' },
      { role: '그릴 마스터', name: '심현주', desc: '바베큐 숯불 점화, 삼겹/목살 굽기 총괄 및 찌개 조리', icon: '🥩', github: 'https://github.com' },
      { role: '레크리에이션 MC', name: '이정민', desc: '미니게임 진행, 음악 플레이리스트, 벌칙 룰렛 운영', icon: '🎤', github: 'https://github.com' },
      { role: '포토그래퍼 & 클린', name: '강보승', desc: '인생샷 촬영, 펜션 분리수거 및 정리 총괄', icon: '📸', github: 'https://github.com' }
    ],
    day1: [
      { time: '10:30 ~ 11:30', title: '집결 및 경주로 출발 🚗', desc: '지정 집결지에서 5명 탑승 완료 후 경주 방면 출발' },
      { time: '12:00 ~ 14:00', title: '황리단길 점심 & 한옥 카페 ☕', desc: '황리단길 맛집 식사 후 한옥 카페 티타임 및 십원빵 간식' },
      { time: '14:30 ~ 15:30', title: '대형마트 단체 장보기 (홈플러스 경주점) 🛒', desc: '삼겹살/목살, 쌈채소, 주류, 라면, 과자 등 5인분 구매' },
      { time: '16:00 ~ 18:00', title: '숙소 체크인 & 팀빌딩 미니게임 🏆', desc: '숙소 짐 풀기 후 2:3 팀대항 레크리에이션 (초성퀴즈, 토크)' },
      { time: '18:30 ~ 20:30', title: '야외 바베큐 파티 🥩🔥', desc: '숯불 고기구이와 비빔면 조합의 메인 만찬' },
      { time: '21:00 ~ 22:30', title: '동궁과 월지 야경 드라이브 🌙', desc: '경주 필수 야경 명소 감상 및 단체 사진 촬영' },
      { time: '23:00 ~ 새벽', title: '불멍 & 심야 토크 🪵✨', desc: '마시멜로 구워먹으며 밤샘 수다 및 롤링페이퍼' }
    ],
    day2: [
      { time: '09:30 ~ 10:30', title: '기상 및 해장 라면 타임 🍜', desc: '얼큰한 해장 라면으로 든든한 아침 식사' },
      { time: '10:30 ~ 11:30', title: '숙소 분리수거 & 체크아웃 🧹', desc: '설거지, 쓰레기 분리수거 및 단체 사진 촬영' },
      { time: '12:00 ~ 14:00', title: '보문호수 산책 & 대형 베이커리 카페 🌿', desc: '보문단지 호수 뷰 감상 및 여유로운 티타임' },
      { time: '14:30 ~', title: '경주빵/황남빵 구매 및 귀가 🚗', desc: '기념품 구매 후 안전 귀가 및 최종 정산' }
    ]
  };
}