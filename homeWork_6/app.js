// **************************** Task 1 ****************************

let test = document.getElementById('test');
test.innerHTML = 'Last';

// the second way
let test2 = document.querySelector('#test');
test2.innerHTML = 'Last';

// the third way
let divs = document.getElementsByTagName('div');
divs[0].innerHTML = 'Last';

// **************************** Task 2 ****************************

let image = document.querySelector('.image');
image.setAttribute('src', 'cat.jpg');
alert(image.outerHTML);

// **************************** Task 3 ****************************

const paragraphs = document.querySelectorAll('div#text > p');
const parArray = Array.from(paragraphs); // nodeList to array
for ( let i = 0; i < parArray.length; i++ ) {
    console.log('Selector text ' + `${i}: ` + parArray[i].textContent);
}

// **************************** Task 4 ****************************

// **************************** Task 5 ****************************

