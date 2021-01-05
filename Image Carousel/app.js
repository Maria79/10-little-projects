indxV = 0; // set count to 0
function slideShow(){ //create the slideShow function

  setTimeout(slideShow, 3500); //Interval between images 3.5seconds

  var i; //
  const img = document.querySelectorAll("img");

  for(i = 0; i < img.length; i++){  // loop throw each image
    img[i].style.display = "none";  // display "none"
  }

  indxV++; //count increase by 1

  if(indxV > img.length){  //once get to the last image  reset to the first
    indxV = 1;
  }

  img[indxV -1].style.display = "block"; //loop thor image to display "block"
}
slideShow(); //run function
