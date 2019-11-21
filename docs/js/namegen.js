const generateNames = function() {
    let numOfWords = 2;
    let numOfNames = 10;

    let data = document.getElementById('elements').value;

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
    console.log(choices);


}


