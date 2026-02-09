
"""https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python"""

# Create Phone Number

def create_phone_number(n):
    return f"({str(n[0])+str(n[1])+str(n[2])}) {str(n[3])+str(n[4])+str(n[5])}-{str(n[6])+str(n[7])+str(n[8])+str(n[9])}"