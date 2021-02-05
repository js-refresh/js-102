# Write a function that takes an input n, and returns the sum from 1 to n
# addUpTo(3) -->6  (3+2+1=6)
def addUpTo():
    user_input = int(input('Pick any integer: '))
    print(sum(range(user_input+1))) 
addUpTo()





