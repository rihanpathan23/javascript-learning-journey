const questions = [
  {
    category: "Anime",
    question: "Who is the strongest sorcerer in Jujutsu Kaisen?",
    choices: ["Gojo Satoru", "Sukuna", "Yuji"],
    answer: "Gojo Satoru"
  },
  {
    category: "Gaming",
    question: "Which role specializes in 'one shot, one kill'?",
    choices: ["Rusher", "Sniper", "Support"],
    answer: "Sniper"
  },
  {
    category: "Technology",
    question: "Which language is the backbone of web development?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    category: "Science",
    question: "What is the boiling point of water?",
    choices: ["50°C", "100°C", "200°C"],
    answer: "100°C"
  },
  {
    category: "General Knowledge",
    question: "How many days are there in a normal year?",
    choices: ["360", "365", "366"],
    answer: "365"
  }
];
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}