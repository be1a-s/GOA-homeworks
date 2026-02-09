"""2) შექმენით Student კლასი, რომელსაც ექნება protected ატრიბუტი _grade და private ატრიბუტი __id. დაამატეთ კლასის მეთოდი, რომელიც დაითვლის რამდენი სტუდენტი შეიქმნა ამ კლასიდან. კომენტარებით განმარტეთ protected და private ატრიბუტების დანიშნულება"""

class student:
    _count = 0
    def __init__(self,grade,id):
        self._grade = grade
        self.__id = id
        count+=1
        student._count +=1

    @classmethod
    def get_count(cls):
        return cls._count
    
item = student("item")

print(student.get_count())
        

#protected - რისი საშუალებითაც შეგვიძლია დავიცვათ ატრიბუტი კლასის გარეთ გამოყენებისგან
#private - მისი დანიშნულებაა რომ დამალოს ატრიბუტის სახელი ასევე კლასის გარეთ არგამოიყენება