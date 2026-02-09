
"""https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python"""

# Fake Binary

def fake_bin(x):
    x2 = ""
    for i in x:
        if int(i) < 5:
            x2 += "0"
        else:
            x2 += "1"
    return x2