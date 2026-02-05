
# https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/python

# Base Conversion

def convert(input, source, target):
    b = len(source)
    num = 0 
    
    for i in input:
        num = num * b + source.index(i)
        
    if num == 0:
        return target[0]
    
    bt = len(target)
    result = ""
    
    while num > 0:
        result = target[num % bt] + result
        num //=bt
    return result