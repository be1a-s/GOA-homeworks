
"""https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python"""

# Number of People in the Bus

def number(bus_stops):
    num = 0
    for i in bus_stops:
        num += i[0]-i[1]
    return num