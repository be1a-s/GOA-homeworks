
"""https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python"""

# Replace With Alphabet Position

def alphabet_position(text):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return ' '.join(str(alphabet.index(i.lower()) + 1) for i in text if i.isalpha())