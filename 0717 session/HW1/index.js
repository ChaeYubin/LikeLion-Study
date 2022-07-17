const start_page = document.querySelector(".start");
const question = document.querySelector(".question");
const result_page = document.querySelector(".result");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const mbti_result = document.getElementById("mbti_result");

var mbti = "";

function start() {
  start_page.style.display = "none";
  result_page.style.display = "none";
  question1.style.display = "block";
}

function go2(btn) {
  question1.style.display = "none";
  question2.style.display = "block";
  btn == "btn1" ? (mbti += "E") : (mbti += "I");
}

function go3(btn) {
  question2.style.display = "none";
  question3.style.display = "block";
  btn == "btn1" ? (mbti += "S") : (mbti += "N");
}

function go4(btn) {
  question3.style.display = "none";
  question4.style.display = "block";
  btn == "btn1" ? (mbti += "T") : (mbti += "F");
}

function result(btn) {
  question4.style.display = "none";
  result_page.style.display = "block";
  btn == "btn1" ? (mbti += "J") : (mbti += "P");
  mbti_result.innerText = mbti;
}
