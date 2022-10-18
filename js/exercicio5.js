"use strict";

document.getElementById("botao").addEventListener("click", function(){
    calcularMedia();
})

let calcularMedia = () => {
    let nota1 = parseFloat ( document.getElementById("txtnota1").value );
    let nota2 = parseFloat ( document.getElementById("txtnota2").value );
    let nota3 = parseFloat ( document.getElementById("txtnota3").value );

    let media = (nota1 + nota2 + nota3) / 3;
    exibirDados(media, verificarConceito(media) );
}

let verificarConceito = (media) =>{
    if (media >= 6){
        return "Aprovado";
    }else
    if (media >= 3 && media <6){
        return "Exame";
    }else{
        return "Reprovado";
    }
}

let exibirDados = (media, conceito) =>{
    document.getElementById("txtmedia").value = media.toFixed(2);
    document.getElementById("txtconceito").value = conceito; 
}