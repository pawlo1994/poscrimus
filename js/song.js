{
    let songTitleList = [];
    let songSourceList = [];
    const songBoxButton1 = document.querySelector(".js-song__button-1");
    const songBoxButton2 = document.querySelector(".js-song__button-2");
    const songBoxButton3 = document.querySelector(".js-song__button-3");
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyCIWmk_Uls2NRjjN5yq1aATTfQqHQ-_y60&playlistId=PLnvldM9Pgp03Hl79pxwNvdTEvS7sQXn1G&part=snippet")
        .then(response => response.json())
        .then((response) => {
            for (let i = 0; i <= (response.items.length - 1); i++) {
                const videoInfo = Object.entries(response.items[i].snippet);
                songTitleList = [...songTitleList, videoInfo[2][1]];
                songSourceList = [...songSourceList, videoInfo[8][1].videoId];
                songBoxButton1.innerText = songTitleList[0];
                songBoxButton2.innerText = songTitleList[1];
                songBoxButton3.innerText = songTitleList[2];
            }
        });

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

    const init = (songBoxButton1, songBoxButton2, songBoxButton3) => {
        const songBoxButtonClose = document.querySelector(".js-songBox__button--close");
        const songBoxButtonResize = document.querySelector(".js-songBox__button--resize");
        const songBox = document.querySelector(".js-songBox");
        const songBoxVideo = document.querySelector(".js-songBox__video");

        songBoxButton1.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource(songTitleList[0], `https://www.youtube.com/embed/${songSourceList[0]}`, songBoxVideo);
        });

        songBoxButton2.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource(songTitleList[1], `https://www.youtube.com/embed/${songSourceList[1]}`, songBoxVideo);
        });

        songBoxButton3.addEventListener("click", () => {
            openSongBox(songBox, songBoxButtonResize, songBoxVideo);
            changeSongTitleAndSource(songTitleList[2], `https://www.youtube.com/embed/${songSourceList[2]}`, songBoxVideo);
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

    init(songBoxButton1, songBoxButton2, songBoxButton3);
}
