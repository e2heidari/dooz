function procces() {
    var firstNumber = document.getElementById("row").value;
    firstNumber = parseInt(firstNumber);
    var secendNumber = document.getElementById("column").value;
    secendNumber = parseInt(secendNumber);
    for (let index = 1; index < 10; index++) {
        if (index % 2 === 1) {
            document.getElementById("table1").rows[firstNumber].cells[secendNumber].innerHTML = "X";
        } else {
            document.getElementById("table1").rows[firstNumber].cells[secendNumber].innerHTML = "O";
        }

    }
}