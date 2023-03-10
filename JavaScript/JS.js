
const menuCheckbox = document.querySelector('#toggle-menu');
const NavBar = document.getElementById('menu2');

menuCheckbox.addEventListener('click', () => {
    if (menuCheckbox.checked) {
        NavBar.classList.add('show');
        NavBar.classList.remove('unshow');
    } else {
        NavBar.classList.remove('show');
        NavBar.classList.add('unshow');
    }
});