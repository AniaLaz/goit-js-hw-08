import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
//    console.log(data.seconds);
const time =  data.seconds;
localStorage.setItem("videoplayer-current-time",JSON.stringify(time));
});

const time = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(time);
player.setCurrentTime(time)