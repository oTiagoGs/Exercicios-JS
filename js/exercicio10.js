"use strict";

document.getElementById("botao").addEventListener("click", function(){
    let num = Number (document.getElementById("txtnum").value );
    let soma = 0;
    for (let i = 1; i <= num; i++){
        soma = soma + i;
    }
    document.getElementById("txtsoma").value = soma;
});