
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// Complementary DNA

function dnaStrand(dna){
    let dna2 = ""
    for (i of dna){
      if (i === "A"){
        dna2 = dna2 + "T"
      }
      else if (i === "T"){
        dna2 = dna2 + "A"
      }  
      else if (i === "G"){
        dna2 = dna2 + "C"
      } 
      else if (i == "C"){
        dna2 = dna2 + "G"
      }     
    }
    return dna2
  }