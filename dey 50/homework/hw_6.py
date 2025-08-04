"""7)words =  სიტყვების სიაზე "['hello', 'world', 'python']" გამოიყენეთ 'map', რათა ყველა სიტყვა გადაიქცეს დიდ ასოებად"""

words = ['hello', 'world', 'python']

words = list(map(lambda x: x.upper(), words))

print(words)