// **************************** Task 7 ****************************

let body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');
body.appendChild(main);
main.className = 'mainClass check item';
const div = document.createElement('div');
main.appendChild(div);
main.id = 'myDiv';
const p = document.createElement('p');
div.appendChild(p);
const pText = document.createTextNode('First paragraph');
p.appendChild(pText);
