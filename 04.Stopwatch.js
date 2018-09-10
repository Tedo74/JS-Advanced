function stopwatch() {
    let clock = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startTimer);
    let stopBtn = document.getElementById('stopBtn');
    stopBtn.addEventListener('click', stopTimer);
    let seconds = 0;
    let timer = null;

    function startTimer() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        seconds = 0;
        timer = setInterval(tick, 1000);
    }

    function stopTimer() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timer);
    }

    function tick() {
        clock.textContent = `${('0' + Math.trunc(seconds / 60)).slice(-2)}:${('0' + Math.trunc(seconds % 60)).slice(-2)}`;
        seconds++;
    }
}