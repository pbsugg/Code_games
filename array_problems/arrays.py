"""
Create an array with 1,000 entries, one entry is in the array twice
How do you find it w/ as little memory as possible?

Approach #1 pseudo:
For 1000 trials, generate a random number and put it in a list.
    IF it's already in, reject it
Choose one number at a random position in the list, add it in again

"""
import random
from sets import Set

#create the base list
base_list = []
for x in range(10000):
    number = random.randrange(0, 1000, 1)
    if number not in base_list:
        base_list.append(number)
#add a duplicate
base_list.append(base_list[random.randrange(0, 1000, 1)])

comparison_list = []
for x in base_list:
    if x not in comparison_list:
        comparison_list.append(x)
    else:
        break

print(x)
