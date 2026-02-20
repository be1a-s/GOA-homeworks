
# https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/python

# Binaries

def code(strng):
    result = ""
    for ch in strng:
        binary = bin(int(ch))[2:]
        k = len(binary)
        prefix = "0" * (k - 1) + "1"
        result += prefix + binary
    return result
def decode(strng):
    i = 0
    result = ""
    while i < len(strng):
        zeros = 0
        while strng[i] == "0":
            zeros += 1
            i += 1
        i += 1  
        k = zeros + 1
        binary = strng[i:i+k]
        result += str(int(binary, 2))
        i += k
    return result