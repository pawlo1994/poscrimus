const songBoxButton1 = document.querySelector(".js-song__button-1");
const songBoxButton2 = document.querySelector(".js-song__button-2");
const songBoxButton3 = document.querySelector(".js-song__button-3");
const closeButton = document.querySelector(".close__button");
const resizeButton = document.querySelector(".resize__button");
const songBox = document.querySelector(".song-box");
const songBoxHeaderDescription = document.querySelector(".song-box__header__description");
const songBoxVideo = document.querySelector(".song-box__video");

songBoxButton1.addEventListener("click", () => {
    if (songBox.classList.contains("song-box-mini")) {
        songBox.classList.add("song-box-mini--open");
        resizeButton.innerHTML = "&uarr;"
    }
    else {
        songBox.classList.add("song-box--open");
        resizeButton.innerHTML = "&darr;"
    }
    songBoxHeaderDescription.textContent = "PoScriMus - In the C of Calmness";
    songBoxVideo.src = "https://www.youtube.com/embed/LrAqEPDiUzA";
});

songBoxButton2.addEventListener("click", () => {
    if (songBox.classList.contains("song-box-mini")) {
        songBox.classList.add("song-box-mini--open");
        resizeButton.innerHTML = "&uarr;"
    }
    else {
        songBox.classList.add("song-box--open");
        resizeButton.innerHTML = "&darr;"
    }
    songBoxHeaderDescription.textContent = "PoScriMus - Hip-Hop";
    songBoxVideo.src = "https://www.youtube.com/embed/sQL3kvhqtLM";
});

songBoxButton3.addEventListener("click", () => {
    if (songBox.classList.contains("song-box-mini")) {
        songBox.classList.add("song-box-mini--open");
        resizeButton.innerHTML = "&uarr;"
    }
    else {
        songBox.classList.add("song-box--open");
        resizeButton.innerHTML = "&darr;"
    }
    songBoxHeaderDescription.textContent = "PoScriMus - Sweet Reggae";
    songBoxVideo.src = "https://www.youtube.com/embed/inE9P9wqzzI";
});

closeButton.addEventListener("click", () => {
    if (songBox.classList.contains("song-box")) {
        songBox.classList.remove("song-box--open");
    }
    else {
        songBox.classList.remove("song-box-mini--open");
    }
    songBoxVideo.src = "images/youtube.svg";
});
resizeButton.addEventListener("click", () => {
    if (songBox.classList.contains("song-box")) {
        songBox.classList.remove("song-box");
        songBox.classList.remove("song-box--open");
        songBox.classList.add("song-box-mini");
        songBox.classList.add("song-box-mini--open");
        resizeButton.innerHTML = "&uarr;";
    } else {
        songBox.classList.remove("song-box-mini");
        songBox.classList.remove("song-box-mini--open");
        songBox.classList.add("song-box");
        songBox.classList.add("song-box--open");
        resizeButton.innerHTML = "&darr;";
    }
});
