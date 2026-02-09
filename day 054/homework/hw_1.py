"""3) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის სტრინგებს 'args'-ით და დააბრუნებს ყველა სტრინგი გაერთიანებულად"""

def Concadination(*args):
    text = ""
    for i in args:
        text += i

    return text

print(Concadination("saba","neqa"))
