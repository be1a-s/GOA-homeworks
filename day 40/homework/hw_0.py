"""შეასრულეთ 3 მაგალითი ყველა მეთოდზე: split, join, replace, strip"""

num = "1 2 3 4 5 6 7 8"
# split
print(num.split(" "))
print(num.split(","))
print(num.split(" , "))

# join
print(",".join(num))
print("asvhg".join(num))
print(" ".join(num))


# replace
print(num.replace(1,3))
print(num.replace(2,5))
print(num.replace(3,6))

# strip 
print(num.strip(","))
print(num.strip(" "))
print(num.strip("'"))