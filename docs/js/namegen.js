const generateNames = function() {
    let numOfWords = 2;
    let numOfNames = 10;

    let data = document.getElementById('elements').value;
    let results = document.getElementById('results');

    const words = data.split("\n").filter((word) => {
        return word !== '' && word[0] !== '\t';
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

    results.innerHTML += choices.join('');


}


