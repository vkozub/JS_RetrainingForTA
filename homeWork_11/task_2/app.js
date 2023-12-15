// ********************************** Task 2 ********************************

const downloadBooks = document.getElementById('downloadBooks');
const AUTHORS_URL = 'http://localhost:5000/authors';

async function getAuthors(event) {
    const response = await fetch(AUTHORS_URL);
    const data = await response.json();
    await removeTarget(event);
    await addListOfAuthors(data);
}

async function removeTarget(event) {
    event.target.remove();
}

async function addListOfAuthors(data) {
    let ul = document.createElement('ul');
    for (let author of data.authors) { 
        let li = document.createElement('li', author);
        li.innerHTML = author;
        ul.appendChild(li);
    };
    document.body.appendChild(ul);
}

downloadBooks.addEventListener('click', (e) => getAuthors(e));
