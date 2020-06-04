const songButton1 = document.querySelector(".js-song__button-1");
const songButton2 = document.querySelector(".js-song__button-2");
const songButton3 = document.querySelector(".js-song__button-3");
const closeButton = document.querySelector(".close__button");
const song = document.querySelector(".song");
const songHeader = document.querySelector(".song__header");
const songVideo = document.querySelector(".song__video");

songButton1.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - In the C of Calmness";
    songVideo.src = "https://www.youtube.com/embed/LrAqEPDiUzA";
    songVideo.addEventListener("load", () => {
songVideo.style.display = "block";
});
});

songButton2.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - Hip-Hop";
    songVideo.src = "https://www.youtube.com/embed/sQL3kvhqtLM";
songVideo.addEventListener("load", () => {
songVideo.style.display = "block";
});
});

songButton3.addEventListener("click", () => {
    song.style.display = "flex";
    songHeader.textContent = "PoScriMus - Sweet Reggae";
    songVideo.src = "https://www.youtube.com/embed/inE9P9wqzzI";
songVideo.addEventListener("load", () => {
songVideo.style.display = "block";
});
});

closeButton.addEventListener("click", () => {
    song.style.display = "none";
    songVideo.src = "source";
})
