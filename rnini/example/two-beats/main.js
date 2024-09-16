const root = document.querySelector('#game');
const game = new Game(root);

let score = 0;
let total = 0;

const beatPrefab = new Prefab(
  new Entity(
    new Position(game.width - 50, game.height / 2 - 10),
    new Size(20, 20),
    Color.fromHex("#000000"),
    1
  ),
  game
);

const reactionPrefab = new Prefab(
  new Text(
    new Position(0, 0),
    "react",
    "20px",
    "bold",
    "red"
  ),
  game
);

function createBeat() {
  const yPos = Math.random() > 0.5 ? game.height / 2 - 60 : game.height / 2 + 40;
  beatPrefab.instantiate(new Position(game.width - 50, yPos));
}

function moveBeats(speed) {
  beatPrefab.instantiatedEntities.forEach((e) => {
    e.position.x -= speed;
    if (e.position.x < 0) {
      showReaction("miss");
      updateScore(-1);
      beatPrefab.destroy(e);
    }
  });
}

function updateScore(change) {
  score += change;
  total++;
  scoreText.setText(`score: ${score}`);
  accuracyText.setText(`accuracy: ${Math.round(((score / total) * 100))}`);
}

function detectBeats(key) {
  const targetY = key === '1' ? game.height / 2 - 60 : game.height / 2 + 40;

  let closestBeat = null;
  let closestX = Infinity;

  beatPrefab.instantiatedEntities.forEach((e) => {
    if (e.position.y === targetY && e.position.x < closestX && e.position.x > 0) {
      closestX = e.position.x;
      closestBeat = e;
    }
  });

  if (closestBeat) {
    if (closestX >= 35) {
      showReaction("fast");
      updateScore(-1);
    }
    else if (closestX <= 15) {
      showReaction("slow");
      updateScore(-1);
    } else {
      showReaction("good");
      updateScore(1);
    }
    beatPrefab.destroy(closestBeat);
  } else {
    showReaction("miss");
    updateScore(-1);
  }
}

function showReaction(reaction) {
  const position = new Position(20, 50);
  reactionPrefab.instantiate(position);
  const reactionInstance = [...reactionPrefab.instantiatedEntities][0];
  const reactionText = reactionInstance.originalContent();
  reactionText.innerText = reaction;
  reactionText.style.color = (reaction === "good" ? Color.fromHex("#00ff00") : Color.fromHex("#ff0000"));
  
  setTimeout(
    () => reactionPrefab.destroy(reactionInstance),
    500
  );

  const start = 50;
  const end =  15;
  const target = reactionInstance.position;

  animate(
    start,
    end,
    Lerp.easeOutSine,
    new Duration({milisecond: 500}),
    (value) => target.y = value,
    ()=>{}
  );
}

const topPad = new Entity(
  new Position(20, game.height / 2 - 60),
  new Size(20, 20),
  Color.fromHex("#444444")
);

const bottomPad = new Entity(
  new Position(20, game.height / 2 + 40),
  new Size(20, 20),
  Color.fromHex("#444444")
);

const scoreText = new Text(new Position(20, 20), "score: 0");
const accuracyText = new Text(new Position(20, 20), "accuracy : 0%");

game.addEntity(topPad);
game.addEntity(bottomPad);
game.addEntity(scoreText);
game.addEntity(accuracyText);
scoreText.size.width *= 2;
accuracyText.size.width *= 2;
accuracyText.position.x = game.width - accuracyText.size.width;

let beatCreateInterval;
let moveBeatsInterval;

document.getElementById('start-game').addEventListener('click', () => {

  const bpm = parseInt(document.getElementById('bpm').value);
  const speed = parseFloat(document.getElementById('speed').value);

  if (beatCreateInterval) clearInterval(beatCreateInterval);
  if (moveBeatsInterval) clearInterval(moveBeatsInterval);

  beatCreateInterval = setInterval(createBeat, 60000 / bpm);
  moveBeatsInterval = setInterval(() => moveBeats(speed), 10);
  
  window.addEventListener('keydown', (event) => {
    if (event.key === '1' || event.key === '2') {
      detectBeats(event.key);
    }
  });

  document.getElementById('settings-wrapper').style.display = 'none';
});
