"""3) შექმენით Library კლასი, რომელსაც ექნება protected ატრიბუტი _books და private ატრიბუტი __secretCode. დაამატეთ სტატიკური მეთოდი, რომელიც დააბრუნებს წიგნის დაგვიანების ჯარიმის გამოთვლილ მნიშვნელობას. კომენტარებით მიუთითეთ კლასისა და სტატიკური მეთოდის განსხვავება"""

class Library: 
    def __init__(self,books,secretCode):
        self._books = books
        self.__secretCode = secretCode


