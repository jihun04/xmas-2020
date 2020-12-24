const cake = document.querySelector(".cake");

function handleCakeClick() {
  alert("앗, 어떻게 찾았지!")
  window.location.href = "xmas.html";
}

function init() {
  cake.addEventListener("click", handleCakeClick);
}

init();