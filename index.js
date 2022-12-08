const table = document.createElement('table');
document.body.prepend(table);
let addTable = 1;

for (let addTd = 0; addTd < 10; addTd ++) {
    const td = document.createElement('td');
    table.append(td);

    for (let addTr = 0; addTr < 10; addTr++) {
        const tr = document.createElement('tr');
        td.append(tr);
        tr.innerText = `${addTable}`;
        addTable++;
    }
}