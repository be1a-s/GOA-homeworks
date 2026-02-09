
# https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python

# Who has the most money?

def most_money(students):
    max_money = -1
    richest = None
    same_count = 0

    for s in students:
        total = s.fives * 5 + s.tens * 10 + s.twenties * 20

        if total > max_money:
            max_money = total
            richest = s.name
            same_count = 1
        elif total == max_money:
            same_count += 1

    if same_count > 1:
        return "all"
    return richest