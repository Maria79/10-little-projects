let btn = document.querySelector('.btn');
let bodyColor = document.body.style;
let color = document.querySelector('.color');


btn.addEventListener('click', () => {

    bodyColor.backgroundColor = randomBg();
    btn.style.color = randomBg();
    bodyColor.backgroundColor = `#` + randomColor;
    btn.style.color = `#` + randomColor;
    console.log(`#` + randomColor);
    color.textContent = `Color: #` + randomColor;

});

function randomBg() {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (`#`+randomColor);
}
