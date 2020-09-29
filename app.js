//Variables
let input = document.getElementById('input');
let btn = document.getElementsByClassName('btn');
let btnNum = document.getElementsByClassName('btn-num');
let btnErase = document.getElementsByClassName('btn-erase');
let btnEqual = document.getElementsByClassName('btn-equal');


//Event listeners
function addEvent(buttons, val) {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            input.value = input.value + e.target.value;;
        })
    }
}

btnErase[0].addEventListener('click', () => {
    input.value = '';
})

btnEqual[0].addEventListener('click', () => {
    input.value = eval(input.value)
})

addEvent(btn);

addEvent(btnNum);



