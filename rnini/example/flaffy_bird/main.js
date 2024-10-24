const root = document.querySelector('#game');
const game = new Game(root);

const pipes = [];

game.setBackground(Color.fromHex('#87CEEB'));

let stopf = false;
let isFlying = false;
let weight = 0;
let score = 0;

const end = () => {
  window.location.reload();
}

game.setKeyboardEventListener((type, event) => {
  if (type == 'keydown' && event.key === ' ' && !isFlying) {
    if (stopf) {
      stopf();
    }
    isFlying = true;
    stopf = animate(
      0,
      -3,
      Lerp.easeInSine,
      new Duration({milisecond: 100}),
      (value)=>weight = value,
      ()=>setTimeout(()=>isFlying = false, 250)
    );
  }
});

setInterval(() => {
  weight+=0.04;
  bird.position.y += weight;
}, 10);

setInterval(() => {
  if (!game.inGame(bird)) {
    end();
  }
}, 10);

setInterval(()=>{
  pipes.forEach(pipe=>{
    pipe.position.x -= 6;
    if (pipe.isCollide(bird)) {
      end();
    }
    if (!game.inGame(pipe)) {
      pipePrefab.destroy(pipe, () => {
        scoreText.setText(`score: ${++score}`);
      });
    }
  });
});

const bird = new Entity(
  new Position(100, 100),
  new Size(32, 32),
  "https://image.winudf.com/v2/image1/Y29tLlNKLkZsYXBweUJpcmRDbG9uZV9pY29uXzE1NzQ5NTkxMjBfMDIx/icon.png?w=184&fakeurl=1",
  9
);

const pipePrefab = new Prefab(
  new Entity(
    new Position(0, 0),
    new Size(40, 320),
    Color.fromHex('#125621'),
    2
  ),
  game
);

const scoreText = new Text(
  new Position(10, 20),
  "score: 0",
  new Size(600, 40),
  "32px",
  "bold"
);

game.addEntity(bird);
game.addEntity(scoreText);

setInterval(()=>{
  pipes.push(pipePrefab.instantiate(
    new Position(game.width-60, Math.random()*game.height-60)
  ));
}, 1800);
