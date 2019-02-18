import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  static load() {
    return readGameSaving()
      .catch((err) => {
        throw new Error(err);
      })
      .then(data => new GameSavingData(data))
      .then(data => data.json());
  }
}
