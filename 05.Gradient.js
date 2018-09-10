function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', getLocation);
    gradient.addEventListener('mouseout', gradientOut);

    function getLocation(event) {
        let place = event.offsetX / (this.clientWidth -1);
        place = Math.trunc(place * 100);
        document.getElementById('result').textContent = place+"%";
    }

    function  gradientOut() {
        document.getElementById('result').textContent = "";
    }
}