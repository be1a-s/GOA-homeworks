"""14) დაწერე ფუნქცია, რომელიც იღებს სტრიქონს და აბრუნებს მასში ხმოვნების (a, e, i, o, u) რაოდენობას. გამოიყენე ციკლი და if-else"""

def vowel(text):
   
    result = ""

    for i in text:
        if i == "a":
            result += "a"
        elif i== "e":
            result += "e"
        elif i== "u":
            result += "u"
        elif i== "i":
            result += "i"
        elif i== "o":
            result += "o"
        elif i== "A":
            result += "A"
        elif i== "E":
            result += "E"
        elif i== "I":
            result += "I"
        elif i== "O":
            result += "O"
        elif i== "U":
            result += "U"
        
    return len(result)

text_resoult = vowel("goa best")

print(text_resoult)
    
