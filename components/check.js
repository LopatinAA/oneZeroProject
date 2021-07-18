

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(i = 0; i < arr.length; i++){
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'Крестики';
            winCross++;
            prepartResult(result,winCross,winZero);
        } else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
        ) {
            result = 'Нолики';
            winZero++;
            prepartResult(result,winCross,winZero);
        }
    }
}

//export default check;