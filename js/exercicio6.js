"use strict";

document.getElementById("botao").addEventListener("click", function(){
    calcular();
})

function calcular(){
    let valor = Number( document.getElementById("txtvalor").value );
    let forma_pag = Number( document.getElementById("txtpagamento").value );
    let valor_total = 0; 

    switch(forma_pag){
        case 1: valor_total = valor - (valor * 0.10); break;
        case 2: valor_total = valor * 0.95; break;
        case 3: valor_total = valor * 1.10; break;
    }

    exibirDados(valor, valor_total);
}

function exibirDados(valor, valor_total){
    document.getElementById("txtreal").value = valor;
    document.getElementById("txtpagar").value = valor_total;
}