console.log("hello world");
let songindex = 0;
let audioElement = new Audio('song/music.mp3');
let myplay = document.getElementById("myplay")
let range = document.getElementById("myrange");
let gif = document.getElementById("mygif");
let Songname = document.getElementsByClassName("Songname");
let SongItem = Array.from(document.getElementsByClassName("songitem"))  ;
var img = img;
let songs = [
    {Songname:"Pum hi Ho",filePath:"song/music.mp3",coverPath:"cover/1.jpg"},
    {Songname:"kya mujhe",filePath:"Song/song2.mp3",coverPath:"covers/2.jpg"},
    {Songname:"kabhi jo badal",filePath:"Song/song3.mp3",coverPath:"covers/3.jpg"},
    {Songname:"Tum ho",filePath:"Song/song4.mp3",coverPath:"covers/4.jpg"},
    {Songname:"Tune mere jana",filePath:"Song/song5.mp3",coverPath:"covers/5.jpg"},
    {Songname:"Mere bina",filePath:"Song/song5.mp3",coverPath:"covers/6.jpg"},
    {Songname:"Uska mujee tu bana",filePath:"Song/song6.mp3",coverPath:"covers/7.jpg"},
    {Songname:"Tera mera ",filePath:"Song/song7.mp3",coverPath:"covers/8.jpg"},
    {Songname:"Kaise Mujee",filePath:"Song/song8.mp3",coverPath:"covers/9.jpg"}
];



// for playing audio

myplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        myplay.classList.remove("fas fa-3x fa-play-circle");
        myplay.classList.add("fas fa-3x fa-pause-circle");
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        myplay.classList.remove("fas fa-3x fa-pause-circle");
        myplay.classList.add("fas fa-3x fa-play-circle");
        gif.style.opacity = 0;

    }
})




// for having range

audioElement.addEventListener('timeupdate',()=>{
    console.log("update time")
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    range.value = progress;
}

)


range.addEventListener("change",()=>{
    audioElement.currentTime = parseInt((range.value*audioElement.duration)/100);
})
 


SongItem.forEach((element,i)=>{
    console.log( "hyy",element,i)
    Element.getElementsByTagName('img')[0] = songs[i].coverPath;
    Element.getElementsByClassName('Songname')[0].innerText = songs[i].Songname;
})



