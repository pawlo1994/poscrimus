(() => {
    const button_1 = document.querySelector(".js-song__button-1");
    const button_2 = document.querySelector(".js-song__button-2");
    const button_3 = document.querySelector(".js-song__button-3");
    const song_1 = document.querySelector(".js-song-1");
    const song_2 = document.querySelector(".js-song-2");
    const song_3 = document.querySelector(".js-song-3");

    const toggleClass_1 = () => {
        song_1.classList.toggle("song-1--open");
    };

    const toggleClass_2 = () => {
        song_2.classList.toggle("song-2--open");
    };

    const toggleClass_3 = () => {
        song_3.classList.toggle("song-3--open");
    };

    button_1.addEventListener("click", toggleClass_1);
    button_2.addEventListener("click", toggleClass_2);
    button_3.addEventListener("click", toggleClass_3);
    song_1.addEventListener("click", toggleClass_1);
    song_2.addEventListener("click", toggleClass_2);
    song_3.addEventListener("click", toggleClass_3);

})();