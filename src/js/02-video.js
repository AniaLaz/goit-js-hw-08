// import Player from '@vimeo/player';
// console.log(Player);
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', function(data) {
// //    console.log(data.seconds);
// const time =  data.seconds;
// localStorage.setItem("videoplayer-current-time",JSON.stringify(time));
// });

// const time = JSON.parse(localStorage.getItem("videoplayer-current-time"));
// console.log(time);
// player.setCurrentTime(time)





import Player from '@vimeo/player';
import throttle from "lodash.throttle"


console.log(throttle);
// console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(addTime,1000));

function addTime(data) {
    //    console.log(data.seconds);
    const time =  data.seconds;
    localStorage.setItem("videoplayer-current-time",JSON.stringify(time));
    console.log(time);
   
    }


    try{
        const timeReturn = JSON.parse(localStorage.getItem("videoplayer-current-time"));
        console.log(timeReturn);
        player.setCurrentTime(timeReturn)}
    catch(error){
        }
