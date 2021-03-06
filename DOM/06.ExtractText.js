function extractText(id) {
    let text = document.getElementById(id).textContent;
    let pattern = /(\(.+\))/g;
    let result = [];

    let match = pattern.exec(text);
    while (match) {
        result.push(match[1].substring(1, match[1].length - 1));
        match = pattern.exec(text);
    }
    return result.join('; ');
}