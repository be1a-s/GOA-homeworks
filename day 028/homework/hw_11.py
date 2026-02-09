"""13) შექმენით სტრინგი და შემოიტანეთ საძიებელი სიტყვა input-ით. თუ სიტყვა მოიძებნება find-ით, დაბეჭდეთ პოზიცია, სხვა შემთხვევაში კი დაბეჭდეთ word not found"""

string =  "goa is the best academy in the word"

text = input("enter word to find: ")

if string.find(text) != -1:
    print(string.find(text))
else:
    print("word not found")

      

