{
    const openSongBox = (song, resizeButton) => {
        song.classList.add("songBox--open");
        song.classList.remove("songBox--small");
        resizeButton.innerHTML = "&#8722;";
    };

    const closeSongBox = (song) => {
        song.classList.remove("songBox--open");
        song.classList.remove("songBox--small");
    };

    const resizeSongBox = (song) => {
        song.classList.toggle("songBox--small");
    };

    const changeResizeButtonText = (song, resizeButton) => {
        resizeButton.innerHTML = (song.classList.contains("songBox--small")) ? "&#9634;" : "&#8722;";
    };

    const changeSongTitleAndSource = (songTitle, songSource) => {
        const songBoxVideo = document.querySelector(".songBox__video");
        const songBoxDescription = document.querySelector(".songBox__description");
        if ((songBoxDescription.innerText !== songTitle) || (songBoxVideo.src !== songSource)) {
            songBoxDescription.innerText = songTitle;
            songBoxVideo.src = songSource;
        };
    };

    const init = () => {
        const songBoxButton1 = document.querySelector(".js-song__button-1");
        const songBoxButton2 = document.querySelector(".js-song__button-2");
        const songBoxButton3 = document.querySelector(".js-song__button-3");
        const songBoxButtonClose = document.querySelector(".songBox__button--close");
        const songBoxButtonResize = document.querySelector(".songBox__button--resize");
        const songBox = document.querySelector(".songBox");

        songBoxButton1.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize);
            changeSongTitleAndSource("In The C of Calmness", "https://www.youtube.com/embed/LrAqEPDiUzA");
        });

        songBoxButton2.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize);
            changeSongTitleAndSource("Hip-Hop", "https://www.youtube.com/embed/sQL3kvhqtLM");
        });

        songBoxButton3.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize);
            changeSongTitleAndSource("Sweet Reggae", "https://www.youtube.com/embed/inE9P9wqzzI");
        });

        songBoxButtonClose.addEventListener("click", () => {
            closeSongBox(songBox);
            changeSongTitleAndSource("", "images/youtube.svg");
            songBoxButtonResize.innerHTML = "&#8722;";
        });

        songBoxButtonResize.addEventListener("click", () => {
            resizeSongBox(songBox);
            changeResizeButtonText(songBox, songBoxButtonResize);
        });
    };

    init();
}
