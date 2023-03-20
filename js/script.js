const boton = document.getElementById('comment-section-button');
const seccionComentarios = document.getElementById('comment-section');
const envia = document.getElementById('comment-main');
const botonEnvia = document.getElementById('send-comment-button');
const inputName = document.getElementById('Name');
const inputmail = document.getElementById('email');
const comentario = document.getElementById('comment-input');


const censoredWords = ['patata', 'patatas', 'avion', 'aviones', 'piano', 'censura', 'idiota', 'idiotas', 'prueba', 'pruebas'];



function hideSection(){
    if (seccionComentarios.style.visibility=='visible'){
        seccionComentarios.style.visibility='hidden';
    }
    else
        seccionComentarios.style.visibility='visible';
}

function checkMail(){
    var valid = 0;
    const re = /\S+@\S+\.\S+/g;

    if (re.test(inputmail.textContent)){
        valid = 1;
    }

    console.log(valid);

    return valid;
}

function censoreContent(){
    let texto = comentario.value;
    censoredWords.forEach(element => {
        const regex = new RegExp(element);
        const asteriscos = "*".repeat(element.length);
        comentario.value = texto.replace(regex, asteriscos);
    });
}

function checkCorrect(){
    let textName = inputName.textContent;
    let textMail = inputmail.textContent;
    let textComment = comentario.textContent;

    textName = textName.replace(/\s/g, '');
    textMail = textMail.replace(/\s/g, '');
    textComment = textComment.replace(/\s/g, '');


    if (textName.length == 0 || textMail.length == 0 || textComment.length == 0){
        alert('Los campos de texto, mail y nombre deben ser rellenados');
    }
    else if (textMail.length > 0){
        let valid = 0;
        valid = checkMail();

        if (valid == 0){
            alert('El correo electrónico introducido no es válido');
        } else{
            //Creamos, siguiendo la estructura del html que tenemos, los distintos elementos que componen un comentario y le asignamos parámetros
            var newComment = document.createElement('section');
            newComment.className = 'comment';
    
            var newName = document.createElement('h2');
            newName.className = 'nombre';
            newName.textContent = inputName.textContent;
    
            var newDate = document.createElement('h5');
            newDate.className = 'fecha';

            let myDate = '';
            let fullDate = new Date();
            var mon = fullDate.getMonth();
            var day = fullDate.getDate();
            var hour = fullDate.getHours();
            var min = fullDate.getMinutes();
            var seconds = fullDate.getSeconds();
            let monthNumber = '';
            let dayNumber = '';
            let secondsComplete = '';
            let hourComplete = '';
            let minComplete = '';

            
            mon += 1;
            if (mon < 10){
                monthNumber = '0' + mon;
            }
            else{
                monthNumber = fullDate.getMonth();
            }

            if (day < 10){
                dayNumber = '0' + day;
            }
            else{
                dayNumber = fullDate.getDate();
            }

            if (hour < 10){
                hourComplete = '0' + hour;
            }
            else{
                hourComplete = fullDate.getHours();
            }
            
            if (min < 10){
                minComplete = '0' + min;
            }
            else{
                minComplete = fullDate.getMinutes();
            }
            
            if (seconds < 10){
                secondsComplete = '0' + seconds;
            }
            else{
                secondsComplete = fullDate.getSeconds();
            }


            
            myDate += hourComplete + ':' + minComplete+ ':' + secondsComplete + ' ' + dayNumber + '/' +  monthNumber + '/' + fullDate.getFullYear();

            newDate.textContent = myDate;
    
            var newSpan = document.createElement('span');
            newSpan.className = 'comment-text';
            newSpan.textContent = comentario.textContent;
    
            /*
            Después vamos asignándole los hijos de la forma
    
    
            <div>
                <div>
                    div1
                </div>
                <div>
                    div2
                </div>
            </div>
            
            div1 sería el primer hijo y div2 el segundo hijo 
            */
    
            newComment.appendChild(newName);
            newComment.appendChild(newDate);
            newComment.appendChild(newSpan);
    
            document.getElementById('comments').appendChild(newComment);
    
        }
    }
   
}

function changeValueComment(e){

    comentario.innerHTML = e.target.value;
}

function changeValueMail(e){

    inputmail.textContent = e.target.value;
}

function changeValueName(e){
    inputName.textContent = e.target.value;
}

boton.addEventListener('click', hideSection);
comentario.addEventListener('input', censoreContent);
botonEnvia.addEventListener('click', checkCorrect);
inputName.addEventListener('input', changeValueName);
inputmail.addEventListener('input', changeValueMail);
comentario.addEventListener('input', changeValueComment);



