const btn = document.querySelector('.btn');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const nav = document.querySelector('nav');

btn.addEventListener('click', function(e) {

    (nav.style.display == 'flex') ?
        ((nav.style.display = 'none')&&(btnOpen.style.display = 'inline')&&(btnClose.style.display = 'none'))
        :
        ((nav.style.display = 'flex')&&(btnOpen.style.display = 'none')&&(btnClose.style.display = 'inline'));

    // (btnOpen.style.display == 'inline') ? (btnOpen.style.display = 'none') : (btnOpen.style.display = 'inline');

    e.preventDefault();

});

// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     (nav.style.display == 'flex') ?
//         (nav.style.display = 'none')
//         :
//         (nav.style.display = 'flex') ;



//     console.log(nav.style.display);
// });