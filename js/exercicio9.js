"use strict";

document.getElementById("botao").addEventListener("click", function(){
    let num = Number (document.getElementById("txtnum").value );
    let fat = 1;
    for (let i = 1; i <= num; i++){
        fat = fat * i;
    }
    document.getElementById("txtfat").value = fat;
});