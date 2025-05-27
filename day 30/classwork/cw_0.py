"""1) თითოეულ მეთოდზე: len, append, insert, pop, remove მეთოდებზე გააკეთეთ 3-3 მაგალითი. len ფუნქციაზე მოიყვანეთ string-ის მაგალითიც"""

numbers = [1,2,3,4]

numbers.append(5)
print(numbers)

numbers.append(6)
print(numbers)

numbers.append(7)
print(numbers)


numbers.insert(2,11)
print(numbers)

numbers.insert(3,9)
print(numbers)

numbers.insert(4,12)
print(numbers)


numbers.pop(0)
print(numbers)

numbers.pop(1)
print(numbers)

numbers.pop(2)
print(numbers)

numbers.remove(5)
print(numbers)

numbers.remove(3)
print(numbers)

numbers.remove(4)
print(numbers)

name = "goa best"

print(len(name))
print(len(numbers))