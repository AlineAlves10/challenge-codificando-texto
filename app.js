var textoInput = document.querySelector("#input-texto");
        
function criptografarTexto() {
    var textoNormal = textoInput.value;

    var fraseCriptografada = textoNormal.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly class="texto-output" id="texto-output">' + fraseCriptografada + '</textarea>' + '<button class="btn-copiar buttom" id="copiar" onclick="copyToClipboard()">Copiar</button>';
}

function descriptografarTexto() {
    var textoNormal = textoInput.value;

    var fraseDescriptografada = textoNormal.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('output').innerHTML = '<textarea readonly class="texto-output" id="texto-output">' + fraseDescriptografada + '</textarea>' + '<button class="btn-copiar buttom" id="copiar" onclick="copyToClipboard()">Copiar</button>';
}

function copyToClipboard() {
    var textoCopiado = document.querySelector("#texto-output").value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert('Texto copiado para a área de transferência');
    })
}

//INVERTENDO O TEXTO-----------------------------------------------------------------

//function inverterTexto(){
  //  return textoNormal.split("").reverse().join("");
//}

//let textoInvertido= inverterTexto(fraseNormal);
//console.log(textoInvertido);