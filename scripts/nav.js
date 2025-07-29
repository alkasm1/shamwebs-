function navigateTo(page) {
  window.location.href = page;
}
// التأكد من وجود بيانات المستخدم
const name = localStorage.getItem("userName");
const email = localStorage.getItem("userEmail");

if (!name || !email) {
  alert("يجب تسجيل الدخول أولاً 🚫");
  window.location.href = "../login.html";
} else {
  document.getElementById("username").textContent = name;
}

// توليد رابط إحالة ديناميكي
function generateReferral(storeId) {
  const referralLink = `https://shamwebs.com/referral?store=${storeId}&user=${email}`;
  alert(`🎉 رابطك جاهز:\n${referralLink}`);
  // يمكن حفظ الرابط لاحقًا أو عرضه في صفحة خاصة
}

// زر تسجيل الخروج
function logout() {
  localStorage.clear();
  window.location.href = "../login.html";
}
