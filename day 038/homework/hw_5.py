"""7) დაწერეთ ფუნქცია tuple_info, რომელიც მიიღებს tuple-ს და დაბეჭდავს მის სიგრძეს, პირველ და ბოლო ელემენტს"""

def tuple_info(tuple1): 

    print(f"tuple lenght { len(tuple1)} items,first item {tuple1[0]},last item {tuple1[-1]}")

tuple_info(("lion","bear","cow","cat","bear","dog","fox"))