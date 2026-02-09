"""https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python"""

# Remove duplicates from list

def distinct(seq):
    list1 = []
    for i in seq:
        if i not in list1:
            list1.append(i)
    return list1