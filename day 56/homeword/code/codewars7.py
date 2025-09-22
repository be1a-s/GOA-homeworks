
"""https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python"""

# Credit Card Mask

def maskify(cc):
    text = ""
    if len(cc) < 4:
        return cc
    else:
        for i in range(1,len(cc)-3):
            text+="#"
        text += cc[-4:]
    return text