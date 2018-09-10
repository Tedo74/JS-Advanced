function validate() {
    document.querySelector('input').addEventListener('change',onchange);
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    
    function onchange(event) {
        if (!regex.test(event.target.value)) {
            event.target.className = 'error';
        }else {
            event.target.removeAttribute('class');
        }
    }
}