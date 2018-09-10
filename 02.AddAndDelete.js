function addItem() {
    let ul = document.getElementById('items');
    let text = document.getElementById('newText');
    let li = document.createElement('li');
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    li.textContent = text.value + " ";
    deleteLink.addEventListener('click', deleteItem);
    li.appendChild(deleteLink);
    ul.appendChild(li);
    text.value = '';

    function deleteItem() {
        ul.removeChild(this.parentNode);
    }
}