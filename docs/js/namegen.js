const generateNames = function() {
    let numOfWords = 2;
    let numOfNames = 20;

    let data = document.getElementById('elements').value;
    let results = document.getElementById('results');

    function isCommented(word) {
        return word[0] === '/' && word[1] === '/';
    }

    const words = data.split("\n").filter((line) => {
        let word = line.trim();
        return word !== '' && !isCommented(word);
    });
    let choices = [];

    for (let j = 0; j < numOfNames; j++) {
        let chosen = [];
        for(let i = 0; i < numOfWords; i++) {
            let word = words[Math.floor(Math.random() * words.length)];
            chosen.push(word);
        }
        choices.push(`<li>${chosen.join(' ')}</li>`);
    }

    results.innerHTML = choices.join('');


}


