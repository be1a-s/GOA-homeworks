"""4) ახსენით კომენტარებით როგორ მუშაობს: lower, upper, capitalize მეთოდები"""

"""მაგალითად"""

name = "Beqa"

"""ჩვენ გამოვიყენებთ lower ფუნქციას რათა ჩვენი სახელი დავწეროთ მთლიანად პატარა ასოებით"""

name = name.lower()
print(name)

"""ასე გამოიყენება სამივე მათგანი lower ფუნქცია სტრინგის ყველა ასოს აპატარავებს upper ფუნქცია სტირნგის ყველა ასოს ადიდებს
და capitalize მხოლოდ სიტყვის პირველ ასოსო ადიდებს """

#upper
name = name.upper()
print(name)

#capitalize
name = name.capitalize()
print(name)