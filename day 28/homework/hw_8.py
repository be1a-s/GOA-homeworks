"""10) მოცემული სიაა: ["georgia", "aRMENIA", "greeCE"]. ყველა ელემენტს ჯერ გაუკეთეთ lower, შემდეგ capitalize და დაბეჭდეთ"""

countries = ["georgia", "aRMENIA", "greeCE"]

for i in countries:
    i = i.lower()
    i = i.capitalize()
    print(i)
