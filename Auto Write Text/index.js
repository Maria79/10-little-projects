const text = "Maria Veronica Jakas Albisu";

let index = 0;
function writeText() {
    const fra = document.getElementById('text');
    fra.innerHTML = text.slice( 0, index);
    index ++;

    if(index > text.length - 1){
        index - 1;
    }
}

console.log(text);

setInterval(writeText, 200);