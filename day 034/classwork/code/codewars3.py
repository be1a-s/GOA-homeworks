"""https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python"""

# Vowel Count

def get_count (sentence): 
    result = "" 
 
    for i in sentence: 

        if i == "a": 
            result += "a" 

        elif i== "e": 
            result += "e" 
 
        elif i== "u": 
            result += "U" 

        elif i== "i":
            result += "i" 

        elif i== "o": 
            result += "o" 
        
    return len(result)