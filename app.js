const fragen=[
{q:"Was geht immer hoch aber nie runter?",a:["Alter","Ball","Wasser"],c:0,meme:"😂"},
{q:"Was wird nass während es trocknet?",a:["Handtuch","Wasser","Schwamm"],c:0,meme:"🤣"},
{q:"Warum war das Mathebuch traurig?",a:["Zu viele Probleme","Zu alt","Zu dick"],c:0,meme:"💀"},
{q:"Welche Frucht schwimmt?",a:["Apfel","Stein","Ziegel"],c:0,meme:"🍎"},
{q:"Was hat Hände aber kann nicht klatschen?",a:["Uhr","Mensch","Roboter"],c:0,meme:"⏰"},
{q:"Was ist schneller?",a:["Licht","Auto","Fahrrad"],c:0,meme:"⚡"},
{q:"Warum hat der Computer Hunger?",a:["braucht Byte","kein Strom","kaputt"],c:0,meme:"💻"},
{q:"Was trägt Schuhe schläft aber nicht?",a:["Pferd","Hund","Mensch"],c:0,meme:"🐎"}
];

let i=0,score=0,timer=50,interval;
const app=document.getElementById('app');

function startScreen(){
app.innerHTML=`<div class='card'><h2>🚀 Start bereit?</h2><button onclick='startGame()'>START</button></div>`;
}

function startGame(){
i=0;score=0;showQuestion();startTimer();}

function startTimer(){
clearInterval(interval);
interval=setInterval(()=>{
timer--;render();
if(timer<=0){clearInterval(interval);showResult(false);} },1000);
}

function showQuestion(){
timer=50;
render();
}

function render(){
if(i>=fragen.length){endScreen();return;}
let f=fragen[i];
app.innerHTML=`<div class='card'><div class='timer'>⏱ ${timer}s</div><h2>${f.q}</h2>${f.a.map((x,idx)=>`<button onclick='answer(${idx})'>${x}</button>`).join('')}</div>`;
}

function answer(a){clearInterval(interval);
if(a===fragen[i].c){score++;showResult(true);}else showResult(false);
}

function showResult(correct){
let text=correct?"✅ RICHTIG 😂":"❌ FALSCH 💀";
app.innerHTML=`<div class='card'><h2>${text}</h2><button onclick='next()'>Weiter ➡️</button></div>`;
}

function next(){i++;showQuestion();startTimer();}

function endScreen(){
app.innerHTML=`<div class='card'><h2>🏆 Game Over</h2><p>Punkte: ${score}/${fragen.length}</p><button onclick='startScreen()'>Neu starten</button></div>`;
}

startScreen();
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
