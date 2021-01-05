const btnOpen = document.querySelector('.btn-open');
const cont = document.querySelector('.container');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', function(){
    btnOpen.style.display = "none";
    cont.style.display = "block";
});

btnClose.addEventListener('click', function(){
    cont.style.display = "none";
    btnOpen.style.display = "block";
});