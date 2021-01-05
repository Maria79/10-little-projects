function createRain(){
    const heart = document.createElement('div');
    heart.classList.add('heart');


    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    heart.innerHTML = '&#9787;';

    document.body.appendChild(heart);

    setTimeout(() => {
       heart.remove()
    }, 3000);
}

setInterval( createRain, 500);