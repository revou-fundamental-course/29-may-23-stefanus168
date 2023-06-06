var slide = 1;
showslide();

function showslide(n){
    var i;
    var x = document.getElementsByClassName["imgslideshow"];
    if(n> x.length) slide =1;

    for(let i = 0; i<x.length; i++){
        x[i].style.display = 'none';
        }
    x[slide -1].style.display= "block";
}

function plus(n){
    showslide(slide == n);
}