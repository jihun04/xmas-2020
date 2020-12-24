const msgDate = document.querySelector(".message-date");

function loadDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  console.log(month)
  msgDate.innerText = `${year}.${month}.${today < 10 ? `0${today}` : today}.`;
}

function init() {
  loadDate();
  setInterval(loadDate, 1000);
}

init();