
"""https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python"""

# Detect Pangram

def is_pangram(st):
    st = st.lower()
    num = 0
    text = "qwertyuiopasdfghjklzxcvhnmb"
    st = list(st)
    for i in st:
        if st.count(i) > 1:
            st.remove(i)
    for i in text:
        if i in st:
            num+=1
    return num == len(text)