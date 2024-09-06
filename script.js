document.addEventListener('DOMContentLoaded', function () {
    const glitchElements = document.querySelectorAll('.glitch');

    // Dodanie losowych efektów glitch na hover
    glitchElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('glitch-active');
            setTimeout(() => {
                element.classList.remove('glitch-active');
            }, 1000); // Efekt glitch będzie trwał 1 sekundę
        });
    });
    
    // Zegar do losowego glitchowania tekstu co kilka sekund
    setInterval(() => {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        randomElement.classList.add('glitch-active');
        setTimeout(() => {
            randomElement.classList.remove('glitch-active');
        }, 1000);
    }, 5000); // Losowy glitch co 5 sekund
});
