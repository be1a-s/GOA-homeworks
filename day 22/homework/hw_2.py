"""4) ახსენით რას ნიშნავს რომ list და string არის დალაგებული მიმდევრობები, კომენტარებით დაწერეთ მათ თვისებებს შორის განსხვავებები. მოიყვანეთ მაგალითები"""

"""string არის დალაგებული მიმდევრობები ეს ნიშნავს იმას რომ ამ მონაცემთა ტიპებზე შეგვიძლია მოვახდინოტ ინტერაცია და indexing-ი"""
"""მათ თვისებებს შორის განსხვავება ისაა რომ  string-ი არის immutable ხოლო list არის mmutable"""

#მაგალითად
bostneuli = ["kitri","kartofili","salatis fotoli","stafilo"]

print(bostneuli[0])

name = "beqa"

print(name[0])
#ეს შეგვიძლია გავაკეთოთ list-ზეც და string-ზეც

bostneuli1 = ["xaxvi","kartofili","niori","stafilo"]

bostneuli1[0] = "kitri"
bostneuli1[2] = "salatis fotoli"
#მაგრამ ესე მხოლოდ შეგვიძლია გავაეთოთ list-ზე ეს კი იმას ნიშნავს რომ list არის mmutable
