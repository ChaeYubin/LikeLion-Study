/*
document.getElementById("lion").style.color = "red";
document.getElementById("tiger").style.color = "blue";
document.getElementById("bear").style.color = "green";
*/

/*
const animal = document.getElementsByTagName("li");
document.getElementsByTagName("li")[0].style.color = "red";
*/

document.getElementsByClassName("animal")[1].style.color = "red";

document.querySelectorAll('.animal')[0].style.color = "green";

// innerHTML 실습
document.querySelectorAll('.animal')[2].innerHTML = "dog";

const animals = document.getElementById("animals");
animals.innerHTML += "<li class='animal'>cat</li>";

// classList로 class 제어하기
document.querySelectorAll('.box')[0].classList.add("purple");

document.querySelectorAll('.box')[0].classList.remove("purple");

// class toggle
document.querySelectorAll('.box')[0].classList.toggle("yellow");
document.querySelectorAll('.box')[0].classList.toggle("yellow");
