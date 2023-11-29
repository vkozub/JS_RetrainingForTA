// ********************************** Task 1 ********************************

let newWin = window.open('', '', "width=300, height=300");
function resizeNew(win) { win.resizeTo(500, 500); };
setTimeout(resizeNew, 2000, newWin);
setTimeout(() => { newWin.moveTo(200, 200); }, 4000);
setTimeout(() => { newWin.close(); }, 6000);

// ********************************** Task 2 ********************************

const button = document.querySelector('button');
function changeCSS() {
    const p = document.getElementById('text');
    p.style.color = 'orange';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'Comic Sans MS';
};
button.addEventListener('click', changeCSS);

// ********************************** Task 3 ********************************

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link1 = document.getElementById('link1');

function changeBackgroundColor(color){
    const page = document.querySelector('body');
    return () => { page.style.backgroundColor = color; }; 
}

button1.addEventListener('click', changeBackgroundColor('blue'));
button2.addEventListener('dblclick', changeBackgroundColor('pink'));
button3.addEventListener('mousedown', changeBackgroundColor('brown'));
button3.addEventListener('mouseup', changeBackgroundColor('white'));
link1.addEventListener('mouseover', changeBackgroundColor('yellow'));
link1.addEventListener('mouseout', changeBackgroundColor('white'));

// ********************************** Task 4 ********************************

const select1 = document.getElementById('select1');
const button4 = document.getElementById('button4');

button4.addEventListener('click', function(){
    let selectValue = select1.value;
    const _options = document.querySelectorAll('select#select1 > option');
    const options = Array.from(_options);
    const selected = options.find( (option) => option.value === selectValue );
    if (selected) { selected.remove(); };
});

// ********************************** Task 5 ********************************

const button5 = document.getElementById('button5');

function liveButton(text){
    const divLive = document.getElementById('live_button');
    let p = document.querySelector('div#live_button > p');
    if (!p) { 
        p = document.createElement('p');
        divLive.appendChild(p);
    }
    return () => { p.innerHTML += text; }; 
}

button5.addEventListener('click', liveButton('I was pressed!<br>'));
button5.addEventListener('mouseout', liveButton('Mouse is not on me!<br>'));
button5.addEventListener('mouseenter', liveButton('Mouse is on me!<br>'));

// ********************************** Task 6 ********************************

