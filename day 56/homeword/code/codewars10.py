
"""https://www.codewars.com/kata/539ee3b6757843632d00026b/train/python"""

# Find the capitals

def capitals(word):
    list = [i for i,c in enumerate(word) if c.isupper()]
    return list