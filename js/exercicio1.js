"use strict";

document.getElementById("botao").addEventListener("click",function(){
    calcular();
});

function calcular(){
    const elemento_valor = document.getElementById("txtvalor");
    const elemento_parcelas = document.getElementById("txtparcelas");
    const elemento_result = document.getElementById("txtresult");
    let valor_compra = parseFloat( elemento_valor.value );
    let qtdparcelas = parseInt( elemento_parcelas.value );

    let msg = "";
    let valorfinal = 0;

    if (qtdparcelas == 1){
        valorfinal = valor_compra;
        msg = `1x ${valorfinal}`;
    } else if (qtdparcelas == 2){
        valorfinal = (valor_compra + (valor_compra * 0.03));
        msg = `2x ${valorfinal / 2}`;
    } else {
        valorfinal = (valor_compra + (valor_compra * 0.07));
        msg = `4x ${valorfinal / 4}`
    }
    
    elemento_result.value = msg;
}