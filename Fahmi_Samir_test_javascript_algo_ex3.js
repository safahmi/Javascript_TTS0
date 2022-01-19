// F31
function checkAllLines(array2D) {
  let AreCorrectsAllLines = true;
  for (let i = 0; i < array2D.length; i++) {
    let line = array2D[i];
    let isValidLine = isValidSingleLine(line);
    if (!isValidLine) {
      //Met dans errorLine : une ligne où il y a une erreur avec son numéro de ligne, la mention "incorrect" et les valeurs de cette ligne
      AreCorrectsAllLines = true;
      let errorLine = new Array();
      errorLine = errorLine.concat("Line " + (i + 1) + " incorrect");
      errorLine = errorLine.concat(line);
      let table = document.querySelector("#errors");
      generateTable1D(table, errorLine);
    }
  }
  return AreCorrectsAllLines;
}

//Transforme une colonne donnée d'un tableau 2D en une ligne
function extractColumn(array2D, colIndex) {
  let col = new Array();
  for (let i = 0; i < array2D.length; i++) {
    col[i] = array2D[i][colIndex];
  }
  return col;
}

// F32
function checkAllColumns(array2D) {
  let AreCorrectsAllColumns = true;
  for (let j = 0; j < array2D.length; j++) {
    let column = extractColumn(array2D, j);
    let isValidColumn = isValidSingleLine(column);
    if (!isValidColumn) {
      //Met dans errorColumn : la colonne extraite (ligne 29 du code) où il y a une erreur avec son numéro de colonne, la mention "incorrect" et les valeurs de cette colonne
      AreCorrectsAllColumns = false;
      let errorColumn = new Array();
      errorColumn = errorColumn.concat("Column " + (j + 1) + " incorrect");
      errorColumn = errorColumn.concat(column);
      let table = document.querySelector("#errors");
      generateTable1D(table, errorColumn);
    }
  }
  return AreCorrectsAllColumns;
}

//Transforme une région d'index donnée d'un tableau 2D en une ligne
function extractRegion(array2D, regIndex) {
  let reg = new Array();
  let iInitial = 0;
  let jInitial = 0;
  if (1 <= regIndex && regIndex <= 3) {
    iInitial = 0;
  } else if (4 <= regIndex && regIndex <= 6) {
    iInitial = 3;
  } else {
    iInitial = 6;
  }
  if (regIndex == 1 || regIndex == 4 || regIndex == 7) {
    jInitial = 0;
  } else if (regIndex == 2 || regIndex == 5 || regIndex == 8) {
    jInitial = 3;
  } else {
    jInitial = 6;
  }
  for (let i = iInitial; i <= iInitial + 2; i++) {
    for (let j = jInitial; j <= jInitial + 2; j++) {
      reg = reg.concat(array2D[i][j]);
    }
  }
  return reg;
}

// F33
function checkAllRegions(array2D) {
  let AreCorrectsAllRegion = true;
  for (let reg = 0; reg < array2D.length; reg++) {
    let region = extractRegion(array2D, reg + 1);
    let isValidRegion = isValidSingleLine(region);
    if (!isValidRegion) {
      //Met dans errorRegion : la region extraite (ligne 72 du code) où il y a une erreur avec son numéro de région, la mention "incorrect" et les valeurs de cette région
      AreCorrectsAllRegion = false;
      let errorRegion = new Array();
      errorRegion = errorRegion.concat("Region " + (reg + 1) + " incorrect");
      errorRegion = errorRegion.concat(region);
      let table = document.querySelector("#errors");
      generateTable1D(table, errorRegion);
    }
  }
  return AreCorrectsAllRegion;
}

//Affiche dans un second tableau les lignes, colonnes ou régions contenant des erreurs une fois la page HTML chargée
document.addEventListener("DOMContentLoaded", (event) => {
  const AreCorrectsAllLines = checkAllLines(array2DToCheck);
  const AreCorrectsAllColumns = checkAllColumns(array2DToCheck);
  const AreCorrectsAllRegion = checkAllRegions(array2DToCheck);
  if (AreCorrectsAllLines && AreCorrectsAllColumns && AreCorrectsAllRegion) {
    let table = document.querySelector("#errors");
    generateTable1D(table, ["Sudoku is correct"]);
  }
});
