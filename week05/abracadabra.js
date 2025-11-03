function sayWord(word) {
    // hint: good style: don't mutate/change input arguments
    let wordToProcess = word;
    while (wordToProcess.length > 0) {
        console.log(wordToProcess);
        wordToProcess = wordToProcess.substring(1);
    }
}

sayWord("abracadabra");