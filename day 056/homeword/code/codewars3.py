
"""https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/python"""

# Sum without highest and lowest number

def sum_array(arr):
    list=[]
    if arr == [] or arr == None or len(arr) <2:
        return 0
    else:
        for i in arr:
            list.append(i)
    list.remove(min(list))
    list.remove(max(list))
    return sum(list)