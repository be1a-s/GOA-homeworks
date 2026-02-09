
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    let list1 = [s1,s2,s3]
    let a  = 0
    for (i of list1){
      a = a+i
    }
    let ava = a / 3
    if (ava >= 90 && ava <= 100){
      return "A"
    }
    else if (ava >= 80 && ava < 90){
      return "B"
    }
    else if (ava >= 70 && ava < 80){
      return "C"
    }
    else if (ava >= 60 && ava < 70){
      return "D"
    }
    else{
      return "F"
    }
}