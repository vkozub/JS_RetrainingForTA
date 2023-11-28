// ********************************** Task 1 ********************************

let newWin = window.open('', '', "width=300, height=300");
function resizeNew(win) { win.resizeTo(500, 500); };
setTimeout(resizeNew, 2000, newWin);
setTimeout(() => { newWin.moveTo(200, 200); }, 4000);
setTimeout(() => { newWin.close(); }, 6000);

// ********************************** Task 2 ********************************



// ********************************** Task 3 ********************************

