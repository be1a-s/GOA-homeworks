"""4) შექმენით 5 ცვლადი, რომლებშიც შეინახავთ განსხვავებულ ლოგიკურ და შედარების ოპერაციათა შედეგებს (უნდა იყოს შედარების და
ლოგიკური ოპერატორები ერთად მაგალითად temperature > 30 and not cloudy), გვერდზე კომენტარის საშვალებით მიუწერეთ ეს შედეგი 
(boolean მნიშვნელობა) აიღეთ მრავალფეროვანი კომბინაციები"""

temperature = 50

wether = " sunny"

option1 = temperature > 35  and  "sunny" #True and True = True

option2 = temperature <= 5 or "cloudy" #False or False = False

option3 = temperature <0 and  "snowy" #False or False = False

option4 = temperature <=30 or not "cloudy"  #True and False = True

option5 = temperature <= 0 or  "sunny" #False or True = True