const content = {
    pl: {
        poezja: {
            title: "Poezja",
            description: "Poezja Stanisława Szpinety wpisuje się w poetykę romantyzmu i modernizmu. To wolna od reguł poezja uczuć, emocji i przeżyć wewnętrznych...",
            citation: "~Ewa Edyta Zdziera",
            awards: "Konkursy i Wyróżnienia",
            awardsList: ["Srebrna wena - w konkursie Śródmiejski Festival Talentów"],
            poems: [
                { title: "Sam", content: ["gdzieś gdzie drga", "droga ma", "w wspólnych snach", "kwitnąca"] },
                { title: "Świt w nocach", content: ["wir w krokach", "myśl w oczach"] },
                { title: "I Staś", content: ["tak mały gdy gra", "gdy truje do dna", "gdy psuje go złap", "w jego wierszykach", "myślenia doda", "do damy śle ja"] }
            ],
            link: "Wiersze pochodzą z tomika „Lawenda” dostępnego na stronie Szpineta.pl"
        }
    },
    en: {
        // Tutaj możesz dodać angielską wersję treści
    }
};

function switchLanguage(lang) {
    document.querySelector("#poezja h2").textContent = content[lang].poezja.title;
    document.querySelector("#poezja p:first-of-type").textContent = content[lang].poezja.description;
    document.querySelector("#poezja p:nth-of-type(2)").textContent = content[lang].poezja.citation;
    document.querySelector("#poezja h3:first-of-type").textContent = content[lang].poezja.awards;
    document.querySelector("#poezja ul").innerHTML = content[lang].poezja.awardsList.map(award => `<li>${award}</li>`).join('');
    
    let poemsHtml = '';
    content[lang].poezja.poems.forEach(poem => {
        poemsHtml += `<h4>${poem.title}</h4>`;
        poem.content.forEach(line => {
            poemsHtml += `<p>${line}</p>`;
        });
    });
    document.querySelector(".wiersze").innerHTML = poemsHtml;
    document.querySelector("#poezja p:last-of-type").innerHTML = content[lang].poezja.link;
}
