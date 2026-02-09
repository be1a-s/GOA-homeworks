"""4) შექმენით კლასი Student, რომელსაც ექნება name და grade. დაამატეთ მეთოდი check_pass(), რომელიც დააბრუნებს True თუ grade ≥ 50, სხვა შემთხვევაში False"""

class Student:
    def __init__(self,name,grade):
        self.name = name
        self.grade = grade

    def check_pass(self):
        if self.grade >= 50:
            return True 
        else:
            return False
        
student1 = Student("beqa",60)
print(student1.check_pass())