
"""https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python"""

# Find the vowels

def vowel_indices(word):
    word = word.lower()
    text = "aeiouy"
    list = [i+1 for i, c in enumerate(word) if c in text]
    return list
    