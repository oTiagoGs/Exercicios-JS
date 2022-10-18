"use strict";

document.getElementById("botao").addEventListener("click", function(){
    let valor1 = Number( document.getElementById("txtvalor1").value );
    let valor2 = Number( document.getElementById("txtvalor2").value );

    if (valor1 > valor2){
        exibirResposta ("O valor 1 é maior");
    }else if (valor2 > valor1){
        exibirResposta ("O valor 2 é maior");
    }else{
        exibirResposta ("Os valores são iguais")
    }
})

let exibirResposta = (msg) =>{
    document.getElementById("resposta").value = msg;
}

