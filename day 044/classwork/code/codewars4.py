
"""https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python"""

# Complementary DNA

def DNA_strand(dna):
    dna2 = ""
    
    for i in dna:
        if i == "A":
            dna2 +="T"
        elif i == "T":
            dna2 +="A"
        elif i == "G":
            dna2 +="C"
        elif i == "C":
            dna2 +="G"
    return dna2