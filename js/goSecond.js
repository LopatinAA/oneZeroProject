const area = document.getElementById('area')
let move = 0;
let result = '';
let winCross = 0;
let winZero = 0;
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
let arrNull = ['null','null','null','null','null','null','null','null','null',];

const drawO = () => {
            let tempArr = [];
            for (i = 0; i < 9; i++){
                if (arrNull[i] === 'null') {
                    tempArr.push(i);
                }
            }
            let randIndexTempArr = Math.floor(Math.random() * tempArr.length);
            var randNull = tempArr[randIndexTempArr];
            const boxO = document.querySelector('[data-num="'+randNull+'"]');
            boxO.innerHTML = '0';
            arrNull[randNull] = '0';
        }
drawO();

area.addEventListener('click', e =>{
    
    if(e.target.className === 'box' && e.target.innerHTML === "") {
            e.target.innerHTML = 'X';
            arrNull[e.target.dataset.num]= 'X'; 
            check();
    
            drawO();
            check();
    }
})


overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);