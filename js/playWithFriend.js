const area = document.getElementById('area')
let move = 0;
let result = '';
let winCross = 0;
let winZero = 0;
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
let arrNull = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null',];

area.addEventListener('click', e => {
    if (e.target.className === 'box' && e.target.innerHTML === "") {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);