
"""https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python"""

# Anagram Detection

def is_anagram(test, original):
    if sorted(test.lower())== sorted(original.lower()):
            for i in sorted(original):
                if i in test:
                    continue
            return True
    return False