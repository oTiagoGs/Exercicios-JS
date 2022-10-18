"use strict";

document.getElementById("botao").addEventListener("click", function(){
    calcularImc();
})

function calcularImc() {
    let altura = parseFloat (document.getElementById("txtaltura").value );
    let peso = parseFloat (document.getElementById("txtpeso").value );
    let sexoM = document.getElementById("sexM").value ;
    let sexoF = document.getElementById("sexF").value ;

    let imc = peso / (altura * altura);

    if (sexoM && imc < 20.7){
        exibirDados(imc , "Abaixo do peso");
    }else 
    if(sexoM && imc > 20.7 && imc < 26.5){
        exibirDados(imc, "No peso normal");
    }else
    if(sexoM && imc > 26.4 && imc < 27.8){
        exibirDados(imc, "Marginalmente acima do peso");
    }else
    if(sexoM && imc > 27.8 && imc < 31.1){
        exibirDados(imc, "Acima do peso ideal");
    }else{
        exibirDados(imc, "Obeso");
    }

    if (sexoF && imc < 19.1){
        exibirDados(imc, "Abaixo do peso");
    }else
    if (sexoF && imc > 19.1 && imc < 25.8){
        exibirDados(imc, "No peso normal");
    }else
    if (sexoF && imc > 25.8 && imc < 27.3){
        exibirDados(imc, "Marginalmente acima do peso");
    }else
    if (sexoF && imc > 27.3 && imc < 31.1){
        exibirDados(imc, "Acima do peso ideal");
    }else{
        exibirDados(imc, "Obeso");
    }

}

let exibirDados = (imc, msg) => {
    document.getElementById("txtimc").value = imc.toFixed(2);
    document.getElementById("txtcondicao").value = msg;
}
