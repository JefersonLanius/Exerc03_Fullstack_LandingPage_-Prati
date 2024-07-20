document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('form_contato');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato! O quanto antes estaremos retornando sua mensagem.');
        contactForm.reset();
    });
});


function redirectToHome() {
    console.log("Deu certo")
    window.location.href = 'index.html'; 
}
function redirectToForm() {
   window.location.href = 'contato.html';
}