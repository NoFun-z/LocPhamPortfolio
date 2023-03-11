
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


// Collapse the menu and uncheck the hamburger checkbox
function collapseMenu() {
    NavBar.classList.remove('show');
    NavBar.classList.add('unshow');
    menuCheckbox.checked = false;
  }
  
  // Add event listeners to each menu link
  const menuLinks = document.querySelectorAll('.menu2 li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', collapseMenu);
  });