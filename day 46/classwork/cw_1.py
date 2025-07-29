"""2) შექმენით რიცხვების სია, შემდეგ ყოველი რიცხვი რომელიც კენტია გაამრავლეთ ორზე და დაამატეთ new_list-ში, ჯერ გააკეთეთ ეს დავალება ჩვეულებრივად, შემდეგ კი list comperhensiosns გამოყენებით. ასევე გააკეთეთ კიდევ 2 მაგალითი თქვენით, პირველ მაგალითში აიღეთ მხოლოდ გამოსახულების დამატება list comperhensions-ში, მეორე მაგალითში კი აიღეთ მხოლოდ პირობა"""


numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

nums = []

for i in numbers:
    if i % 2 != 0:
        nums.append(i*2)

print(nums)

nums1 = [num * 2 for num in numbers if num % 2 != 0]
print(nums1)



nums2 = [num + 2 for num in numbers]
print(nums2)

nums2 = [num + 2 for num in numbers if num % 2 ==0]
print(nums2)