
"""https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python"""

# Convert number to reversed array of digits

def digitize(n):
    nums = str(n)
    nums = nums[::-1]
    list1 = []
    for i in nums:
        list1.append(int(i))
    return list1