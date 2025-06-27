"""2) შექმენით manual_max ფუნქცია რომელსაც პარამეტრად გადაეცემა სია და აბრუნებს ყველაზე დიდ მნიშვნელობას. ასევე შექმენით manual_len ფუნქცია რომელიც თვლის გადაცემული მიმდევრობის სიგრძეს"""

def manual_max(arr):
    bigest = arr[0]
    for num in arr:
        if num > bigest:
           bigest = num
    return bigest

print(manual_max([5,9,8]))

def manual_len(arr):
    num = 0
    for i in arr:
        num +=1
    return num

print(manual_len([1,2,3,4,5,6]))
