"""1) შექმენით data.txt ფაილი პითონით, ამისთვის გამოიყენეთ ფაილზე "x"-ის უფლებით გახსნა (open ფუნქციას)

ფაილის შექმნის შემდეგ გასხსენით ფაილი სტანდარუტი გზით, ჩაწერეთ ინფორმაცია და დახურეთ. შემდეგ ფაილი გახსენით with open as სინტქასით და readlines() მეთოდის დახამრებთ ცალცალკე ხაზებზე გამოიტანეთ ფაილში ჩაწერილი ინფორმაცია"""


my_file = open("day 61/classwork/data.txt" , "w")
my_file.write("jhbjhv. \n")
my_file.write("a. \n")
my_file.write("b")
my_file.close()

with open("day 61/classwork/data.txt","r") as my_file:
    print(my_file.readlines())