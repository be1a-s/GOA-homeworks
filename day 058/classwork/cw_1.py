"""2) შექმენით Fighter კლასი და გაუწერეთ მინიმუმ 3 ატრიბუტი, შემდეგ შექმნით ამ კლასის 3 ინსტანცია და დაბეჭდეთ ერთ-ერთის თვისებები. დაწერეთ ობიექტზე ორინეტირებული პროგრამირება"""

class Fighter:
    def __init__(self,health,speed,damage):
        self.speed = speed
        self.health = health
        self.damage = damage

tribesman = Fighter(50,10,40)
goblins = Fighter(60,15,70)
king = (60,10,100)

print(f"Health {tribesman.health}, Speed {tribesman.speed}, Damage {tribesman.damage}")