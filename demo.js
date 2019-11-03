window.onload = function() {
    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    function reset(){
        for(let j=0;j<items.length;j++){
            items[j].innerHTML = j+1;
            items[j].style.color = 'aqua';
        }
    }
    for(let i = 0; i < items.length; i++){
    //onclick为鼠标点击事件
        items[i].onclick = function () {
            reset();
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
        }
    }
};