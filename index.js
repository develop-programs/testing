let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg'); 
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos1Val === pos3Val) {
      showWinner(pos1Val);
      return;
    }
  }
};


const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgcontainer.classList.remove('hide');
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};


const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerText === "") {
      box.innerText = turnO ? "O" : "X";
      turnO = !turnO;
      checkWinner();
    }
  });
});

resetbtn.addEventListener('click', () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add('hide');
});


newGameBtn.addEventListener('click', () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add('hide');
});
