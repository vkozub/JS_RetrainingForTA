// ********************************** Task 1 ********************************

const voteButton = document.getElementById('voteButton');

async function vote(event) {
    const url = 'http://localhost:5000/voting';
    const response = await fetch(url);
    const data = await response.json();
    event.target.innerHTML = 'Your vote is accepted: ' + data.date;
}

voteButton.addEventListener('click', (e) => vote(e));
