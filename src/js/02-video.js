import Player from '@vimeo/player';
import throttle from "lodash.throttle"


// console.log(throttle);
// console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(addTime,1000));

function addTime(data) {
     const time =  data.seconds;
     localStorage.setItem("videoplayer-current-time",JSON.stringify(time));
    // console.log(time);

   
    }

    const timeReturn = JSON.parse(localStorage.getItem("videoplayer-current-time"));

    if (localStorage.getItem("videoplayer-current-time") !== null)
    {
        console.log(timeReturn);
        player.setCurrentTime(timeReturn); 
    }
  
