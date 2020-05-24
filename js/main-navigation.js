(() => {
    const button = document.querySelector(".js-navigation-menu__mobile-button");
    const menu = document.querySelector(".js-navigation-menu")

    const toggleClass = () => {
        menu.classList.toggle("navigation-menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();