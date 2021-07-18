

const closeModal = () => {
    modalResult.style.display = 'none';
    document.querySelectorAll('div.box').forEach(function(el){
        el.innerHTML = '';
    });
    move = 0;
}