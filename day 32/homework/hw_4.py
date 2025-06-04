"""6) დაწერე ფუნქცია, რომელიც იღებს სიის ელემენტებს და აბრუნებს მათ საშუალოს"""

list1 = [1,2,3,4,5,6,7,8,9,10]



def avarage(list):
    num = 0
    num1 = 0
    for i in list:
          num += 1
          num1 += i 
    
    return  num1 / num

list_avarage = avarage(list1)

print(list_avarage)
    


          
