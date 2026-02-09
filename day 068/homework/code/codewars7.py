
"""https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python"""

# Split Strings

def solution(s):
    s1 = []
    l = len(s)
    if l > 3 and l %2 == 0:
        for i in range(2, l+1 ,2):
            s1.append(s[i-2:i])
    elif l > 3 and l %2 != 0:
        for i in range(2, l+1 ,2):
            s1.append(s[i-2:i])
        s1.append(f"{s[-1]}_")
    elif l == 0:
        return []
    elif l < 2:
        s1.append(f"{s[0]}_")
    elif l == 3:
        s1.append(f"{s[0:2]}")
        s1.append(f"{s[-1]}_")
    elif l == 2:
        s1.append(f"{s[0:2]}")
    return s1