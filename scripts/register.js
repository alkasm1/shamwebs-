document.getElementById("register-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userRole", "promoter"); // مروّج افتراضيًا

  window.location.href = "../pages/home.html";
});
