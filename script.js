let btn = document.querySelector('button');
let colorBox = document.querySelector('.colorBox');
let p = document.querySelector('p');



btn.addEventListener('click',function(){
    let randomColor = "#" + Math.floor(Math.random()* 11446634)
    .toString(16)
    .padStart(6, "0");

    p.textContent = randomColor;

    colorBox.style.background = randomColor;
    
});