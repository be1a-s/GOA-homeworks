"""4) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით"""

nums = list(range(1, 21))

nums2 = []

for i in nums:
    nums2.append(i**2)

print(nums2)

nums3 = [i**2 for i in nums ]

print(nums3)

