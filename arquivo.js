let elementoResultadoSoma = document.getElementById('resultadoSoma');
let elementoResultadoRaiz = document.getElementById('resultadoRaiz');
let elementoResultadoPorcentagem = document.getElementById('resultadoPorcentagem');

elementoResultadoSoma.innerHTML = 0;
elementoResultadoRaiz.innerHTML = 0;
elementoResultadoPorcentagem.innerHTML = 0;
// funções do código
function calcularSoma(a, b){
    return (a+b);
}
const calcularRaiz = (a) => Math.sqrt(a);
const calcularPorcentagem = (a, b) => `${((a*100)/b).toFixed(2)}%`;
    
//função main
function calcular(){
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    elementoResultadoSoma.innerHTML = calcularSoma(a,b);
    elementoResultadoRaiz.innerHTML = calcularRaiz(a);
    elementoResultadoPorcentagem.innerHTML = calcularPorcentagem(a,b);

}

