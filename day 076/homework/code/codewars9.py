
# https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python

# Directions Reduction

def dir_reduc(arr):
    opposite = {
        "NORTH":"SOUTH",
        "SOUTH":"NORTH",
        "EAST":"WEST",
        "WEST":"EAST"
    }
    
    stack = []
    for d in arr:
        if stack and opposite[d] ==stack[-1]:
            stack.pop()
        else:
            stack.append(d)
    return stack