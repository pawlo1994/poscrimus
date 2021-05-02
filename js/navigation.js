(() => {
    const mobileButton = document.querySelector(".js-navigation__mobileButton");
    const menuElement = document.querySelector(".js-navigation__menu");
    const navigationMobileButtonImage = document.querySelector(".js-navigation__mobileButtonImage");

    const toggleClass = () => {
        menuElement.classList.toggle("navigation__menu--open");
        mobileButton.classList.toggle("navigation__mobileButton--open");
        navigationMobileButtonImage.src = (menuElement.classList.contains("navigation__menu--open")) ? "images/cross.svg" : "images/navigation.svg";
    };

    const onScrollHideMenu = () => {
        mobileButton.classList.remove("navigation__mobileButton--open");
        menuElement.classList.remove("navigation__menu--open");
        navigationMobileButtonImage.src = (menuElement.classList.contains("navigation__menu--open")) ? "images/cross.svg" : "images/navigation.svg";
    };

    mobileButton.addEventListener("click", toggleClass);
    document.addEventListener("scroll", onScrollHideMenu);
})();