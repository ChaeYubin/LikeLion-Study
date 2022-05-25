const input = prompt();

// !input과 input === "" 은 같은 의미
/*
    if (input === "") {
        console.log("입력값이 없습니다.");
    } else {
        console.log(input);
    }
*/

/* falsy: undefined, null, 0, '', NaN(Not a Number) */

if (!input) {
    console.log("입력값이 없습니다.");
} else {
    console.log(input);
}
