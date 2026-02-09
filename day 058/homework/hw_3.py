"""5) შექმენით Fighter კლასი და გაუწერეთ ატრიბუტები health, damage, speed და მეთოდი heal. შემდეგ მისგან მემკვიდრეობით შექმენით 2 კლასი Archer და Mage. დაამატეთ შესაბამისი ატრიბუტები range, reload და spell, mana. შემდეგ ამ კლასებით შექმენით მოცემული ობიექტები და კიდევ რამდენიმე თქვენით მოიფიქრეთ

ninja
samurai
viking
warrior
veteran
tribesman
necromancer"""

class Fighter:
    def __init__(self,health,damage,speed,heal):
        self.health = health
        self.damage = damage
        self.speed = speed
        self.heal = heal

    

class archer(Fighter):
    def __init__(self, health, damage, speed, heal,range,reload):
        super().__init__(health, damage, speed, heal)
        self.range = range
        self.reload = reload

class mage(Fighter):
    def __init__(self, health, damage, speed, heal,spell,mana):
        super().__init__(health, damage, speed, heal)
        self.speell = spell
        self.mana = mana

ninja = Fighter(100,20,30,15)
samurai = mage(100,20,30,15,"katana",100)
viking = archer(100,20,30,15,50,2)
warrior = Fighter(200,40,50,20)


