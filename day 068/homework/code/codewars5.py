
"""https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python"""

# Remove duplicate words

def remove_duplicate_words(s):
    s1 = s.split()
    s2 = []
    s3 = ""
    for i in s1:
        if i not in s2:
            s2.append(i)
    for i in s2:
        s3 += i + " "
        
    s3 = s3[0:-1]   
    return s3