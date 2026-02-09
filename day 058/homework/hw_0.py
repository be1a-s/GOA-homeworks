"""2) შექმენით კლასი Book, რომელსაც ექნება title, author, pages. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს "სათაური: X, ავტორი: Y, გვერდები: Z"""


class book:
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def info(self):
        print(f"სათაური: {self.title}, ავტორი: {self.author}, გვერდები: {self.title}")

    
book1 = book("ავტორი","ბექა",200)
book1.info()