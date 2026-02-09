
# https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/python

# Same matrix (2 * 2)

def count_different_matrices(matrices):
    u = []
    
    for m in matrices:
        a,b,c,d = m
        
        rotations = [
            [a,b,c,d],
            [c,a,d,b],
            [d,c,b,a],
            [b,d,a,c]
        ]
        found = False
        for i in u:
            if i in rotations:
                found = True
                break
        if not found:
            u.append(m)
    return len(u)