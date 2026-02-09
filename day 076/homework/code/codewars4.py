
# https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/python

# Alphabet war - airstrike - letters massacre

def alphabet_war(fight):
    list1 = list(fight)
    for i in range(len(list1)):
        if list1[i] == "*":
            if i > 0 and list1[i-1] != "*":
                list1[i-1] ="_"
            if i < len(list1)-1 and list1[i+1] != "*":
                list1[i+1] ="_"
    if list1 == []:
        return "Let's fight again!"
    l = 0
    r = 0
    for i in list1:
        if i == "m":
            r += 4
        if i == "w":
            l += 4
        if i == "q":
            r += 3
        if i == "p":
            l += 3
        if i == "d":
            r += 2
        if i == "b":
            l += 2
        if i == "z":
            r += 1
        if i == "s":
            l += 1
#         return list1
    if l == r:
        return "Let's fight again!"
    elif l > r:
        return "Left side wins!"
    elif r > l:
        return "Right side wins!"