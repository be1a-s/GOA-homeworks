"""3) დაწერეთ ფუნქცია, რომელიც იღებს set-ს, ამატებს მას 3 ელემენტს add() მეთოდით, შემდეგ შლის ერთ ელემენტს remove() მეთოდით და აბრუნებს საბოლოო შედეგს"""

def set_remeiker(set,add1,add2,add3,remove):
    set.add(add1)
    set.add(add2)
    set.add(add3)
    set.remove(remove)
    return set 