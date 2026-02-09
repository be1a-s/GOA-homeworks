"""https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python"""

# Sum of positive

def positive_sum(arr):
    list1 = [] 
    for i in arr:
        if  i > 0:
            list1.append(i)
    return sum(list1)