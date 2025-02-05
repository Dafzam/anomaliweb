document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123) {
        e.preventDefault();
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        e.preventDefault();
    }
});