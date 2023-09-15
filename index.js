
const closeButton = document.getElementById('close')

const menuButton = document.getElementById('burger')


const mobileNavWrapper = document.getElementById('burgerMenu')


menuButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'flex';
})


closeButton.addEventListener('click', () => {
    mobileNavWrapper.style.display = 'none';
})