"""https://www.codewars.com/kata/55b42574ff091733d900002f/train/python"""

# Friend or Foe?

def friend(x):
    list1 = []
    for i in x:
        if len(i) == 4:
            list1.append(i)
    return list1