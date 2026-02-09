"""1) შექმენით რიცხვების set, ჩამოწერეთ მისი ყველა თვისება, შემდეგ დაამტეთ და წაშალეთ 2 ელემენტი: add და remove მეთოდების საშვალებით. შემდეგ შექემნით მეორე set და არსებულ 2 set-ს შორის შეასრულეთ სამივე მოქმედება: union, intersection, difference"""

#set მისი თვისებებია არ გამოაქვს ორი ერთნაერი რიცხვი არ მოქმედებს ინდექსინგი შეიძლება ელემნტების დამატება და ამოკლება
set1 = {1,2,3,4,5,9,6,7,8}
print(set1.add(10))
print(set1.remove(5))


set2 = {6,7,2,3,2234,46,3234,}
differenc = set2.difference(set1)
print(differenc)

intersection = set2.intersection(set1)
print(intersection)

union = set2.union(set1)
print(union)


