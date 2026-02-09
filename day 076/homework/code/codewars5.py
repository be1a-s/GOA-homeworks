
# https://www.codewars.com/kata/5297bf69649be865e6000922/train/python

# Simple Sentences

def make_sentences(parts):
    cleaned = []
    for p in parts:
        p = p.strip()
        if all(ch == "." for ch in p):
            continue
        cleaned.append(p)
    s = " ".join(cleaned)
    s = s.replace(" ,", ",")
    while s.endswith("."):
        s = s[:-1]
    s += "."
    return s