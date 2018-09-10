function focus() {
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(e => {
        e.addEventListener('focus',(event)=>{
            event.target.parentNode.className = 'focused';
        }
        );
        e.addEventListener('blur', (event)=> {
            event.target.parentNode.removeAttribute('class');
        }
        );
    })
}