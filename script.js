// Dodaj ewentualne efekty JavaScriptowe
document.addEventListener('DOMContentLoaded', function () {
    console.log('Strona załadowana');

    // Funkcja zmiany języka
    const languageToggle = document.querySelector('.language-toggle');
    const poezjaSection = {
        pl: {
            title: "Poezja",
            description: "\"Poezja Stanisława Szpinety wpisuje się w poetykę romantyzmu i modernizmu...\"",
            citation: "~Ewa Edyta Zdziera",
            awards: "Konkursy i Wyróżnienia",
            awardsList: ["Srebrna wena - w konkursie Śródmiejski Festival Talentów"],
            poems: [
                { title: "Sam", content: ["gdzieś gdzie drga", "droga ma", "w wspólnych snach", "kwitnąca"] },
                { title: "Świt w nocach", content: ["wir w krokach", "myśl w oczach"] },
                { title: "I Staś", content: ["tak mały gdy gra", "gdy truje do dna", "gdy psuje go złap", "w jego wierszykach", "myślenia doda", "do damy śle ja"] }
            ]
        },
        en: {
            title: "Poetry",
            description: "\"The poetry of Stanisław Szpineta fits into the poetics of Romanticism and Modernism...\"",
            citation: "~Ewa Edyta Zdziera",
            awards: "Contests and Awards",
            awardsList: ["Silver Inspiration - Śródmiejski Talent Festival"],
            poems: [
                { title: "Alone", content: ["somewhere it trembles", "my road", "in shared dreams", "blooming"] },
                { title: "Dawn in Nights", content: ["whirl in steps", "thought in eyes"] },
                { title: "And Staś", content: ["so small when he plays", "when he poisons to the bottom", "when he spoils him caught", "in his little verses", "adds thought", "to the lady sends I"] }
            ]
        }
    };

    let currentLang = 'pl';
    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pl' ? 'en' : 'pl';
        updatePoezjaSection();
    });

    function updatePoezjaSection() {
        const poezjaContent = document.getElementById('poezja');
        const langData = poezjaSection[currentLang];

        poezjaContent.querySelector('h2').textContent = langData.title;
        poezjaContent.querySelector('p').textContent = langData.description;
        poezjaContent.querySelector('blockquote').textContent = langData.citation;
        poezjaContent.querySelector('h3').textContent = langData.awards;

        const awardsList = poezjaContent.querySelector('ul');
        awardsList.innerHTML = langData.awardsList.map(award => `<li>${award}</li>`).join('');

        const poemsContainer = poezjaContent.querySelector('.wiersze');
        poemsContainer.innerHTML = langData.poems.map(poem => `
            <h4>${poem.title}</h4>
            ${poem.content.map(line => `<p>${line}</p>`).join('')}
        `).join('');
    }

    // Efekt VHS
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('vhs-effect');
    });

    // Efekt przewijania nawigacji
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
