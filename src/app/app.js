import { 
  optionsWrapper,
  gameOptions,
  startBtn,
  restartBtn,
} from './variables';
import * as MyFn from './functions';

export const run = () => {
  // Start game event handler
  startBtn.addEventListener('click', () => {
    // setup the UI
    optionsWrapper.style.display === 'none' ? MyFn.setupInterface() : undefined;
    // add game initialization for each game option
    gameOptions.forEach(choice => {
      choice.addEventListener('click', MyFn.gameInit);
    });
  });

  // Restar event handler
  restartBtn.addEventListener('click', MyFn.resetGame);

  // Bootstrap 4 Modal
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus');
  });
};
