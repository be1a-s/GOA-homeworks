
"""https://www.codewars.com/kata/514b92a657cdc65150000006/train/python"""

# Multiples of 3 or 5

def solution(number):
    if number < 0 :
        return 0
    return sum(i for i in range(number) if i % 3 ==0 or i % 5 ==0)