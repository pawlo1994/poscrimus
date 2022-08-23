{
    let songsData = [];
    let songListButtons;

    const addSongListButtonsEvent = (songBox, songBoxButtonResize, songBoxVideo) => {
        songListButtons.forEach((songListButton, id) => {
            songListButton.addEventListener("click", () => {
                openSongBox(songBox, songBoxButtonResize, songBoxVideo);
                changeSongTitleAndSource(songsData[id].songTitle, `https://www.youtube.com/embed/${songsData[id].songSource}`, songBoxVideo);
            });
        });
    };

    const getSongsData = (songList, songBox, songBoxButtonResize, songBoxVideo) => {
        songList.innerHTML = `
            <span class="songList__idleText">
                Sekundka, pobieram listę utworów...
            </span>`;
        setTimeout(() => {
            songList.innerHTML = '';
            fetch("https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyCIWmk_Uls2NRjjN5yq1aATTfQqHQ-_y60&playlistId=PLnvldM9Pgp03Hl79pxwNvdTEvS7sQXn1G&part=snippet")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then((response) => {
                    for (let i = 0; i <= (response.items.length - 1); i++) {
                        const videoInfo = Object.entries(response.items[i].snippet);
                        songsData = [
                            ...songsData,
                            {
                                songTitle: videoInfo[2][1],
                                songSource: videoInfo[8][1].videoId
                            }
                        ];
                        songList.innerHTML += `
                        <button class="songList__button js-songList__button">
                            ${songsData[i].songTitle}
                        </button>
                    `;
                    }
                    songListButtons = document.querySelectorAll(".js-songList__button");
                    addSongListButtonsEvent(songBox, songBoxButtonResize, songBoxVideo);
                })
                .catch(error => {
                    songList.innerHTML = `
                        <span class="songList__idleText">
                            Nie udało się pobrać danych, sprawdź połączenie z internetem i spróbuj ponownie później...
                        </span>
                    `
                    console.error("Wystąpił błąd...", error);
                })
        }, 2000);
    };

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
        const songBoxButtonClose = document.querySelector(".js-songBox__button--close");
        const songBoxButtonResize = document.querySelector(".js-songBox__button--resize");
        const songBox = document.querySelector(".js-songBox");
        const songBoxVideo = document.querySelector(".js-songBox__video");
        const songList = document.querySelector(".js-songList");

        getSongsData(songList, songBox, songBoxButtonResize, songBoxVideo);

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
