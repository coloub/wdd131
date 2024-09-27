function toggleMenu() {
    const menu = document.getElementById('menuItems');
    const menuIcon = document.getElementById('menuIcon');
    const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';

    menuIcon.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
}
