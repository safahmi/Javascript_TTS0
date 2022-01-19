// Transforme un tableau 1D en tableau 2D (array to check) (F11)
function transformArray1DTo2D(array1D) {
  const array2DToCheck = new Array();
  for (let i = 0; i < array1D.length; i++) {
    array2DToCheck[i] = new Array();
    let arrayLinei = array1D[i].split(" ");
    for (let j = 0; j < array1D.length; j++) {
      array2DToCheck[i][j] = parseInt(arrayLinei[j]);
    }
  }
  return array2DToCheck;
}

// Crée un tableau HTML contenant un tableau 2D (F12)
function generateTable2D(table, array2D) {
  for (let array1D of array2D) {
    generateTable1D(table, array1D);
  }
}

//Crée un tableau HTML d'une ligne
function generateTable1D(table, array1D) {
  let row = table.insertRow();
  for (gridNum of array1D) {
    let cell = row.insertCell();
    let text = document.createTextNode(gridNum);
    cell.appendChild(text);
  }
}

const array2DToCheck = transformArray1DTo2D(array_number);

// Permet de lancer le code uniquement quand la page HTML est chargé
document.addEventListener("DOMContentLoaded", (event) => {
  let table = document.querySelector("#sudoku");
  generateTable2D(table, array2DToCheck);
});
