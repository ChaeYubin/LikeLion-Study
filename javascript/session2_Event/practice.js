// document.getElementById("btn").addEventListener("click", function() {
//     console.log("click!!!");
// });


// var num = 0;
// document.getElementById('plus').addEventListener("click", function(){
//     num ++;
//     document.getElementById('num').innerHTML = num;
// });
// document.getElementById('minus').addEventListener("click", function(){
//     num --;
//     document.getElementById('num').innerHTML = num;
// });


// document.querySelector('.bar').addEventListener("click", function(){
//     document.querySelector('.newBar').style.display = "block";
// });

// document.querySelector('.bar').addEventListener("click", function(){
//     document.querySelector(".bar").innerHTML = "눌렀어!";
//     document.querySelector('.newBar').classList.toggle("show");
// });


document.querySelectorAll('.list')[0].addEventListener("click", function(e){
    tabBtn(e.target.dataset.id);
});


function tabBtn(a) {
    document
    .querySelectorAll('.tab-button')
    [a].addEventListener("click", function() {
        for (
            let i = 0; 
            i < document.querySelectorAll(".tab-button").length;
            i++
        ) {
            document.querySelectorAll('.tab-button')[i].classList.remove("here");
            document.querySelectorAll('.tab-content')[i].classList.remove("show");
        }

        document.querySelectorAll('.tab-button')[a].classList.add("here");
        document.querySelectorAll('.tab-content')[a].classList.add("show");
    });
}
