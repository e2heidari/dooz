var click = 0;
function procces() {
    click += 1;
    var rowNumber = document.getElementById("row").value;
    rowNumber = parseInt(rowNumber);
    var columnNumber = document.getElementById("column").value;
    columnNumber = parseInt(columnNumber);

    if (click % 2 === 1) {
        document.getElementById("table1").rows[rowNumber - 1].cells[columnNumber - 1].innerHTML = "X";
    } else {
        document.getElementById("table1").rows[rowNumber - 1].cells[columnNumber - 1].innerHTML = "O";
    }
    if (click > 4) {
    }
}