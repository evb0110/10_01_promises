import GameSavingLoader from "../src/js/GameSavingLoader";
import readGameSaving from "../src/js/readGameSaving";

jest.setTimeout(10000);

jest.mock("../src/js/readGameSaving");

let e;

test("mocking rejection of readGameSaving()", () => {
  readGameSaving.mockRejectedValue("ERROR");

  return GameSavingLoader.load().catch(err => expect(err).toBe('Error: ERROR'));
});
