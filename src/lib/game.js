// todo vísa í rétta hluti með import
import question from './question';
import { empty, el } from './helpers';


// allar breytur hér eru aðeins sýnilegar innan þessa módúl

let startButton;
let problem; // element sem heldur utan um verkefni, sjá index.html
let result; // element sem heldur utan um niðurstöðu, sjá index.html

let playTime; // hversu lengi á að spila? Sent inn gegnum init()
let total = 0; // fjöldi spurninga í núverandi leik
let correct = 0; // fjöldi réttra svara í núverandi leik
let currentProblem; // spurning sem er verið að sýna

/**
 * Klárar leik. Birtir result og felur problem. Reiknar stig og birtir í result.
 */
function finish() {
  const points = Math.round((((correct / total) ** 2) + correct) * total / playTime) * 100;
  const text = Þú svaraðir ${correct} rétt af ${total} spurningum og fékkst ${points} stig fyrir. Skráðu þig á stigatöfluna!;


  const [textContainer] = document.getElementsByClassName('text');
  const div = el('div');

  const eh = document.createTextNode(text);
  div.appendChild(eh);
  textContainer.appendChild(div);


  const [resultContainer] = document.getElementsByClassName('result');
  resultContainer.classList.remove('result--hidden');

  const [problemContainer] = document.getElementsByClassName('problem');
  problemContainer.classList.add('problem--hidden');

}

/**
 * Keyrir áfram leikinn. Telur niður eftir því hve langur leikur er og þegar
 * tími er búinn kallar í finish().
 *
 * Í staðinn fyrir að nota setInterval köllum við í setTimeout á sekúndu fresti.
 * Þurfum þá ekki að halda utan um id á intervali og skilum falli sem lokar
 * yfir fjölda sekúnda sem eftir er.
 *
 * @param {number} current Sekúndur eftir
 */
function tick(current) {
  // todo uppfæra tíma á síðu
  const [timerContainer] = document.getElementsByClassName('problem__timer');
  empty(timerContainer);
  const div = el('div');

  const timer = document.createTextNode(current);
  div.appendChild(timer);

  timerContainer.appendChild(div);

  if (current <= 0) {
    return finish();
  }

  return () => {
    setTimeout(tick(current - 1), 1000);
  };
}

/**
 * Býr til nýja spurningu og sýnir undir .problem__question
 */
function showQuestion() {
  total += 1;
  [problem] = document.getElementsByClassName('problem__question');
  const div = el('div');

  currentProblem = question();

  const eh = document.createTextNode(currentProblem.problem);
  div.appendChild(eh);
  problem.appendChild(div);
}

/**
 * Byrjar leik
 *
 * - Felur startButton og sýnir problem
 * - Núllstillir total og correct
 * - Kallar í fyrsta sinn í tick()
 * - Sýnir fyrstu spurningu
 */
function start() {
  // todo útfæra
  console.log('start');

  //  Fela startButton
  startButton = document.getElementById('startButton'); // takki sem byrjar leik
  startButton.parentNode.removeChild(startButton);

  [problem] = document.getElementsByClassName('problem'); // takki sem byrjar leik

  problem.classList.remove('problem--hidden');


  showQuestion();
  //  nullstilla
  total = 0;
  correct = 0;

  // kalla i tick
  tick(playTime + 1)();
}

/**
 * Event handler fyrir það þegar spurningu er svarað. Athugar hvort svar sé
 * rétt, hreinsar input og birtir nýja spurningu.
 *
 * @param {object} e Event þegar spurningu svarað
 */
function onSubmit(e) {
  e.preventDefault();
  const [kadidi] = document.getElementsByClassName('problem__question');
  kadidi.removeChild(kadidi.children[0]);

  const [inputContainer] = document.getElementsByClassName('problem__answer');
  const input = inputContainer.children[0];

  if (Number(input.value) === Number(currentProblem.answer)) {
    correct += 1;
  }

  input.value = '';

  showQuestion();
}

/**
 * Event handler fyrir þegar stig eru skráð eftir leik.
 *
 * @param {*} e Event þegar stig eru skráð
 */
function onSubmitScore(e) {
  e.preventDefault();

  // todo útfæra


  result.classList.add('result--hidden');
  problem.classList.add('problem--hidden');
  startButton.classList.remove('button--hidden');
}

/**
 * Finnur öll element DOM og setur upp event handlers.
 *
 * @param {number} _playTime Fjöldi sekúnda sem hver leikur er
 */
export default function init(_playTime) {
  playTime = _playTime;
  // todo útfæra
  startButton = document.getElementById('startButton'); // takki sem byrjar leik
  startButton.addEventListener('click', start);

  let answer = document.getElementById('answerButton');
  answer.addEventListener('click', onSubmit);

  let scoreBoard = document.getElementById('resultId');
  answer.addEventListener('click', onSubmitScore);


}
