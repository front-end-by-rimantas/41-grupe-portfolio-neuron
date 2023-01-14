function nav() {
    const hamburgerDOM = document.getElementsByClassName('hamburger-menu');
    const menuDOM = document.getElementById('dropdown');
    hamburgerDOM[0].addEventListener('click', () => {
        menuDOM.classList.toggle('dropdown-visible');
    });

    const navDOM = document.querySelector('.header-logo-nav');
    const navDOMHeight = navDOM.offsetHeight;
    const navToTop = navDOM.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > navToTop + navDOMHeight) {
            navDOM.classList.add('fixed');
        } else {
            navDOM.classList.remove('fixed');
        }
    });
}

export { nav };
