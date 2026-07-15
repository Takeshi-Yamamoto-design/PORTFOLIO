const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

// 開く・閉じる（ハンバーガー）
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  burger.classList.toggle("active");
});

// オーバーレイクリックで閉じる
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  burger.classList.remove("active");
});

// ★メニュークリックで自動で閉じる
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    burger.classList.remove("active");
  });
});