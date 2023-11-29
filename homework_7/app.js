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

