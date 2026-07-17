/**
 * 紅隊專案追蹤 — 前端設定檔
 * 把下面三個值換成你自己的（教學見 部署教學.md）。
 * 這個檔會被 index.html 讀取。
 */
window.APP_CONFIG = {
  // 1) Google OAuth 用戶端 ID（Google Cloud Console → 憑證 → OAuth 2.0 用戶端 ID）
  GOOGLE_CLIENT_ID: "270881497553-725ai68vnllj8g1n3pbdps15q16btcrn.apps.googleusercontent.com",

  // 2) Apps Script 部署後的網頁應用程式網址（/exec 結尾）
  API_URL: "https://script.google.com/macros/s/AKfycbx1d1Cd8VCJkomrSBAEr7MUEZzVqHS51EYd_vwNXcUGnv6rwfCve0gg4lxCnY-jTlkz/exec",

  // 3) 允許登入的 email
  //    治本升級後,真正的把關在後端 Code.gs 的 ALLOWED_EMAILS(用 Google 憑證驗證,無法偽造)。
  //    這裡留空即可,不必把成員 email 公開在 GitHub。加人只需改 Code.gs + 重新部署。
  ALLOWED_EMAILS: [],
};
