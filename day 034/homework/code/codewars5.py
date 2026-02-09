"""https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python"""

# String repeat

def repeat_str(repeat, string):
    text = ""
    
    for i in range(0,repeat):
        text += string
    return text