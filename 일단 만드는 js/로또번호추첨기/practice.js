var lotto = [];

// 로또 번호 6개 랜덤으로 생성
while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}

// 오름차순 정렬
lotto.sort((a, b) => a-b);

let id;
let lottoNum;

for (let i = 0; i < lotto.length; i++) {
    id = '#lotto-' + (i + 1);  // id 선택자 생성
    const lottoDiv = document.querySelector(id);  // lotto div 불러오기
    lottoNum = document.createElement('span');  // lottoNum에 span 태그 넣기
    lottoNum.innerText = lotto[i];  // span 태그에 lotto 번호 넣기
    lottoDiv.appendChild(lottoNum);  // lotto div 밑에 span 태그 넣기
}
