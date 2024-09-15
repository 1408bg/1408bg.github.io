/* in local
import Game from '../game.mjs';
import { Color, Size, Position, animate } from '../graphic/data.mjs';
import { Clickable, Prefab } from '../entity/data.mjs';
import { Text, TextButton, ProgressIndicator } from '../ui/data.mjs';
import { Lerp, Duration } from '../util/data.mjs';
*/

const root = document.querySelector('#game');
const game = new Game(root);

let stopTimeout;
let isPlaying = false;
let level = 1;

function nextFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function clickDust(self) {
  if (!isPlaying) return;
  dustPrefab.destroy(self);
  checkDustCount();
}

function start(self) {
  if (stopTimeout) {
    stopTimeout();
  }
  dustPrefab.destroyAll();
  successText.visibility(false);
  failedText.visibility(false);
  self.visibility(false);
  createDusts(level+9);
  timeBar.setValue(100);
  timeBar.setBackgroundColor(Color.fromHex("#FF8888"));
  timeBar.setProgressColor(Color.fromHex("#FF4444"));
  startTimeout();
  isPlaying = true;
}

function failed() {
  isPlaying = false;
  failedText.setText(`failed : level ${level}`);
  failedText.visibility(true);
  timeBar.setValue(100);
  timeBar.setProgressColor(Color.fromHex("#444444"));
  playButton.text().setText("reset");
  playButton.text().setColor(Color.fromRGB(255, 100, 0));
  playButton.visibility(true);
  level = 1;
}

function startTimeout() {
  function setTimebar(value) {
    timeBar.setValue(value);
  }
  stopTimeout = animate(100, 0,
    Lerp.lerp,
    new Duration({second: 10 - level*0.1}),
    setTimebar,
    failed
  );
}

function createDusts(count) {
  for (let i = 1; i <= count; i++) {
    dustPrefab.instantiate(new Position(nextFloat(80, game.width - 130), nextFloat(80, game.height - 130)));
  }
}

function checkDustCount() {
  if (dustPrefab.count() == 0) {
    stopTimeout();
    timeBar.setBackgroundColor(Color.fromHex("#88FF88"));
    timeBar.setProgressColor(Color.fromHex("#33FF33"));
    successText.visibility(true);
    successText.setText(`success : level ${level}`);
    playButton.text().setText("next");
    playButton.text().setColor(new Color(255, 100, 0));
    playButton.visibility(true);
    level++;
  }
}

const dustPrefab = new Prefab(
  new Clickable(
    new Position(0, 0),
    new Size(50, 50),
    "https://static.vecteezy.com/system/resources/thumbnails/009/692/506/small/hand-drawn-splash-watercolor-free-png.png",
    //Color.fromHex("#888888"),
    clickDust
  ), game
);

const playButton = new TextButton(
  new Text(
    new Position(80, 25),
    "play",
    undefined,
    undefined,
    Color.fromHex("#44AA44"),
  ),
  start
);

const successText = new Text(
  new Position(80, 50),
  "success : level 999",
  "32px",
  undefined,
  Color.fromRGB(0, 100, 255)
);

const failedText = new Text(
  new Position(80, 50),
  "failed : level 999",
  "32px",
  undefined,
  Color.fromRGB(255, 100, 0)
);

const timeBar = ProgressIndicator.line(
  new Position(0, 0),
  new Size(game.width, 20),
  Color.fromHex("#FF8888"),
  Color.fromHex("#FF4444"),
  0
);

game.addEntity(playButton);
game.addEntity(successText);
game.addEntity(failedText);
game.addEntity(timeBar);
successText.visibility(false);
failedText.visibility(false);
