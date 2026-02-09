"""5) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები"""

code = 1975

past_code = " "

mcdeloba = 0

while past_code != code:
    past_code =  int(input("enter the code: "))
    mcdeloba += 1
    if mcdeloba == 3:
        print("Access Denied")
print("Access Granted")