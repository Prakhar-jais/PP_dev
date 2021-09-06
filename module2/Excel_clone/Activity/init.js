let cellsContainer = document.querySelector(".cells");
let db ;
let sheetsDB = [];
function initCells() {

    let cellsContent = '<div class = "top-left-cell"></div>' ; //ye top left wala portion hai

    cellsContent += '<div class="top-row">'; //ye top row jo fixed rahegi
    for (let j = 0; j < 26; j++) {
    cellsContent += `<div class="top-row-cell">${String.fromCharCode(65+j)}</div>`; //fromCharCode is used to convert int value to a char on adding 65 in it
  }
  cellsContent += "</div>";


  cellsContent += '<div class="left-col">'; //ye leftmost column hai
  for (let j = 0; j < 100; j++) {
    cellsContent += `<div class="left-col-cell">${j + 1}</div>`;
  }
  cellsContent += "</div>" ;
  cellsContent += '<div class="all-cells">';
  for (let i = 0; i < 100; i++) {
    cellsContent += '<div class="row">';
    for (let j = 0; j < 26; j++) {
        cellsContent += `<div class="cell" contenteditable="true" rowid="${i}" colid="${j}"></div>`;
    }
    cellsContent += "</div>";
  }
  cellsContent += "</div";
  cellsContainer.innerHTML = cellsContent;
}


function initDB() {
    db = [];
    for (let i = 0; i < 100; i++) {
      let row = [];
      for (let j = 0; j < 26; j++) {
        // i=1
        // j=1   =>   B2
        let cellName = String.fromCharCode(65 + j) + (i + 1);
        let cellObject = {
          name: cellName,
          value: "",
          formula: "",
          childrens:[],
          parents:[]
        };
        row.push(cellObject);
      }
      db.push(row);
    }
    sheetsDB.push(db);
  }

initCells();
initDB();

