//Variables
let input = document.getElementById('input');
let btn = document.getElementsByClassName('btn');
let btnNum = document.getElementsByClassName('btn-num');
let btnErase = document.getElementsByClassName('btn-erase');
let btnEqual = document.getElementsByClassName('btn-equal');

//Functions
$(document).ready(() => {
    $('.btn, .btn-num').on('click', (e) => {
        input.value = input.value + e.target.value;
    });
    $('.btn-erase').on('click', () =>{
        input.value = '';
    });
    $('.btn-equal').on('click', (e) =>{
        input.value = eval(input.value);
    });
});


