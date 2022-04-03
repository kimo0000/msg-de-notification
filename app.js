const button = document.querySelector('button');
const notification = document.querySelector('.notification');

const showNotification = (message) => {

    notification.textContent = message;

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

button.addEventListener('click', () => {
    showNotification('hello kimo');
})