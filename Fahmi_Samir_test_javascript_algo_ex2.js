// F21
function isValidSingleLine(singleLine){
//Correspond au cas où il un nombre est manquant ou un nombre est rajouté
    if(singleLine.length !== 9){
        return false;
    }
    const isDuplicated = (new Set(singleLine)).size !== singleLine.length;
    if(isDuplicated){
        return false;
    }
//Contrôle qu'il n'y pas de nombre plus petit que 1 ou plus grand que 9 ou un autre type que "number"
    for(let elem of singleLine){
        if(elem < 1 || elem > 9 || typeof(elem) !== "number"){
            return false;
        }
    }
    return true;
}

/*
const testValid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testDuplic = [1, 2, 3, 4, 5, 3, 7, 8, 9];
const testZero = [1, 2, 0, 4, 5, 3, 7, 8, 9]
const testTen = [1, 2, 3, 4, 5, 10, 7, 8, 9]
console.log(`test valide: ${isValidSingleLine(testValid)}`);
console.log(`test duplic: ${isValidSingleLine(testDuplic)}`);
console.log(`test zero: ${isValidSingleLine(testZero)}`);
console.log(`test ten: ${isValidSingleLine(testTen)}`);
*/