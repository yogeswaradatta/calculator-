let inputt = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let rst = document.getElementById('rst')

let string = "";
let arr = Array.from(buttons);

function handleButtonClick(e) {
    if (e.target.innerHTML === '=') {
        string = eval(string);
        inputt.value = string;
    } else if (e.target.innerHTML === 'RESET') {
        string = "";
        inputt.value = string;
    } else if (e.target.innerHTML === 'DEL') {
        string = string.substring(0, string.length-1);
        inputt.value = string;
    } else {
        string += e.target.innerHTML;
        inputt.value = string;
    }
}

arr.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
