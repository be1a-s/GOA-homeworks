
"""https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/python"""

# Array plus array

def array_plus_array(arr1,arr2):
    list = []
    for i in arr1:
        list.append(i)
    for i in arr2:
        list.append(i)
        
    return sum(list)