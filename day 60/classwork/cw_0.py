"""1) შექმენით account კლასი რომელშიც გექნებათ ერთი protected და private ატრიბუტები და მეთდები. დაამატეთ ერთი კლასის მეთოდი რომელიც დაითვლის ამ კლასის მატარებლი ობიექტების რაოდენობას. კომენტარებით დაწერეთ protected და private ატრიბუტების განმარტება და ასევე კლასს და სტატიკიური მეთოდების დანიშნულება"""

class account:
    _count=0

    def __init__(self,name):
        self.name = name
        self._protected = "protected"
        self.__secret= "secret"
        account._count +=1

    @classmethod
    def get_count(cls):
        return cls._count
    
item = account("item")

print(account.get_count())

#protected ატრიბუტი მისი გამოყენება არ შეგვიძლია კლასის გარეთ მხოლოდ კლასის შიგნით ან მემკვიდრეობით კლასებში
#private ატრიბუტი იწყება __ - ით მისი სახელი დამალულია კლასის გარეთ არ შეიძლება მისი გამოყენება