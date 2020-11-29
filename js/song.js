const songButton1 = document.querySelector(".js-song__button-1");
const songButton2 = document.querySelector(".js-song__button-2");
const songButton3 = document.querySelector(".js-song__button-3");
const closeButton = document.querySelector(".close__button");
const resizeButton = document.querySelector(".resize__button");
const song = document.querySelector(".song");
const songMini = document.querySelector(".song__mini");
const songHeader = document.querySelector(".song__header");
const songVideo = document.querySelector(".song__video");

songButton1.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - In the C of Calmness";
    songVideo.src = "https://www.youtube.com/embed/LrAqEPDiUzA";
});

songButton2.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - Hip-Hop";
    songVideo.src = "https://www.youtube.com/embed/sQL3kvhqtLM";
});

songButton3.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - Sweet Reggae";
    songVideo.src = "https://www.youtube.com/embed/inE9P9wqzzI";
});

closeButton.addEventListener("click", () => {
    if (song.classList.contains("song__mini")) {
        song.classList.remove("song__mini");
        song.classList.add("song");
        resizeButton.innerHTML = "&darr;"
    };
    song.style.display = "none";
    songVideo.src = "images/youtube.svg";
});
resizeButton.addEventListener("click", () => {
    if (song.classList.contains("song")) {
        song.classList.remove("song");
        song.classList.add("song__mini");
        resizeButton.innerHTML = "&uarr;";
    } else {
        song.classList.remove("song__mini");
        song.classList.add("song");
        resizeButton.innerHTML = "&darr;";
    }
});
