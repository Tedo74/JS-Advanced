function deleteByEmail() {
    let searchedMail = document.getElementsByName('email')[0];
    let mails = document.querySelectorAll('#customers tr td:nth-child(2)');
    for (let mail of mails) {
        if (mail.textContent === searchedMail.value) {
            let row = mail.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}