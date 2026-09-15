// 연동할 구글 스프레드시트 URL (빈 값으로 두면 현재 스크립트가 연결된 시트에 자동 저장됩니다)
const SPREADSHEET_URL = ""; 

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('만족도 및 의견 설문조사')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function submitSurvey(formData) {
  try {
    let sheet;
    if (SPREADSHEET_URL && SPREADSHEET_URL.trim() !== "") {
      sheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL).getActiveSheet();
    } else {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }

    // 첫 행에 헤더가 없는 경우 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "제출일시",
        "참여자 이름/소속",
        "전반적 만족도(점수)",
        "가장 유익했던 점",
        "개선 및 건의사항",
        "재참여/추천 의향"
      ]);
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");

    // 응답 데이터 저장
    sheet.appendRow([
      timestamp,
      formData.respondent || "익명",
      formData.rating,
      formData.bestTopic,
      formData.feedback,
      formData.recommend
    ]);

    return { success: true };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}