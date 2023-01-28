"""
New lines of code are used in Python to finish a command, 
whereas other programming languages often use parentheses or semicolons. 
Python depends on using whitespace and indentation to describe factors 
such as the scope of functions, loops, and classes.
"""
 #variables 

a = 5 
one = 1
some_number = 1000
#other examples of data types that can be stored in variables
#boolean
true_boolean = true  
false_boolean = 0
#string 
name = 'Will'
# float 
price = 9.99

#functions

def my_function():
  print("Hello from a function")

my_function()

#conditional statements


var = 0 
if var == False:
    print('0 is false booo') 

num = 10 
if num > 5:
    print('the number is bigger than 5')
elif num < 5: 
    print ('the number is smaller than 5')
else:
    print ('the number is 5!')   

#Looping 

#while loop 
 num = 1        #prints numbers 1-10
while num <= 10:
    print(num)
    num += 1
#for loop    
   for i in range(1, 11):
  print(i)  #does the same printing no.1-10

  #lists/Array, key values, data structure 

  prime_numbers = [2, 3, 5, 7, 11, 13] 
  print(prime_numbers[0]) #2 index: links location in an array 
  print(prime_numbers[3]) #7

  workers_names = [ #array of strings 
    'will',
    'rob',
    'craig'
  ]
  print(workers_names[1])#rob 

#adding values to a list 
  luck= [] #empty array
  luck.append(3, 7, 13, 21)
  print(luck[2])#13

  #dictionary, key value pairs 
mydetails = {
    'name': 'willliam harvey',
    'nickname': 'will harvv',
    'age': '21'
  }
print('i am %s years old' %(mydetails['age']))# i am 21 years old %s is place holder and replaced by string after % can also use %d for int and %f for float

mydetails['nationality'] = 'british' # adds nationality to dictionary
print(mydetails)

#logical operators 

x = 5 y = 5 

(x < 10 and y > 1) #is true	
(x == 5 or y == 5) #is false	
not (x == y) #is true	

#inputs 

x = int(input('first number >'))
y = int(input('second number >'))

def sumoff():
   z = x + y
   print (z) 

sumoff() #prints sum of x and y 

#for looping through data structures 

bookshelf = [
  "The Effective Engineer",
  "The 4-hour Workweek",
  "Zero to One",
  "Lean Startup",
  "Hooked"
]

for book in bookshelf:
    print(book) # prints list of books gives books value book

mydetails = {
    'name': 'willliam harvey',
    'nickname': 'will harvv',
    'age': '21'
  }

for attribute, value in mydetails.items():
    print("My %s is %s" %(attribute, value)) # prints details aswell as 'my is'

