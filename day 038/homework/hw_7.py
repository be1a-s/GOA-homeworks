"""9) შექმენით სია და გადაიყვანეთ tuple-ად tuple() ფუნქციის გამოყენებით, შემდეგ კი გადაიყვანეთ უკან list()-ით. დაბეჭდეთ ყველა შედეგი და დაუმატეთ კომენტარები რას აკეთებს თითოეული"""

list1 = ["apple", "banana", "watermelon","strawbery","cheri","apple",]
print(list1)

#tuple ფუნქცია ჩვეულებრივ სიას გადააქცევს tuple
list1 = tuple(list1)
print(list1)

#list ფუნქცია  tuple გადააქცევს ჩვეულებრივ სიად
list1 = list(list1)
print(list1)
