const about = document.querySelector("#About");
const products = document.querySelector("#Products");
const technology = document.querySelector("#Technology");
const downloads = document.querySelector("#Downloads");
const tab_button = document.querySelectorAll(".tab");

// 처음에 About 내용, 버튼 배경색상 보이기
about.style.display = "block";
document.querySelector("#default").style.backgroundColor = "tomato";

// 탭 클릭 시 메뉴 보이게끔 하는 함수
function openMenu(menu, tab, color) {
  for (var i = 0; i < 4; i++) {
    tab_button[i].style.removeProperty("background-color");
  }
  about.style.display = "none";
  products.style.display = "none";
  technology.style.display = "none";
  downloads.style.display = "none";
  switch (menu) {
    case "About":
      about.style.display = "block";
      tab.style.backgroundColor = color;
      break;
    case "Products":
      products.style.display = "block";
      tab.style.backgroundColor = color;
      break;
    case "Technology":
      technology.style.display = "block";
      tab.style.backgroundColor = color;
      break;
    case "Downloads":
      downloads.style.display = "block";
      tab.style.backgroundColor = color;
      break;
  }
}
