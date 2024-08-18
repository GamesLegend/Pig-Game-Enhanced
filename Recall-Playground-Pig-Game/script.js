'use strict';

const body = document.querySelector('body');
const score = document.querySelectorAll('.score');
const scoreFirstEl = document.getElementById('score--0');
const scoreSecondEl = document.getElementById('score--1');
const currentFirstEl = document.getElementById('current--0');
const currentSecondEl = document.getElementById('current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const newGameBtn = document.querySelector('.btn--new');
const player = document.querySelectorAll('.player');
const startBtn = document.querySelector('.start-btn');
const beforeStart = document.querySelector('.before-start');
const main = document.querySelector('main');
const btn = document.querySelectorAll('.btn');
const player1Name = document.getElementById('name--0');
const player2Name = document.getElementById('name--1');
const inputField1 = document.querySelector('.input--field--1');
const inputField2 = document.querySelector('.input--field--2');
const input = document.querySelectorAll('input');
const defaultThemeBtn = document.getElementById('default');
const crimsonSunriseThemeBtn = document.getElementById('crimson--sunrise');
const oceanBreezeThemeBtn = document.getElementById('ocean--breeze');
const naturesEmbraceThemeBtn = document.getElementById('natures--embrace');
const monochromeEleganceThemeBtn = document.getElementById(
  'monochrome--elegance'
);
const midnightGoldThemeBtn = document.getElementById('midnight--gold');
const current = document.querySelectorAll('.current');
const currentLabel = document.querySelectorAll('.current-label');
const playerName = document.querySelectorAll('.name');
const playerActive = document.querySelector('.player--active');
const mainHeader = document.querySelector('h1');
const secondaryHeader = document.querySelectorAll('.secondary-header');
const tertiaryHeader = document.querySelector('h3');
const tertiaryHeaderClass = document.querySelectorAll('.tertiary-header');
const startParagraph = document.querySelector('.start-paragraph');
const inputLabel = document.querySelectorAll('label');
const continueBtn = document.querySelector('.btn--continue');
const section = document.querySelectorAll('section');
const endgameStatsP = document.querySelectorAll('.endgame-stats-p');
const endgameName1 = document.querySelector('.endgame-name-1');
const endgameName2 = document.querySelector('.endgame-name-2');
const endgameScore1 = document.querySelector('.endgame-score-1');
const endgameScore2 = document.querySelector('.endgame-score-2');
const diceRolled1El = document.getElementById('dice--rolled--1');
const diceRolled2El = document.getElementById('dice--rolled--2');
const oneWasRolled1El = document.getElementById('one--was--rolled--1');
const oneWasRolled2El = document.getElementById('one--was--rolled--2');
const scoreHeld1El = document.getElementById('score--held--1');
const scoreHeld2El = document.getElementById('score--held--2');
const player1TurnEl = document.getElementById('player--1--turn');
const player2TurnEl = document.getElementById('player--2--turn');
const firstPlayer = document.querySelector('.first--player');
const secondPlayer = document.querySelector('.second--player');
const winnerHeader = document.querySelector('.winner-header');
const winnerHeader2 = document.querySelector('.winner-header-2');

let checkerVariable = true;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentFirstPlayer = 0;
let currentSecondPlayer = 0;
main.style.display = 'block';
let inputFieldNum = 0;
let diceRolled1 = 0;
let diceRolled2 = 0;
let oneWasRolled1 = 0;
let oneWasRolled2 = 0;
let scoreHeld1 = 0;
let scoreHeld2 = 0;
let player1Turn = 0;
let player2Turn = 0;

scoreFirstEl.textContent = scorePlayer1;
scoreSecondEl.textContent = scorePlayer2;
diceImg.style.display = 'none';

startBtn.addEventListener('click', function () {
  if (
    inputField1.value.length <= 10 &&
    inputField1.value.length > 0 &&
    inputField2.value.length <= 10 &&
    inputField2.value.length > 0
  ) {
    for (let i = 0; i < player.length; i++) {
      player[i].style.display = 'flex';
    }

    newGameBtn.style.display = 'block';
    rollDiceBtn.style.display = 'block';
    holdBtn.style.display = 'block';
    main.style.display = 'flex';
    beforeStart.style.display = 'none';

    player1Name.textContent = inputField1.value;
    player2Name.textContent = inputField2.value;

    document.querySelector('.endgame-stats').style.display = 'none';
    newGameBtn.style.top = '4rem';
  }
});

const changeTheme = function (
  beforeStartTextColor,
  startBtnBColor,
  bodyBgImg,
  mainBgColor,
  mainBoxShadow,
  scoreColor,
  currentBgColor,
  currentColor,
  currentLabelColor,
  btnColor,
  btnBgColor,
  btnBoxShadow,
  diceImgBoxShadow,
  playerNameColor
) {
  mainHeader.style.color = beforeStartTextColor;
  for (let i = 0; i < inputLabel.length; i++) {
    inputLabel[i].style.color = beforeStartTextColor;
  }
  for (let i = 0; i < secondaryHeader.length; i++) {
    secondaryHeader[i].style.color = beforeStartTextColor;
  }
  tertiaryHeader.style.color = beforeStartTextColor;
  startParagraph.style.color = beforeStartTextColor;

  startBtn.style.background = startBtnBColor;
  body.style.backgroundImage = bodyBgImg;
  main.style.backgroundColor = mainBgColor;
  main.style.boxShadow = mainBoxShadow;
  for (let i = 0; i < score.length; i++) {
    score[i].style.color = scoreColor;
  }
  for (let i = 0; i < current.length; i++) {
    current[i].style.backgroundColor = currentBgColor;
    current[i].style.color = currentColor;
    currentLabel[i].style.color = currentLabelColor;
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = btnColor;
    btn[i].style.backgroundColor = btnBgColor;
    btn[i].style.boxShadow = btnBoxShadow;
  }
  diceImg.style.boxShadow = diceImgBoxShadow;
  for (let i = 0; i < playerName.length; i++) {
    playerName[i].style.color = playerNameColor;
  }
  for (let i = 0; i < endgameStatsP.length; i++) {
    endgameStatsP[i].style.color = scoreColor;
  }
  for (let i = 0; i < tertiaryHeaderClass.length; i++) {
    tertiaryHeaderClass[i].style.color = playerNameColor;
  }
  winnerHeader.style.color = scoreColor;
  winnerHeader2.style.color = scoreColor;
};

defaultThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#a11477',
    'linear-gradient(to left top, #753682 , #bf2e34 )',
    'linear-gradient(to left top, #753682, #bf2e34)',
    'rgba(255, 255, 255, 0.35)',
    'rgba(0, 0, 0, 0.25)',
    '#c7365f',
    '#c7365f',
    '#fff',
    '#ddd',
    '#444',
    'rgba(255, 255, 255, 0.6)',
    'rgba(0, 0, 0, 0.01)',
    'rgba(0, 0, 0, 0.2)',
    '#c7365f'
  );
});

crimsonSunriseThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#ff4500',
    'linear-gradient(to left top, rgb(240, 62, 62) , rgb(240, 140, 0) )',
    'linear-gradient(to right bottom, rgb(240, 62, 62) , rgb(240, 140, 0) )',
    'rgba(255, 245, 230, 0.35)',
    'rgba(0, 0, 0, 0.2)',
    'rgb(240, 62, 62)',
    '#ff4500',
    '#fff5e1',
    '#ffd700',
    'rgb(240, 62, 62)',
    'rgba(255, 245, 230, 0.6)',
    'rgba(0, 0, 0, 0.2)',
    'rgba(0, 0, 0, 0.25)',
    'rgb(240, 62, 62)'
  );
});

monochromeEleganceThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#ffffff',
    'linear-gradient(to left top, #2c2c2c, #757575)',
    'linear-gradient(to right bottom, #2c2c2c , #757575)',
    'rgba(48, 48, 48, 0.35)',
    'rgba(0, 0, 0, 0.3)',
    '#d3d3d3',
    '#3c3c3c',
    '#e0e0e0',
    '#bfbfbf',
    '#ffffff',
    'rgba(48, 48, 48, 0.6)',
    'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.4)',
    '#d3d3d3'
  );
});

oceanBreezeThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#1565c0',
    'linear-gradient(to left top, #1e88e5, #26c6da )',
    'linear-gradient(to right bottom, #1e88e5, #26c6da )',
    'rgba(240, 248, 255, 0.35)',
    'rgba(0, 0, 0, 0.2)',
    '#228be6',
    '#228be6',
    '#e0f7fa',
    '#bbdefb',
    '#228be6',
    'rgba(240, 248, 255, 0.6)',
    'rgba(0, 0, 0, 0.05)',
    'rgba(0, 0, 0, 0.15)',
    '#1c7ed6'
  );
});

naturesEmbraceThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#556b2f',
    'linear-gradient(to left top, #6b8e23 , #8fbc8f )',
    'linear-gradient(to right bottom, #6b8e23 , #8fbc8f )',
    'rgba(245, 245, 220, 0.35)',
    'rgba(0, 0, 0, 0.2)',
    '#087f5b',
    '#087f5b',
    '#f5f5dc',
    '#dcdcdc',
    '#087f5b',
    'rgba(245, 245, 220, 0.6)',
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0.15)',
    '#2e8b57'
  );
});

midnightGoldThemeBtn.addEventListener('click', function () {
  changeTheme(
    '#ffd700',
    'linear-gradient(to left top, #000000, #333333)',
    'linear-gradient(to right bottom, #000000, #333333)',
    'rgba(0, 0, 0, 0.7)',
    'rgba(255, 215, 0, 0.5)',
    '#ffd700',
    '#000000',
    '#ffd700',
    '#ffd700',
    '#ffffff',
    'rgba(0, 0, 0, 0.8)',
    'rgba(255, 215, 0, 0.3)',
    'rgba(255, 215, 0, 0.4)',
    '#ffd700'
  );
});

rollDiceBtn.addEventListener('click', function () {
  const rollDiceNum = Math.trunc(Math.random() * 6) + 1;
  diceImg.style.display = 'block';
  diceImg.src = `dice-${rollDiceNum}.png`;
  if (player1.classList.contains('player--active')) {
    currentFirstPlayer += rollDiceNum;
    currentFirstEl.textContent = currentFirstPlayer;
    diceRolled1++;
    if (rollDiceNum === 1) {
      player1Turn++;
      currentFirstPlayer = 0;
      oneWasRolled1++;
      currentFirstEl.textContent = currentFirstPlayer;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else if (player2.classList.contains('player--active')) {
    currentSecondPlayer += rollDiceNum;
    currentSecondEl.textContent = currentSecondPlayer;
    diceRolled2++;
    if (rollDiceNum === 1) {
      player2Turn++;
      currentSecondPlayer = 0;
      oneWasRolled2++;
      currentSecondEl.textContent = currentSecondPlayer;
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    scorePlayer1 += currentFirstPlayer;
    scoreFirstEl.textContent = scorePlayer1;
    currentFirstPlayer = 0;
    scoreHeld1++;
    player1Turn++;

    currentFirstEl.textContent = currentFirstPlayer;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player2.classList.contains('player--active')) {
    scorePlayer2 += currentSecondPlayer;
    scoreSecondEl.textContent = scorePlayer2;
    currentSecondPlayer = 0;
    scoreHeld2++;
    player2Turn++;
    currentSecondEl.textContent = currentSecondPlayer;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }

  if (scoreFirstEl.textContent >= 100) {
    player1.classList.add('player--winner');
    winnerHeader.style.right = '14.6rem';
    if (main.style.backgroundColor === 'rgba(48, 48, 48, 0.35)') {
      player1.classList.add('player--winner--monochrome--elegance');
    }
    if (main.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') {
      player1.classList.add('player--winner--midnight--gold');
    }
  } else if (scoreSecondEl.textContent >= 100) {
    player2.classList.add('player--winner');
    winnerHeader.style.right = '-35rem';
    if (main.style.backgroundColor === 'rgba(48, 48, 48, 0.35)') {
      player2.classList.add('player--winner--monochrome--elegance');
    }
    if (main.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') {
      player2.classList.add('player--winner--midnight--gold');
    }
  }

  if (scoreFirstEl.textContent >= 100 || scoreSecondEl.textContent >= 100) {
    diceImg.style.display = 'none';
    winnerHeader.style.display = 'block';
    rollDiceBtn.style.display = 'none';
    holdBtn.style.display = 'none';
    continueBtn.style.display = 'block';
    newGameBtn.style.display = 'none';
    player1.classList.remove('player--active');
    player2.classList.remove('player--active');
  }
});

continueBtn.addEventListener('click', function () {
  document.querySelector('.endgame-stats').style.display = 'grid';
  for (let i = 0; i < section.length; i++) {
    if (section[i].classList.contains('player')) {
      section[i].style.display = 'none';
    }
  }
  continueBtn.style.display = 'none';
  winnerHeader2.style.display = 'block';
  newGameBtn.style.top = '52rem';
  newGameBtn.style.display = 'block';
  endgameName1.textContent = inputField1.value;
  endgameName2.textContent = inputField2.value;
  endgameScore1.textContent = scoreFirstEl.textContent;
  endgameScore2.textContent = scoreSecondEl.textContent;
  diceRolled1El.textContent = diceRolled1;
  diceRolled2El.textContent = diceRolled2;
  oneWasRolled1El.textContent = oneWasRolled1;
  oneWasRolled2El.textContent = oneWasRolled2;
  scoreHeld1El.textContent = scoreHeld1;
  scoreHeld2El.textContent = scoreHeld2;
  player1TurnEl.textContent = player1Turn;
  player2TurnEl.textContent = player2Turn;

  if (endgameScore1.textContent >= 100) {
    firstPlayer.classList.add('player--winner');
    winnerHeader2.style.right = '64.5rem';
    if (main.style.backgroundColor === 'rgba(48, 48, 48, 0.35)') {
      firstPlayer.classList.add('player--winner--monochrome--elegance');
    }
    if (main.style.backgroundColor === 'rgba(0, 0, 0, 0.7))') {
      firstPlayer.classList.add('player--winner--midnight--gold');
    }
  } else if (endgameScore2.textContent >= 100) {
    secondPlayer.classList.add('player--winner');
    winnerHeader2.style.right = '15rem';
    if (main.style.backgroundColor === 'rgba(48, 48, 48, 0.35)') {
      secondPlayer.classList.add('player--winner--monochrome--elegance');
    }
    if (main.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') {
      secondPlayer.classList.add('player--winner--midnight--gold');
    }
  }
});

newGameBtn.addEventListener('click', function () {
  main.style.display = 'block';
  for (let i = 0; i < player.length; i++) {
    player[i].style.display = 'none';
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.display = 'none';
  }
  for (let i = 0; i < input.length; i++) {
    input[i].value = '';
  }
  beforeStart.style.display = 'flex';

  scorePlayer1 = 0;
  scorePlayer2 = 0;
  currentFirstPlayer = 0;
  currentSecondPlayer = 0;
  diceRolled1 = 0;
  diceRolled2 = 0;
  oneWasRolled1 = 0;
  oneWasRolled2 = 0;
  scoreHeld1 = 0;
  scoreHeld2 = 0;
  player1Turn = 0;
  player2Turn = 0;
  winnerHeader.style.display = 'none';
  winnerHeader2.style.display = 'none';
  scoreFirstEl.textContent = scorePlayer1;
  scoreSecondEl.textContent = scorePlayer2;
  currentFirstEl.textContent = currentFirstPlayer;
  currentSecondEl.textContent = currentSecondPlayer;
  diceImg.style.display = 'none';
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');
  player1.classList.remove('player--winner--monochrome--elegance');
  player2.classList.remove('player--winner--monochrome--elegance');
  firstPlayer.classList.remove('player--winner--monochrome--elegance');
  secondPlayer.classList.remove('player--winner--monochrome--elegance');
  player1.classList.remove('player--winner--midnight--gold');
  player2.classList.remove('player--winner--midnight--gold');
  firstPlayer.classList.remove('player--winner--midnight--gold');
  secondPlayer.classList.remove('player--winner--midnight--gold');
});
