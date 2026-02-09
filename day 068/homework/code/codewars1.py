
"""https://www.codewars.com/kata/555eded1ad94b00403000071/train/python"""

# Sum of the first nth term of Series

def series_sum(n):
    if n == 0 :
        return "0.00"
    num = 0
    for i in range(n):
        num += 1 / (1 + 3 * i)
    return f"{num:.2f}"