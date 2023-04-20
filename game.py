# the board will contain numbers 1-12

# a player will roll 2 random dice numberd 1-6

# player will have the option to knockdown the numbers that still remain up to the equal
# amount of the dice

# need a class to store current board and position

import random

dice_roll_1 = random.randint(1, 7)
dice_roll_2 = random.randint(1, 7)
dice_total = dice_roll_1 + dice_roll_2

boardstart = {
    "one": 1 & True,
    "two": 2 & True,
    "three": 3 & True,
    "four": 4 & True,
    "five": 5 & True,
    "six": 6 & True,
    "seven": 7 & True,
    "eight": 8 & True,
    "nine": 9 & True,
    "10": 10 & True,
    "eleven": 11 & True,
    "twelve": 12 & True,
}

print(dice_roll_1, dice_roll_2)

# Logic check to see if boardstart '&' statement is working
# def logic_check(board):
#     if boardstart["one"] == 1 & False:
#         print("this statement is true")
#     else:
#         print("this statement is false")

# logic_check(boardstart["one"])

user_input = input("What numbers would you like to knock down? ")

def user_num_select(input):
    for i in boardstart:
        if input in boardstart:
            print("yes")

    # if input[1] in boardstart.setdefault(input[1]):
    #     print(True)
    # else:
    #     print(False)

user_num_select(user_input)