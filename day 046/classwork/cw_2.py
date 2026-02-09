"""3) ჩამოწერეთ IndexError, NameError, SyntaxError, ZeroDivisionError გამოწვევის მიზეზები. ასევე ახსენით თქვენი სიტყვებით რა გასნხვავებაა Bug-ს და Error-ს შორის. ახსენით რა არის error handling და მისი თითოეული keyword: try, except, else, finally. შემდეგ მოიყვანეთ ერთი error handling მაგალითი რომელშიც იქნება ყველა error handling-ის keyword"""


try:
    num_list = [1, 2, 3]
    print(num_list[5])
    result = 10/0
    print(num_list)
    eval('x === y')
except IndexError:
    print("indexerror: index not found.")
except ZeroDivisionError:
    print("zerodivisionerror: Cannot be divided by zero.")
except NameError:
    print("nameerror:Variable is not defined.")
except SyntaxError:
    print("syntaxError:Syntax error in the code.")
else:
    print("Everything was done successfully.")
finally:
    print("This block will always be executed.")