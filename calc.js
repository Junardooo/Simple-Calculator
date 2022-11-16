// Clear screen
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// Display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// Calaculate results
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
