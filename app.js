const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

let jeopardyCategories = [];

async function loadQuestions() {
  const response = await fetch(
    'https://the-trivia-api.com/api/questions?limit=5'
  );
  jeopardyCategories = await response.json();

  return jeopardyCategories;
}

function addCategory(category) {
  const columm = document.createElement('div');
  columm.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.category;

  columm.appendChild(genreTitle);
  game.append(columm);
}

// Main Loop start
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadQuestions();
  } catch (e) {
    console.log(e);
  }

  jeopardyCategories.forEach((question) => {
    console.log(question.category);
    console.log(question.question);
    console.log(question.correctAnswer);
    console.log(question.incorrectAnswers[0]);
    console.log(question.incorrectAnswers[1]);
    console.log(question.incorrectAnswers[2]);
  });

  jeopardyCategories.forEach((category) => addCategory(category));
}); // Main loop end
