"""8) დაწერე ფუნქცია, რომელიც იღებს სიას და აბრუნებს მას შებრუნებულ მდგომარეობაში"""

list1 = ["georgia","england","argentina"]

def list_returner(list2):
    
    return  list2[::-1]

returned = list_returner(list1)

print(returned)