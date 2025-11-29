function displayProfession(){
    // NGL, im proud of this -> Try with Fullstack Developer
    const profession_text = "Software Engineer";
    let profession = document.getElementById('profession');

    // Split text by whitespace
    let profession_words = profession_text.split(' ');

    for (let i = 0; i < profession_words.length; i++) {
        // create a new row div for each word
        let word = document.createElement('div');
        word.classList.add('row');
        // create a new col div for each letter of the word
        for (let j = 0; j < profession_words[i].length; j++) {
            let letter = document.createElement('div');
            letter.classList.add('col');
            letter.innerHTML = profession_words[i][j].toUpperCase();
            word.appendChild(letter);
        }
        profession.appendChild(word);
    }
}
displayProfession();