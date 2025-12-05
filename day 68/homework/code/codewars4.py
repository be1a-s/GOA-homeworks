
"""https://www.codewars.com/kata/5663f5305102699bad000056/train/python"""

# Maximum Length Difference

def mxdiflg(a1, a2):
    if a1 == [] or a2 == []:
        return -1
    max1 = len(max(a1 , key=len)) 
    min1 = len(min(a1 , key=len))
    max2 = len(max(a2 , key=len))
    min2 = len(min(a2 , key=len)) 
    
    return max(abs(max1-min2),abs(max2-min1))