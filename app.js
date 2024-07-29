let encriptar = []
let desencriptar = []
let frase_encriptada = " "

function validar(frase){
    return frase.toLowerCase().replace(/[^a-z\s]/g, '');
}
function copiar() {
    let entrada_texto = document.querySelector('.texto__parrafo');
    let texto_a_copiar = entrada_texto.textContent;  

    navigator.clipboard.writeText(texto_a_copiar).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}


function encriptar_frase_numeros(){
    let frase_de_usuario = document.getElementById('frase_secreta').value;
    frase_de_usuario = validar(frase_de_usuario);
    encriptar=[];
    let palabras = frase_de_usuario.split(' ');

    let munecoImagen = document.querySelector('.muneco');
    if (munecoImagen) {
        munecoImagen.style.display = 'none'; 
    }

    let mensaje_no = document.getElementById('mensaje_no_encontrado');
    if (mensaje_no) {
        mensaje_no.style.display = 'none'; 
    }

    for(let palabra of palabras ){
        let palabra_encriptada = ' ';
        for (let i = 0; i < palabra.length  ;i++){
            let numero = palabra.charCodeAt(i);
            numero -= 30;
            let letra = String.fromCharCode(numero);
            palabra_encriptada += letra;
        }
        encriptar.push(palabra_encriptada);
    }
    frase_encriptada = encriptar.join(' ');
    asignarTextoElemento('.texto__parrafo',frase_encriptada);
    document.getElementById('boton_copiar').disabled = false;
   

}

function desencriptar_frase_numeros(){
    let frase_de_usuario = document.getElementById('frase_secreta').value;
    desencriptar = [];
    let palabras = frase_de_usuario.split(' ');
    for (let palabra of palabras){
        let palabra_desencriptada = ' ';
        for (let i = 0; i < palabra.length  ;i++){
            let numero = palabra.charCodeAt(i);
            numero += 30;
            let letra = String.fromCharCode(numero);
            palabra_desencriptada += letra;
        }
        desencriptar.push(palabra_desencriptada);
    }
    frase_desencriptada = desencriptar.join(' ');
    asignarTextoElemento('.texto__parrafo', frase_desencriptada);
    document.getElementById('boton_copiar').disabled = false;
}

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function InicioPagina (){
    asignarTextoElemento('h1','Ningún mensaje fue encontrado');
    asignarTextoElemento('.texto__parrafo','Ingrese el texto que desees encriptar o desencriptar');
    document.getElementById('boton_copiar').disabled = true;
    

}
InicioPagina();

