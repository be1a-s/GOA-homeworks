
"""https://www.codewars.com/kata/556deca17c58da83c00002db/train/python"""

# Tribonacci Sequence

def tribonacci(signature, n):
    result = signature[:]
    for i in range(3,n):
        result.append(result[i-1] + result[i-2] + result[i-3])
    return result[:n]