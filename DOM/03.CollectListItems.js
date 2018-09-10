function extractText() {
    let ul = document.getElementById('items');
    let tArea = document.getElementById('result')
    let elements = ul.children;
    for (let i = 0; i < elements.length; i++) {
        tArea.value += elements[i].textContent + '\n';
    }
}