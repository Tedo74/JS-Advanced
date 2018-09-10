function stopwatch() {
    let clock = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startTimer);
    let stopBtn = document.getElementById('stopBtn');
    stopBtn.addEventListener('click', stopTimer);
    let timer = null;

    function startTimer() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let seconds = 0;
        tick();
        timer = setInterval(tick, 1000);

        function tick() {
            clock.textContent = `${('0' + Math.floor(seconds / 60)).slice(-2)}:${('0' + Math.floor(seconds % 60)).slice(-2)}`;
            seconds++;
        }
    }

    function stopTimer() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timer);
    }
}