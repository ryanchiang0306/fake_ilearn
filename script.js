
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(`模擬登入成功！\n帳號：${username}\n密碼：${password}`);
});
