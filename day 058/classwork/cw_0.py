"""1) დაწერეთ რა არის scope თქვენი სიტყვებით და მოიყვანეთ 3 მაგალითი"""

""" scope - არის რაიმე ფუნქციის ხილვადობა თუ რამანძლზეაქვს მას წვდომა მთვარ კოდში"""

def outer_scope():
    name = "beqa"
    def inner_scope():
        age = 14
        print(name , age)
    inner_scope()