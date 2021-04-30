{
    const openSongBox = (song) => {
        song.classList.add("songBox--open");
    }

    const closeSongBox = (song) => {
        song.classList.remove("songBox--open");
    }

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
        const songBoxCloseButton = document.querySelector(".songBox__closeButton");
        const songBox = document.querySelector(".songBox");

        songBoxButton1.addEventListener("click", () => {
            openSongBox(songBox);
            changeSongTitleAndSource("In The C of Calmness", "https://www.youtube.com/embed/LrAqEPDiUzA");
        });

        songBoxButton2.addEventListener("click", () => {
            openSongBox(songBox);
            changeSongTitleAndSource("Hip-Hop", "https://www.youtube.com/embed/sQL3kvhqtLM");
        });

        songBoxButton3.addEventListener("click", () => {
            openSongBox(songBox);
            changeSongTitleAndSource("Sweet Reggae", "https://www.youtube.com/embed/inE9P9wqzzI");
        });

        songBoxCloseButton.addEventListener("click", () => {
            closeSongBox(songBox);
            changeSongTitleAndSource("", "images/youtube.svg");
        });
    }

    init();
}
