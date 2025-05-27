"""6) შექმენით ფუნქცია calculate_area, რომელსაც გადაეცემა ორი რიცხვი — სიგრძე და სიგანე. ფუნქციამ უნდა გამოთვალოს მართკუთხედის ფართობი და return-ით დააბრუნოს შედეგი ისე, რომ შემდეგ მისი გამოყენება შეიძლებოდეს სხვა ადგილას, მაგალითად, დაბეჭდვაში"""

def calculate_area(width, height):
    s = width * height
    return s

fartobi = calculate_area(5, 8)

print(fartobi)

