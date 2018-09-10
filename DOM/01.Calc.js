function calc() {
    let a = document.getElementById('num1');
    let b = document.getElementById("num2");
    let sum = Number(a.value) + Number(b.value);
    let result = document.getElementById('sum');
    result.value = sum;
}