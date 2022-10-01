var readlineSync = require('readline-sync');

var score = 0;

var topScores = [
  {
    name: 'Hermoine',
    score: 50
  },
  {
    name: 'Dumbledore',
    score: 50
  },
  {
    name: 'Ron',
    score: 40
  }
];

var questionList = [
  {
    question: 'Who were the parents of Harry Potter ?',
    answer: 'James and Lily Potter'
  },
  {
    question: 'Which magic school did Harry went to ?',
    answer: 'Hogwarts'
  },
  {
    question: 'Who tried to kill Harry Potter ?',
    answer: 'Voldemort'
  },
  {
    question: "Who was the headmaster of Hogwarts during Harry's time?",
    answer: 'Dumbledore'
  },
  {
    question: 'What house did Harry belonged to in Hogwarts ?',
    answer: 'Gryffindor'
  }
];

function welcome() {
  var userName = readlineSync.question('What is your name ?');
  console.log('Welcome ' + userName + ' lets see if you know Harry Potter');
}

function playGame(ques, ans) {
  var ansOfUser = readlineSync.question(ques);
  if (ansOfUser.toUpperCase() === ans.toUpperCase()) {
    console.log('right');
    score += 10;
  }
  else {
    console.log('wrong');
  }
  console.log('your current score: ' + score);
  console.log('--------------------');
}

function gameStart() {
  for (let i = 0; i < questionList.length; i++) {
    var currentQuestion = questionList[i];
    playGame(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log('Cheers, your total score: ' + score);
  console.log("Check out the top scores, if you should be there ping me and I'll update it");
  topScores.map(score => console.log(score.name + ' : ' + score.score))
}

welcome();
gameStart();
showScores();



