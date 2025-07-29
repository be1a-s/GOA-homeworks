"""6) სიიდან "animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']" შექმენით ახალი სია, რომელიც შეიცავს სიტყვების პირველ ასოებს, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ აირჩიეთ მხოლოდ ის სიტყვები, რომლებიც "e"-ზე იწყება"""

animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']

words_first_latters = []


for i in animals:
    words_first_latters.append(i[0])

print(words_first_latters)

words_first_latters1 = [i[0] for i in animals]

print(words_first_latters1)

animals_e = [i for i in animals if i[0] == "e"]

print(animals_e)