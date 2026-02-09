"""https://www.codewars.com/kata/582e0e592029ea10530009ce/train/python"""

# Duck Duck Goose

def duck_duck_goose(players, goose):
    amount = len(players)
    if goose > amount:
         goose = goose % amount 
            
    return players[goose - 1].name
    