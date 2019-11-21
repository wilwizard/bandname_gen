const fs = require('fs');
let numOfWords = 2;
const numOfNames = parseInt(process.argv[2]) || 10;

fs.readFile('./bandwords2.txt', 'utf8', function (error, data) {

    if (error) {
        console.error(error);
        return;
    }

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

        choices.push(chosen.join(' '));
    }

    console.log(choices.join('\n'));
});


