const toDoList = document.querySelector("#to-do-list");
const items = toDoList.children;

// 1. upToDo 함수를 완성
// upToDo 함수: 이벤트가 발생한 대상에 'done'이라는 클래스 속성 값을 토글하는 함수
function upToDo(event) {
  event.currentTarget.classList.toggle("done");
}

// 2. 반복문을 활용해서 이벤트 핸들러를 등록
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", upToDo);
}

// 제대로 동작하는지 확인을 위한 TEST CODE
// items[3].removeEventListener("click", upToDo);
