const songs = [
  { title: "He is risen", artist: "Misselle", src: "music/Heisrisen.mp3" },
  { title: "Holy,Holy,Holy", artist: "Misselle", src: "music/Holy.mp3" },
  { title: "Jesus,the greatest", artist: "jumadiharyanto07", src: "music/Jesusthegreatest.mp3" },
  {title:"Only Jesus", artist:"jumadiharyanto07", src:"music/onlyJesus.mp3" },
  {title:"Perfect Love of Jesus", artist:"jumadiharyanto07", src:"music/perfectloveofJesus.mp3"}, 
  {title:"Thank You Jesus", artist:"DT_Moore", src:"music/thankyouJesus.mp3"},
  {title:"Worship Gospel Christian Church Music", artist:"lNPLUSMUSIC", src:"music/worshipgospelchristian.mp3"},
  {title:"Gospel Worship Christian Church Music", artist:"ikoliks_aj", src:"music/worshipmusic.mp3"}
]; 



let index = 0;

const audio = document.getElementById("songAudio");
const title = document.getElementById("songTitle");
const artist = document.getElementById("artist");

function songLoaded(i) {
  title.textContent = songs[i].title;
  artist.textContent = songs[i].artist;
  audio.src = songs[i].src;
}


const playButton = document.getElementById("play");

function playSong() {
    audio.play();
    playButton.textContent = "Pause";
}

function pauseSong() {
  audio.pause();
  playButton.textContent = "Play";
}

playButton.addEventListener("click",() => {
    audio.paused ? playSong() : pauseSong();
})


document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % songs.length;
  songLoaded(index);
  playSong();
})

document.getElementById("previous").addEventListener("click",() => {
    index = (index - 1 + songs.length) %songs.length;
    songLoaded(index);
    playSong();
});


function nextSong() {
    index++;
    if(index >=songs.length) {
        index = 0; 
    }
    songLoaded(index);
    audio.play();
}


audio.addEventListener("ended", () => {
    nextSong();
});



const progress = document.getElementById("progress");

audio.addEventListener("timeupdate", () => {
    if(!audio.duration) return;
    progress.value = (audio.currentTime / audio.duration) * 100;
})

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
})


document.getElementById("volume").addEventListener("input", (e) => {
    audio.volume = e.target.value;
})

const playlist = document.getElementById("playlist");

songs.forEach((song, i) => { 
const li = document.createElement("li");
li.textContent = `${song.title} - ${song.artist}`;
li.addEventListener("click", () => {
index = i;
songLoaded(index);
playSong();
});
playlist.appendChild(li);
});



songLoaded(index);




