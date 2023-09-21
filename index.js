const message = document.querySelector('#message');
const showMessage = document.querySelector('#showMessage');
const hideMessage = document.querySelector('#hideMessage');

showMessage.addEventListener('click', () => {
  message.style.display = 'block';
});
hideMessage.addEventListener('click', () => {
  message.style.display = 'none';
});
