const textInput = document.getElementById("text-input");
const wordCountDisplay = document.getElementById("word-count");

textInput.addEventListener("input", function() {
    const text = textInput.value.trim();
    
    if (text === "") {
        wordCountDisplay.textContent = 0;
        return;
    }

    const words = text.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count++;
        }
    }

    wordCountDisplay.textContent = count;
});
