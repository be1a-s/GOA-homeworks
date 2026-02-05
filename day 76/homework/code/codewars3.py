# https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/python

# Pokemon Damage Calculator

def calculate_damage(your_type, opponent_type, attack, defense):
    y = your_type
    o = opponent_type
    a = attack
    d = defense
    
    if y == "fire" and o == "water":
        return 50 * (a / d) * 0.5
    elif y == "fire" and o == "grass":
        return 50 * (a / d) * 2
    elif y == "fire" and o == "electric":
        return 50 * (a / d) * 1
    elif y == "fire" and o == "fire":
        return 50 * (a / d) * 0.5
    elif y == "water" and o == "fire":
        return 50 * (a / d) * 2
    elif y == "water" and o == "grass":
        return 50 * (a / d) * 0.5
    elif y == "water" and o == "electric":
        return 50 * (a / d) * 0.5
    elif y == "water" and o == "water":
        return 50 * (a / d) * 0.5
    elif y == "grass" and o == "fire":
        return 50 * (a / d) * 0.5
    elif y == "grass" and o == "water":
        return 50 * (a / d) * 2
    elif y == "grass" and o == "electric":
        return 50 * (a / d) * 1
    elif y == "grass" and o == "grass":
        return 50 * (a / d) * 0.5
    elif y == "electric" and o == "fire":
        return 50 * (a / d) * 1
    elif y == "electric" and o == "grass":
        return 50 * (a / d) * 1
    elif y == "electric" and o == "water":
        return 50 * (a / d) * 2
    elif y == "electric" and o == "electric":
        return 50 * (a / d) * 0.5