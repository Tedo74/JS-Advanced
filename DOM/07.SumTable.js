function sum() {
    let rows = document.querySelectorAll('table tr td');
    let sum = 0;
    for (let i = 1; i < rows.length-1; i+= 2) {
        sum += Number(rows[i].textContent);
    }
    // let result = document.createTextNode(''+sum);
    // document.getElementById('sum').appendChild(result);
    document.getElementById('sum').textContent = sum;
}