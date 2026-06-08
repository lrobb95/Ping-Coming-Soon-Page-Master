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
        errorMessage.style.marginLeft = '3rem';
        errorMessage.style.marginTop = '.5rem';
        errorMessage.style.fontSize = '1rem';
        errorMessage.style.color = 'rgba(255, 0, 0, .35)';
        errorMessage.style.fontStyle = 'italic';
        errorMessage.innerText = message.join(', ');
    }
});