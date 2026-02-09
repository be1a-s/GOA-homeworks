// https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript

// Alphabet war - airstrike - letters massacre

function alphabetWar(fight)
{
  let list1 = fight.split("")
  let l = list1.length;
  for(let i=0;i<l;i++){
    if(list1[i] === "*"){
        if (i > 0 && list1[i-1] !== "*"){
                list1[i-1] =""
      }
        if (i < l-1 && list1[i+1] !== "*"){
                list1[i+1] =""
      }
      list1[i] = ""
    }
  }
  if (list1.length === 0){
    return "Let's fight again!"
  }
  let l1 = 0
  let r = 0
  
  for (let i of list1){
    if (i === "m"){
      r += 4
    }
    else if (i === "w"){
      l1 += 4
    }
    else if (i === "q"){
      r += 3
    }
    else if (i === "p"){
      l1 += 3
    }
    else if (i === "d"){
      r += 2
    }
    else if (i === "b"){
      l1 += 2
    }
    else if (i === "z"){
      r += 1
    }
    else if (i === "s"){
      l1 += 1
    }
  }
  if (l1 === r){
    return "Let's fight again!"
  }else if (l1 > r){
    return "Left side wins!"
  }else if (r > l1){
    return "Right side wins!"
  }    
  return "Let's fight again!"
}