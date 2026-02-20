
// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

// Matrix Transpose 

function transpose(matrix) {
  return matrix[0].map((_, colindex) => 
     matrix.map(row => row[colindex])                  
  );
}