const boton = document.getElementById('comment-section-button');
const seccionComentarios = document.getElementById('comment-section');


function hideSection(){
    if (seccionComentarios.style.visibility=='hidden'){
        seccionComentarios.style.visibility='visible';
    }
    else
        seccionComentarios.style.visibility='hidden';
}
boton.addEventListener('click', hideSection);