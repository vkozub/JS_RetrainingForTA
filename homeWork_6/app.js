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
parArray.forEach((value, i) => { console.log('Selector text ' + `${i}: ` + value.textContent); });

// **************************** Task 4 ****************************

// the first way
const uList = document.querySelectorAll('ul#list > li');
const ul = Array.from(uList);
const l = ul.length;
alert(`${ul[0].textContent}, ${ul[l-1].textContent}, ${ul[1].textContent}, ${ul[l-2].textContent}, ${ul[2].textContent}`)

// the second way
const uListNext = document.querySelectorAll('ul#list > li');
const ul2 = Array.from(uListNext);
ul2.forEach((value, i) => { value.setAttribute('id', `list_${i}`); });
const l0 = document.getElementById('list_0').textContent;
const l1 = document.getElementById('list_1').textContent;
const l2 = document.getElementById('list_2').textContent;
const l3 = document.getElementById('list_3').textContent;
const l4 = document.getElementById('list_4').textContent;
alert(l0 + ', ' + l4 + ', ' + l1 + ', ' + l3 + ', ' + l2);

// **************************** Task 5 ****************************

