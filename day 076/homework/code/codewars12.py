
# https://www.codewars.com/kata/513e08acc600c94f01000001/train/python

# RGB To Hex Conversion

def rgb(r, g, b):
    def clamp(x):
        return max(0, min(255, x))

    return "{:02X}{:02X}{:02X}".format(clamp(r), clamp(g), clamp(b))