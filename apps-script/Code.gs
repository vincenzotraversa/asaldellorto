// Google Apps Script - RSVP (salvataggio su Google Sheets)
// Sheet: Partecipazione matrimonio
// Tab: Foglio1
const SHEET_ID = "1dcYICuFRVl1ObS80cQi_wsBHuK4IAZXEHAN5gAVoJZE";
const SHEET_NAME = "Foglio1";

function doGet() {
  return ContentService
    .createTextOutput("OK - RSVP Web App attiva")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.confirm || "",
      data.guests || "",
      data.notes || "",
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
