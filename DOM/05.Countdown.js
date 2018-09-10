function countdown(startTime) {
    let time = startTime;
    let output = document.getElementById('time');
    let timer = setInterval(clock, 1000);

    function clock() {
        time--;
        if (time <= 0) {
            clearInterval(timer);
        }
        output.value = `${Math.trunc(time / 60)}:${('0' + time % 60).slice(-2)}`;
    }
}