const songBoxButton1 = document.querySelector(".js-song__button-1");
const songBoxButton2 = document.querySelector(".js-song__button-2");
const songBoxButton3 = document.querySelector(".js-song__button-3");
const closeButton = document.querySelector(".close__button");
const songBoxMini = document.querySelector(".song-box-mini");
const songBoxHeaderDescription = document.querySelector(".song-box__header__description");
const songBoxVideo = document.querySelector(".song-box__video");

songBoxButton1.addEventListener("click", () => {
    if (songBoxMini.classList.contains("song-box-mini")) {
        songBoxMini.classList.add("song-box-mini--open");
    }
    songBoxHeaderDescription.textContent = "PoScriMus - In the C of Calmness";
    songBoxVideo.src = "https://www.youtube.com/embed/LrAqEPDiUzA";
});

songBoxButton2.addEventListener("click", () => {
    if (songBoxMini.classList.contains("song-box-mini")) {
        songBoxMini.classList.add("song-box-mini--open");
    }
    songBoxHeaderDescription.textContent = "PoScriMus - Hip-Hop";
    songBoxVideo.src = "https://www.youtube.com/embed/sQL3kvhqtLM";
});

songBoxButton3.addEventListener("click", () => {
    if (songBoxMini.classList.contains("song-box-mini")) {
        songBoxMini.classList.add("song-box-mini--open");
    }
    songBoxHeaderDescription.textContent = "PoScriMus - Sweet Reggae";
    songBoxVideo.src = "https://www.youtube.com/embed/inE9P9wqzzI";
});

closeButton.addEventListener("click", () => {
    songBoxMini.classList.toggle("song-box-mini--open");
    songBoxVideo.src = "images/youtube.svg";
});
