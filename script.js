const jquery = require('jquery');
const xterm = require('xterm');

const blob = document.getElementById('blob');
const titlemotto = document.getElementById('grad');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX /1.25
    let y = e.clientY /1.25
    blob.animate({
        left: `${x}px`,
        top: `${y}px`
    }, {duration: 1500, fill: "forwards"});

});

var date = new Date().getHours()


if (date == 3){
  titlemotto.textContent = "Ur mom"
}

var words = ["Easier", "Reliable", "Simple", "Supercharged", "Powerful"]
var wordcount = 0;


console.log(date.getHours())

var term = new xterm.Terminal({
    cursorBlink: true,
    rows: 30,
    cols: 80,
    scrollback: 0,
    theme: {
      background: 'rgba(255, 255, 255,0.5)',
      foreground: '#0bf4d2'
    },
    allowTransparency: true,
    allowProposedApi: true
  });
term.open(document.getElementById('terminal'));
term.write('Welcome to the EaseBuild Terminal.\r\nFor help, please enter the keyword "help".\r\n');
term.write('\r\nuser@EaseBuild $ ');


