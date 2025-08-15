"""9) სიტყვების სიაზე "words = ['ant', 'elephant', 'dog', 'giraffe']" გამოიყენეთ 'filter', რათა დატოვოთ მხოლოდ ის სიტყვები, რომლების სიგრძეა მეტი ან ტოლია 5-ის"""

words = ['ant', 'elephant', 'dog', 'giraffe']

words = list(filter(lambda x: len(x) >= 5, words))

print(words)