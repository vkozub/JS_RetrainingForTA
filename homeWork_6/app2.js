// **************************** Task 7 ****************************

let body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
main.className = 'mainClass check item';
body.appendChild(main);

const div = document.createElement('div');
div.id = 'myDiv';
main.appendChild(div);

const p = document.createElement('p');
const pText = document.createTextNode('First paragraph');
p.appendChild(pText);
div.appendChild(p);
