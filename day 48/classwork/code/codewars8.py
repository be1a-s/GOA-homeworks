
"""https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python"""

# Abbravite a Two Word Name

def abbrev_name(name):
    first,last = name.split()

    resoult = f"{first[0].upper()}.{last[0].upper()}"
    return resoult