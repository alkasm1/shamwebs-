// التقاط رمز الإحالة من رابط التسجيل
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get("ref");

if (refCode) {
  localStorage.setItem("referralCode", refCode);
}

// عند إتمام التسجيل، استرجاع رمز الإحالة وإرساله مع البيانات
function getReferralCode() {
  return localStorage.getItem("referralCode");
}
