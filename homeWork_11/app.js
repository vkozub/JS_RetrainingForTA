// ********************************** Task 1 ********************************

async function vote() {
const url = 'http://localhost:5000';
const response = await fetch(url);
const data = await response.json();
console.log(data);
}

const voteButton = document.getElementById('voteButton');
voteButton.addEventListener('click', vote);

// ********************************** Task 2 ********************************

