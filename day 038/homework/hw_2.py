"""4) შექმენით სიები fruits, colors, numbers. თითოეულზე გამოიყენეთ index, count, sort, sorted, min, max მეთოდები & ფუნქციები და დააკომენტარეთ თითოეული მაგალითი (რას აკეთებს)"""

list2 = ["fruits", "colors", "numbers"]

#sort ინტეჯერ სიაას ალაგებს ზრდის მიხედვით (მუშაობს მხოლოდ integer ტიპთნ)
list1 = [3,2,1]
list1.sort()
print(list1)

#index არკვევს სიაში რომელ index-ზე დგას ელემენტი
print(list2.index("numbers"))

#count ფუნქცია ითვლის რამდენჯერ გვხდება მითთებული ელემენტი სიაში
print(list2.count("colors"))

#sorted ალაგებს ინტეჯერ სიაას  ზრდის მიხედვით ხოლო სტრინგ ტიბების სიას ანბანის მიხედვით
print(sorted(list2))

#min ადგენს სიაში ყველაზე პატარას
print(min(list2))

#max ადგენს სიაში ყველაზე მაღალს
print(max(list2))