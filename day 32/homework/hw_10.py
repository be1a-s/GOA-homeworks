"""12) დაწერე ფუნქცია, რომელიც იღებს სიტყვების სიას და აბრუნებს სიის ყველაზე გრძელ სიტყვას. გამოიყენე ციკლი და 'len()' შედარებისთვის"""

list1 = ["georgia","england","argentina"]

def list_max(list):

    max_word =list[0]
    for i in list:
        if len(i) > len(max_word):
            max_word = i
    return max_word
  
list2 = list_max(list1)

print(list2)