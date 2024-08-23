const konamiCode = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,Enter';
let codeIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === konamiCode.split(',')[codeIndex]) {
        codeIndex++;
        if (codeIndex === konamiCode.split(',').length) {
            window.location.href = 'secret.html'; // URL of your secret page
        }
    } else {
        codeIndex = 0;
    }
});
