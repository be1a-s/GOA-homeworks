"""6) Bonus დავალება
შექმენით პროგრამა, რომელიც განსაზღვრავს productive ცვლადის მნიშვნელობას შემდეგი პირობების მიხედვით:
read_pages ცვლადში ინახება წაკითხული გვერდების რაოდენობა (მთლიანი რიცხვი).
free_time ცვლადში ინახება boolean მნიშვნელობა (True/False), რომელიც გვიჩვენებს, ჰქონდა თუ არა თავისუფალი დრო.
productive ცვლადი იქნება ჭეშმარიტი (True), თუ მოსწავლემ წაიკითხა მინიმუმ 20 გვერდი და თავისუფალი დრო ჰქონდა."""



read_pages = int(input("enter your read pages number: "))

free_time = read_pages >= 30  and  read_pages <60

productiv = read_pages  <= 30 or   read_pages >20

print(bool(free_time))
print(bool(productiv))