const IMGNUMBER = 3;

function genRandom() {
  return Math.ceil(Math.random() * IMGNUMBER);
}

function loadCakeImg() {
  const currentNumber = genRandom();
  if(currentNumber === 1) {
    cake.src = "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker.gif";
  } else if(currentNumber === 2) {
    cake.src = "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(2).gif";
  } else if(currentNumber === 3) {
    cake.src = "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(1).gif";
  }
}

function init() {
  loadCakeImg();
}

init();