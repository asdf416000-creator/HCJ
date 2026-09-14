// 제공해주신 구글 스프레드시트 URL
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1DWhfWEvl2BwDTAMPb0q2ANXGdgntsh397aY9_5KlYvc/edit?gid=0#gid=0";

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('나의 최애 아이돌 & 연예인 자랑하기')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

function submitFavorite(formData) {
  try {
    const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadsheet.getActiveSheet();

    // 첫 행에 헤더가 없는 경우 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "등록일시",
        "작성자(닉네임)",
        "최애 이름/그룹",
        "입덕 시기",
        "입덕 계기",
        "최애 매력포인트 / 추천작",
        "최애에게 한마디",
        "몰래 하고 싶은 말 (비밀 속마음)"
      ]);
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");

    // 스프레드시트에 행 추가
    sheet.appendRow([
      timestamp,
      formData.nickname || "익명의 팬",
      formData.idolName,
      formData.startDate,
      formData.reason,
      formData.charmPoint,
      formData.message,
      formData.secretMessage
    ]);

    return { success: true };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}