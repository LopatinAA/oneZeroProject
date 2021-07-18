

const prepartResult = (winner,scoreCross,scoreZero) => {
    contentWrapper.innerHTML = `Победили ${winner} ! <br> Крестики ${scoreCross} - ${scoreZero} Нолики`;
    modalResult.style.display = 'block'
    arrNull = ['null','null','null','null','null','null','null','null','null',];
}