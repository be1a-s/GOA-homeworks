
# https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/python

# Poker cards encoder/decoder

values = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]
suits = ["c","d","h","s"]

def encode(cards):
    res = []
    for card in cards:
        value = card[:-1]
        suit = card[-1]
        code = suits.index(suit) * 13 + values.index(value)
        res.append(code)
    return sorted(res)


def decode(codes):
    res = []
    for code in sorted(codes):
        suit = suits[code // 13]
        value = values[code % 13]
        res.append(value + suit)
    return res