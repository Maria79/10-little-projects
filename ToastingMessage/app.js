const btn = document.querySelector('.btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
});

//Create notification
function createNotification ()  {
    const notif = document.createElement('div');
    notif.classList.add('msg');
    notif.innerText = 'You Clicked Me! 👏🏻';

    container.appendChild(notif);

    // remove time out
    let period = Math.floor(Math.random() * 10000);
    setTimeout(() => {
        notif.remove();
    }, period);
 }
