"""
Create an array with 1,000 entries, one entry is in the array twice
How do you find it w/ as little memory as possible?

Problem #1 pseudo:
For 1000 trials, generate a random number and put it in a list.
    IF it's already in, reject it
Choose one number at a random position in the list, add it in again

"""

"""
Problem #2
You are given an array with integers between 1 and 1,000,000. One integer is missing. How can you determine which one? Can you think of a way to do it while iterating through the array only once. Is overflow a problem in the solution? Why not?

Pseudo
Generate an array with all of the values
remove those values from the second array
last value is the one missing

"""
#
import random
# from sets import Set
#
# #create the base list
base_list = []
# for x in range(10000):
#     number = random.randrange(0, 1000, 1)
#     if number not in base_list:
#         base_list.append(number)
# #add a duplicate
# base_list.append(base_list[random.randrange(0, 1000, 1)])
#
# comparison_list = []
# for x in base_list:
#     if x not in comparison_list:
#         comparison_list.append(x)
#     else:
#         break
#
# print(x)


for x in range(100000):
    number = random.randrange(0, 1000, 1)
    if number not in base_list:
        base_list.append(number)
base_list.remove((base_list[random.randrange(0, 1000, 1)]))
print(len(base_list))

comparison_list = []
for x in range(1000):
    comparison_list.append(x)

for x in base_list:
    comparison_list.remove(x)

print(comparison_list)
