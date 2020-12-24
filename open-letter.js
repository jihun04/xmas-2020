const envelope = document.querySelector(".envelope"),
openedLetter = document.querySelector(".letter-open"),
closedLetter = document.querySelector(".letter-close");

const OPENLETTER_CN = "letter-open",
CLOSELETTER_CN = "letter-close";

function openEnvelope() {
  openedLetter.className = CLOSELETTER_CN;
  closedLetter.className = OPENLETTER_CN;
}

function init() {
  envelope.addEventListener("click", openEnvelope);
}

init();