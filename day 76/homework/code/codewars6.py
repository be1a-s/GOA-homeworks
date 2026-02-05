
# https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python

# Twisted Sum

def compute_sum(n):
    num = 0
    for i  in range(1, n+1):
        if len(str(i)) > 1:
            for b in str(i):
                num += int(b)
        else:
            num += i
    return num