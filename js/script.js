const boton = document.getElementById('comment-section-button');
const seccionComentarios = document.getElementById('comment-section');
const comentario = document.getElementById('comment-input');

const censoredWords = ['patata', 'avion', 'piano', 'censura', 'idiota', 'prueba', 'lorem', 'raton', 'section', 'sangre'];

function hideSection(){
    if (seccionComentarios.style.visibility=='hidden'){
        seccionComentarios.style.visibility='visible';
    }
    else
        seccionComentarios.style.visibility='hidden';
}

function censoreContent(){
    
}

boton.addEventListener('click', hideSection);
comentario.addEventListener('input', censoreContent);