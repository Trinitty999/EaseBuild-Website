const blob = document.getElementById('blob');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX /1.25
    let y = e.clientY /1.25
    blob.animate({
        left: `${x}px`,
        top: `${y}px`
    }, {duration: 1500, fill: "forwards"});

});