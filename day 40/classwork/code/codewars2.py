"""https://www.codewars.com/kata/59a9919107157a45220000e1/train/python"""

# Find all occurrences of an element in an array

def find_all(array, n):
    list1= []
    for i in range(len(array)):
        if array[1] == n:
                list1.append(i)
    return list1