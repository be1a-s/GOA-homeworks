from turtle import *
 

# forward - წინ წასვლა 
# left - მარცხენა 
# right - მარჯვენა 


# we want to paint a house
# step 1: draw a squeare
color("black")
speed(30)

width(7)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(135)
forward(140)

left(90)
forward(140)
end_fill()
penup()
goto(50, 0)
pendown()
color("blue")
begin_fill()
right(135)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
end_fill()
color("black")
penup()
goto(0, 200)
pendown()
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
penup()

goto(200, 200)
pendown()
forward(50)
left(90)
forward(50)
left(90)
forward(50)

















exitonclick()
