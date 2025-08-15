
"""https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python"""

# Grasshopper - Grade book

def get_grade(s1, s2, s3):
    list = [s1,s2,s3]
    avarage = sum(list) / len(list)
    
    if avarage >= 90 and avarage <= 100:
        return "A"
    elif avarage >= 80 and avarage < 90:
        return "B"
    elif avarage >= 70 and avarage< 80:
        return "C"
    elif avarage >= 60 and avarage < 70:
        return "D"
    else:
        return "F"