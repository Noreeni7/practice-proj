document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.documentElement.classList.toggle('menu-open');
});