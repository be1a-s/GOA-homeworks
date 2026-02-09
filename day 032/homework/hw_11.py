"""13) დაწერე ფუნქცია, რომელიც იღებს რიცხვს 'n' და აბრუნებს სიას 1-დან 'n'-ის ჩათვლით ყველა ლუწი რიცხვით. გამოიყენე for ციკლი და if-else"""

def numbers(n):
    list1 = []
    for i in range(1,n+1):
        if i % 2 == 0:
           list1.append(i)
    return list1

even_numbers = numbers(10)

print(even_numbers)
        