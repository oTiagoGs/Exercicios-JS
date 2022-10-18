"use strict";

document.getElementById("botao").addEventListener("click", function(){
    verificarValor();
});

function verificarValor(){
    const num = Number (document.getElementById("txtvalor").value);

    if(num % 2 == 0){
        exibirSaida(num, "PAR")
    }else{
        exibirSaida(num, "IMPAR")
    }
}

let exibirSaida = (num, msg) =>{
    document.getElementById("resposta").innerHTML = `<h3>O número ${num} é ${msg}</h3>`;
}
