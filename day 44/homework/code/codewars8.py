
"""https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python"""

# Exes and Ohs

def xo(s):
    s = s.lower()
    s = list(s)
    if "x" and "o" in s:
        if s.count("x") == s.count("o"):
            return True
        else:
            return False
    elif "x" and "o" not in s:
        return True
    
    elif "x" in s and "o" not in s:
        return False