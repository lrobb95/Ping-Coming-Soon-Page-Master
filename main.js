const email = document.getElementById('emailInput');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', (e) => {
    let message = [];

    if (email.value === '' || email.value == null) {
        message.push('Email is required');
    }

    else if (!email.value.includes('@') || !email.value.includes('.')) {
        message.push('Please provide a valid email address');
    } 

    if (message.length > 0) {
        e.preventDefault();
        email.style.border = '1px solid rgba(255, 0, 0, .35)';
        errorMessage.style.textAlign = 'left';
        errorMessage.style.marginLeft = 'clamp(1rem, 2.5vw, 3rem)';
        errorMessage.style.marginTop = 'clamp(.25rem, 2.5vh, .5rem)';
        errorMessage.style.fontSize = 'clamp(.65rem, 2vw, 1.25rem)';
        errorMessage.style.color = 'rgba(255, 0, 0, .35)';
        errorMessage.style.fontStyle = 'italic';
        errorMessage.innerText = message.join(', ');
    }
});