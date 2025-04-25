function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function updateStyle() {
    let textArea = document.getElementById("userText");

    if (document.getElementById("fancy").checked) {
        alert("Changed text to FancyShmancy!");
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "blue";
    } else {
        alert("Changed text to BoringBetty");
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";        
    }    
}

function mooify() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "" : ".");
}