
"""https://www.codewars.com/kata/5556282156230d0e5e000089/train/python"""

# DNA to RNA Conversion

def dna_to_rna(dna):
    dna2 = ""
    for i in dna:
        if i == "T":
            dna2 += "U"
        else:
            dna2 += i
    return dna2