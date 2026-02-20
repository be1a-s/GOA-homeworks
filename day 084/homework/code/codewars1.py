
# https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/python

# Tic-Tac-Toe-like table Generator

def display_board(board, width):
    rows = []
    
    for i in range(0, len(board), width):
        row = "|".join(f" {cell} " for cell in board[i:i+width])
        rows.append(row)
    
    separator = "\n" + "-" * len(rows[0]) + "\n"
    
    return separator.join(rows)
