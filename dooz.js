const size = 3;
let click = 0;
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
        for (let i = 0; i < size; i++) {
            const iterator = row[i].value()
            for (const value of iterator)
                if (value == X | O) {
                    document.getElementById(winer).innerHTML = "You are winer..."
                }

        }
    }
}
//     let array = []
//     rowindex = array.slice(0, size - 1)
//     array.push[i]
//     if (item == X | O) {
//         document.getElementById(winer).innerHTML = "You are winer..."

//     }
// }