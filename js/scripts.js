const commentSection = document.getElementById('comment-section');
const commentButton = document.getElementById('comment-section-button');

function myFunction(){
    commentSection.textContent += 'hola';
}

commentButton.addEventListener('click', myFunction);
