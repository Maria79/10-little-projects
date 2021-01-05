// const sounds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// sounds.forEach((sound) => {
// 	const btn = document.createElement('button');
// 	btn.classList.add('btn');

// 	btn.innerText = sound;

// 	btn.addEventListener('click', () => {
// 		stopSongs();

// 		document.getElementById(sound).play();
// 	});

// 	const tecla = document.querySelector('.teclas');
// 	tecla.appendChild(btn);
// 	// document.body.appendChild(btn);
// });

// function stopSongs() {
// 	sounds.forEach((sound) => {
// 		const song = document.getElementById(sound);

// 		song.pause();
// 		song.currentTime = 0;
// 	});
// }



const   keys = document.querySelectorAll(".key"),
        note = document.querySelector(".nowplaying"),
        hints = document.querySelectorAll(".hints");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");

    key.classList.add("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

function hintsOn(e, index) {
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(ke => ke.addEventListener('click', playNote));


window.addEventListener("keydown", playNote);