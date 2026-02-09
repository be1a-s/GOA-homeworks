"""2) შექმენით set სახელად numbers, დაამატეთ მას ორი რიცხვი add() მეთოდით და წაშალეთ ორი ელემენტი remove() მეთოდით. შემდეგ შექმენით მეორე set სახელად even_numbers და გამოიყენეთ union(), intersection(), difference() ორივე set-ზე. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი
"""

numbers = {1,2,3,4,5,6,7}

#add მეთოდს ვიყენებთ რათა set დავამატოთ რაიმე ელემენტი
numbers.add(10)
numbers.add(13)

#remove მეთოდს ვიყენებთ რათა set გამოვაკკლოთ რაიმე ელემენტი
numbers.remove(3)
numbers.remove(7)

even_numbers= {2,4,6,8,10,12}

#union არის ელემენტების შეერთება
even_numbers.union(numbers)

#intersection რათა გავიგოთ სეტებს შორის ერტნაერი ელემენტები
even_numbers.intersection(numbers)

#diferenc ვიგებთ ორ set-ს შორის განსხვავებას
print(even_numbers.difference(numbers))
