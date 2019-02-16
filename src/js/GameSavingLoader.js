import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  static load() {
    return readGameSaving()
      .then(data => new GameSavingData(data))
      .catch(err => console.error(`reading error: ${err}`))
      .then(data => data.json())
      .catch(err => console.error(`json converting error: ${err}`));
  }
}

