
"""https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python"""

# Categorize New Member

def open_or_senior(data):
    list2 = []
    list1 = [list(i)for i in data]
    
    for i in list1:
        if i[0] >= 55 and i[1] > 7:
            list2.append("Senior")
        else:
            list2.append("Open")
    return list2