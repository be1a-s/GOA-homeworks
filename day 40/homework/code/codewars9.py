"""https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python"""

# Isograms

def is_isogram(string):
    string = string.lower()
    list1 = list(string)
    for i in list1:
        if list1.count(i) > 1:
            return False
    return True