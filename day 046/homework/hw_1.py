"""3) სიტყვების სიიდან "words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']" შეარჩიეთ მხოლოდ ისინი, რომლების სიგრძე მეტია 5-ზე, ჯერ "for"-ით, შემდეგ list comprehension-ით"""

words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']

new_words1 = []

for i in words:
    if len(i) > 5:
        new_words1.append(i)

print(new_words1)

new_words2 = [i for i in words if len(i) > 5]

print(new_words2)