function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', dayConvert);
    document.getElementById('hoursBtn').addEventListener('click', hoursConvert);
    document.getElementById('minutesBtn').addEventListener('click', minutesConvert);
    document.getElementById('secondsBtn').addEventListener('click', secondsConvert);

    function dayConvert() {
        let days = Number(daysInput.value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function hoursConvert() {
        let hours = Number(hoursInput.value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        daysInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function minutesConvert() {
        let minutes = Number(minutesInput.value);
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        daysInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;
    }

    function secondsConvert() {
        let seconds = Number(secondsInput.value);
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
    }
}