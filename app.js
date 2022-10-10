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
  const column = document.createElement('div');
  column.classList.add('genre-column');

  // Category
  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerText = category.category;
  column.appendChild(genreTitle);
  game.append(column);

  // Question

  const card = document.createElement('div');
  card.classList.add('card');
  column.appendChild(card);
  if (category.difficulty === 'easy') {
    card.innerText = 100;
  }
  if (category.difficulty === 'medium') {
    card.innerText = 200;
  }
  if (category.difficulty === 'hard') {
    card.innerText = 300;
  }

  card.setAttribute('data-question', category.question);
  card.setAttribute('data-answer-1', category.incorrectAnswers[0]);
  card.setAttribute('data-answer-2', category.incorrectAnswers[1]);
  card.setAttribute('data-answer-3', category.incorrectAnswers[2]);
  card.setAttribute('data-correct', category.correctAnswer);
  card.setAttribute('data-value', card.innerText);
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
