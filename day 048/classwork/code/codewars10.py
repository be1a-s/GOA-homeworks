
"""https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python"""

# A Needle in the Haystack 

def find_neendle(haystack):
    for i in range(len(haystack)):
        if haystack[i] == "needle":
            return f"found the needle at position {i}"