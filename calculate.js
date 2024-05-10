function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearLastDigit() {
   var displayvalue = document.getElementById('display').value;
   document.getElementById('display').value = displayvalue.slice(0, -1);
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}