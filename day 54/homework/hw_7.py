"""9) შექმენით ფუნქცია, რომელიც იღებს 'args'-ით რიცხვებს და აბრუნებს მათ მაქსიმუმს და მინიმუმს"""


def max_min(*args):
    arr = []
    for i in args:
        arr.append(i)
    return max(arr),min(arr)

print(max_min(1,2,3,4,5,6,7,8,9))