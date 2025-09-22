"""1) შექმენით პროდუქტების dictionary. შემდეგ გაფილტრეთ ეს dictionary და დატოვეთ ის პროდუქტები რომელთა ფასი ნაკლებია 100-ზე. \
საბოლოოდ დაბეჭდეთ ეს dict"""

dictionary = {
    "apple" : 120,
    "banana" : 80,
    "grape" : 200 
}

dictionary2 = dict(filter(lambda x: x[1] < 100, dictionary.items()))

print(dictionary2)