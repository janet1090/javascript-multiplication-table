

document.addEventListener("click", drawTable);

function drawTable() {
    const rowsInput = document.getElementById("rows");
    const colsInput = document.getElementById("cols");
    const container = document.getElementById("tableContainer");

    if (!rowsInput || !colsInput) return;

    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);

    if (isNaN(rows) || isNaN(cols)) return;

    let tableHTML = "<table>";

    for (let i = 1; i <= rows; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= cols; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    container.innerHTML = tableHTML;
}