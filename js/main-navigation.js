(() => {
    const button = document.querySelector(".js-navigation-menu__mobile-button");
    const menu = document.querySelector(".js-navigation-menu")

    const toggleClass = () => {
        menu.classList.toggle("navigation-menu--open");
        button.classList.toggle("navigation-menu__mobile-button--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
    document.addEventListener("scroll", () => {
        if (menu.classList.contains("navigation-menu--open") && (button.classList.contains("navigation-menu__mobile-button--open"))) {
            button.classList.remove("navigation-menu__mobile-button--open");
            menu.classList.remove("navigation-menu--open");
        };
    });
})();