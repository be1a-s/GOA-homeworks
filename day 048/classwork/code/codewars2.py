
"""https://www.codewars.com/kata/54edbc7200b811e956000556/train/python"""

# Counting Sheep...

def count_sheeps(sheep):
    list1 = [i for i in sheep if i == True]
    return len(list1)