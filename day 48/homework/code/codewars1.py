
"""https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python"""

# Are You Playing Banjo?

def are_you_playing_banjo(name):
    start = name[0].lower()
    
    if start == "r":
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"