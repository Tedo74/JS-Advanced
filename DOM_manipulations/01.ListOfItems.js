function addItem() {
    let textToLi = document.getElementById('newItemText').value;
    let liToInsert = document.createElement('li');
    liToInsert.textContent = textToLi;
    let ul = document.getElementById('items');
    ul.appendChild(liToInsert);
    document.getElementById('newItemText').value = '';
}