import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_CURRENT_TIME = "videoplayer-current-time";

if (localStorage.getItem(STORAGE_CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(STORAGE_CURRENT_TIME));
}

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(STORAGE_CURRENT_TIME, data.seconds);
}, 1000));