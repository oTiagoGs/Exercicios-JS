"use strict";

document.getElementById("botao").addEventListener("click", function(){
    calculaArea();
})

function calculaArea(){
    const valorBase = document.getElementById("txtbase");
    const valorAltura = document.getElementById("txtaltura");
    const valorArea = document.getElementById("txtarea");

    let base = parseFloat( valorBase.value);
    let altura = parseFloat (valorAltura.value);

    let resultado = base * altura;
    
    valorArea.value = resultado;
}
