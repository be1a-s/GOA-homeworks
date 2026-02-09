"""8) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem() მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები"""

def dictionary(dic):
    dic1 = {
        'age': 14
    }
    dic.update(dic1)
    dic.popitem()
    print(f"renew dictionary {dic}")
