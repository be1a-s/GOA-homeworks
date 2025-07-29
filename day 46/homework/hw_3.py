"""5) სიიდან "mixed = [2, 5, 8, 11, 14, 17, 20]" შექმენით ორი სია list comprehension-ით: ერთში მხოლოდ ლუწები, მეორეში — კენტები"""

mixed = [2, 5, 8, 11, 14, 17, 20]

mixed_even = [i for i in mixed if i % 2 == 0 ]

mixed_odd = [i for i in mixed if i % 2 != 0]

print(mixed_even)
print(mixed_odd)

