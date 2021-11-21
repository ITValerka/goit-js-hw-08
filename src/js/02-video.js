import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeUpdate', function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.setCurrentTime();
