{
    const openSongBox = (song, resizeButton, songVideo) => {
        song.classList.add("songBox--open");
        song.classList.remove("songBox--small");
        resizeButton.innerHTML = "&#8722;";
        songVideo.classList.remove("songBox__video--hidden");
    };

    const closeSongBox = (song, songVideo) => {
        song.classList.remove("songBox--open");
        song.classList.remove("songBox--small");
        songVideo.classList.add("songBox__video--hidden");
    };

    const resizeSongBox = (song) => {
        song.classList.toggle("songBox--small");
    };

    const changeResizeButtonText = (song, resizeButton) => {
        resizeButton.innerHTML = (song.classList.contains("songBox--small")) ? "&#9634;" : "&#8722;";
    };

    const changeSongTitleAndSource = (songTitle, songSource, songVideo) => {
        const songBoxDescription = document.querySelector(".js-songBox__description");
        if ((songBoxDescription.innerText !== songTitle) || (songVideo.src !== songSource)) {
            songBoxDescription.innerText = songTitle;
            songVideo.src = songSource;
        };
    };

    const init = () => {
        const songBoxButton1 = document.querySelector(".js-song__button-1");
        const songBoxButton2 = document.querySelector(".js-song__button-2");
        const songBoxButton3 = document.querySelector(".js-song__button-3");
        const songBoxButtonClose = document.querySelector(".js-songBox__button--close");
        const songBoxButtonResize = document.querySelector(".js-songBox__button--resize");
        const songBox = document.querySelector(".js-songBox");
        const songBoxVideo = document.querySelector(".js-songBox__video");

        songBoxButton1.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource("In The C of Calmness", "https://www.youtube.com/embed/LrAqEPDiUzA", songBoxVideo);
        });

        songBoxButton2.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource("Hip-Hop", "https://www.youtube.com/embed/sQL3kvhqtLM", songBoxVideo);
        });

        songBoxButton3.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource("Sweet Reggae", "https://www.youtube.com/embed/inE9P9wqzzI", songBoxVideo);
        });

        songBoxButtonClose.addEventListener("click", () => {
            closeSongBox(songBox, songBoxVideo);
            changeSongTitleAndSource("", "images/youtube.svg", songBoxVideo);
            songBoxButtonResize.innerHTML = "&#8722;";
        });

        songBoxButtonResize.addEventListener("click", () => {
            resizeSongBox(songBox);
            changeResizeButtonText(songBox, songBoxButtonResize);
        });
    };

    init();
}
