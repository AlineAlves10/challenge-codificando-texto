var textoInput = document.querySelector("#input-texto");
var textoutput = document.querySelector("#output");
 
//CRIPTOGRAFANDO O TEXTO ------------------------------------------------------


function criptografarTexto(){
    var textoNormal = textoInput.value;

    var fraseCriptografada = textoNormal.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" class="texto-output">' + fraseCriptografada + '</textarea>' + '<button class="btn-copiar buttom" id="copiar" onclick="copiar()">Copiar</button>'
}

//DESCRIPTOGRAFANDO O TEXTOOO--------------------------------------------------

function descriptografarTexto(){
    var textoNormal = textoInput.value;

    var fraseDescriptografada = textoNormal.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" class="texto-output">' + fraseDescriptografada + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 

//INVERTENDO O TEXTO-----------------------------------------------------------------

//function inverterTexto(){
  //  return textoNormal.split("").reverse().join("");
//}

//let textoInvertido= inverterTexto(fraseNormal);
//console.log(textoInvertido);