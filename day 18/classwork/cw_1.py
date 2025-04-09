"""2) მოხმარებელს შემოატანინეთ თავისი გამოცდის ქულა, შემდეგ პირობითი განხცადების საშვალებით შეამოწმეთ ეს ქულა მეტია თუ 50-ზე, თუ მეტია დაუბეჭდეთ რომ გამოცდა ჩააბარა"""

score = int(input("enter your score: "))

if score > 50:
    if score % 2 == 0:
      print("you passed your score is even")
else :
   print("you passed your score is odd")