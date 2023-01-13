function nav() {
    const hamburgerDOM = document.getElementsByClassName('hamburger-menu');
    const menuDOM = document.getElementById('dropdown');
    hamburgerDOM[0].addEventListener('click', () => {
        menuDOM.classList.toggle('dropdown-visible');
    });
}

export { nav };
