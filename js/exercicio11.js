"use strict";

let num_secreto;
let tentativas = 0;

num_secreto = sortearNumero();
document.querySelector("#txtchute").focus();

document.querySelector("#txtchute").addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        verificarJogada();
    }
});

function sortearNumero (){
    return Math.round(Math.random()*100);
}

function verificarJogada(){
    let div_msg = document.querySelector("#msg");
    let campo_dica = document.querySelector("#txtdica");

    tentativas++;
    let num_chute = parseInt (document.querySelector("#txtchute").value);
    if (num_chute < num_secreto){
        campo_dica.value = "O número sorteado é maior";
    }else if (num_chute > num_secreto){
        campo_dica.value = "O número sorteado é menor";
    }else{
        div_msg.innerHTML = "<h1> Parabéns. Você acertou em " + tentativas + " tentativas </h1>" + 
                            "<h3> Pressione f5 para jogar novamente</h3>"
    }
    document.querySelector("#txtchute").value = "";
    document.querySelector("#txtchute").focus();
}