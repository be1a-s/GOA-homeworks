
"""https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python"""

# Check the exam

def check_exam(arr1,arr2):
    num = 0
    for i in range(0,4):
        if arr2[i] == "":
            num -=1
            num+=1
        elif arr1[i] == arr2[i]:
            num+=4
        elif arr1[i] != arr2[i]:
            num -= 1
    if num < 0:
        num = 0
    return num