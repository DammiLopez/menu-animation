const navigation = document.querySelector('.navigation');
const menuToggler = document.querySelector('.menu-toggle');
const list = document.querySelectorAll('.list');

menuToggler.addEventListener('click', () => {
    navigation.classList.toggle('open')
    console.log('probando')
})


function activarLinks() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach(item => item.addEventListener('click', activarLinks));