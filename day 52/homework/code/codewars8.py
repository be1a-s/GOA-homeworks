
"""https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python"""

# Remove the minimum

def remove_smallest(numbers):
    numbers2 = numbers.copy()
    if numbers2 == []:
        return []
    numbers2.remove(min(numbers2))
    return numbers2