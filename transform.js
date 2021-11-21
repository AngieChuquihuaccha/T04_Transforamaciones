
/*function rotateElem() {
    document.querySelector(".imagen-about-us").style.transform = "rotate(90deg)";
}*/

/*var target = document.querySelector('.imagen-about-us');
var player = target.animate([
  {transform: 'translate(0)'},
  {transform: 'translate(200px, 100px)'}
], 500);
player.addEventListener('finish', function() {
  target.style.transform = 'translate(100px, 100px)';
});*

$s(document).ready(function () {
    $("#turn").live('click', function (event) {
        $(this).funcionParaRotarla();
    });
});*/
const img = document.getElementById("img");
const btnLeft = document.getElementById("btnLeft");
const btnRigth = document.getElementById("btnRight");

let rotateL = 0;
let rotateR = 0;
btnLeft.addEventListener("click",()=>{
    rotateL = rotateL + -90;
    img.style.transsform = "rotate(${rotateL}deg)";
});

btnRigth.addEventListener("click",()=>{
    rotateR = rotateR + 90;
    img.style.transsform = "rotate(${rotateR}deg)";
});