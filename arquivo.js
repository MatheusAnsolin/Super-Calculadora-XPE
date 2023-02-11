var a = document.getElementById('numberA')
var b = document.getElementById('numberB')

function definirValores(){

}
function addEventos(){
    document.getElementById("btn1").addEventListener("click",definirValores);
}
window.addEventListener("load", addEventos);
