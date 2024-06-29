
//CODIFICANDO O TEXTO ------------------------------------------------------
let vogaiscriptografadas = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat',
}

function codificandoTexto(textoNormal){
    let frase = ''
    for (let i = 0; i < textoNormal.length; i++) {
        const letraPorLetra = textoNormal[i];

        if (vogaiscriptografadas[letraPorLetra]){
            frase += vogaiscriptografadas[letraPorLetra];
        }else{
            frase += letraPorLetra;
        }
    }

    return frase
}

let fraseNormal = 'ola me chamo aline'
let fraseCodificada = codificandoTexto(fraseNormal);
console.log(fraseCodificada);

//DESCODICANDO O TEXTOOO--------------------------------------------------

function descodificandoTexto(textoCodificado){

    textoCodificado = textoCodificado.replace(/ai/g, 'a');
    textoCodificado = textoCodificado.replace(/enter/g, 'e');
    textoCodificado = textoCodificado.replace(/imes/g, 'i');
    textoCodificado = textoCodificado.replace(/ober/g, 'o');
    textoCodificado = textoCodificado.replace(/ufat/g, 'u');

    return textoCodificado
}

let fraseCodificadaCopiar = 'Olai menter chaimober ailimesnenter';
let fraseDescodificada = descodificandoTexto(fraseCodificadaCopiar);
console.log(fraseDescodificada);


//INVERTENDO O TEXTO-----------------------------------------------------------------

function inverterTexto(textoNormal){
    return textoNormal.split("").reverse().join("");
}

let textoInvertido= inverterTexto(fraseNormal);
console.log(textoInvertido);