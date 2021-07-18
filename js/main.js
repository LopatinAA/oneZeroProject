//инициализация переменных
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
//отлавливаем клик на странице 
area.addEventListener('click', e =>{
    //проверяем, был ли этот клик на нашему полю и если оно пустое...
    if(e.target.className === 'box' && e.target.innerHTML === "") {
            // с помощью target.innerHTML рисуем Х в поле на которое нажали
            e.target.innerHTML = 'X';
            // с помощью dataset.num определям номер тега <div>
            // и записываем по этому номер значение Х в массив 
            arrNull[e.target.dataset.num]= 'X'; 
            //вызываем проверку на победу
            check();
    
            let tempArr = [];                   //здесь мы создаем массив,
            for (i = 0; i < 9; i++){            //в котором будут лежать 
                if (arrNull[i] === 'null') {    //индексы клеток, которые
                    tempArr.push(i);            //заполнены Х или 0
                }
            }
            //определяем рандомное число из этого массива
            let randIndexTempArr = Math.floor(Math.random() * tempArr.length);
            var randNull = tempArr[randIndexTempArr];
            //в переменную boxO мы кладем тег <div>, который определили с помощью рандома
            const boxO = document.querySelector('[data-num="'+randNull+'"]');
            //рисуем нолик
            boxO.innerHTML = '0';
            //запоминаем, куда нарисовали нолик
            arrNull[randNull] = '0';
            check();
    }
})
//после победы появится модальное окно,
//при нажатии на которе взовется метод closeModal
//который в свою 
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);