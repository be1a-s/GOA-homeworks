"""6) მომხმარებელს შემოატანინეთ ქულა score და შეინახეთ ცვლადში, როგორც integer.
შემდეგ, ქულის მიხედვით განსაზღვრეთ შეფასება (grade):
A  თუ score მეტია 80-ზე
B  თუ score მეტია 60-ზე
C  თუ score მეტია 40-ზე
D  თუ score მეტია 20-ზე
F  თუ score 20-ზე ნაკლებია"""

score = int(input("enter your score: "))

if score > 80:
    print("your grade is A")
elif score > 60:
    print("your grade is B")
elif score > 40:
    print("your grade is C")
elif score > 20:
    print("your grade is D")
else:
    print("your grade is F")