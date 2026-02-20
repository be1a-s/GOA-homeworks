
# https://www.codewars.com/kata/59f70440bee845599c000085/train/python

# Find Cracker.

def find_hack(arr):
    result = []
    
    for name, total, grades in arr:
        score = 0
        
        for grade in grades:
            if grade == "A":
                score += 30

            elif grade == "B":
                score += 20
            elif grade == "C":
                score += 10
            elif grade == "D":
                score += 5
        
        if len(grades) >= 5 and all(g in ["A", "B"] for g in grades):
            score += 20
        
        score = min(score, 200)
        
        if score != total:
            result.append(name)
    
    return result
