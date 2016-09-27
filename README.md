# Whos-Selling
SWE432 -002

SWE 432 -002 - HW3 

Anmol Gupta
Frank Lee

Step 1: Define four (4) baseline scenarios

Registration - IMPLEMENTED
A new user to AF-Books may create a registration upon completing the required fields. The application checks to ensure that the email address is unique and is a valid GMU email address. After registering a message will prompt telling the user the registration is completed. After which, a user can log in using his/her credentials on the login page. 


Browse active book listing by hovering over columns 
On the homepage a user can hover over the categories (Science, Math, History, English) corresponding pictures. This will trigger a dropdown of popular books specific to that subject. This will give the users an overview of what books are being sold and how much money they can potentially save/earn as a respective buyer/seller. 


Login
The user can log in using his/her new credentials that have been added to the firebase server rom the registration. 


After Login 
After logging in successfully, a user can choose to buy or to sell. After which the user will be redirected to the respective page he/she selects. 


Search - IMPLEMENTED
From the title, a user can search for the book he/she is interested in by typing in a book’s corresponding ISBN. At the moment not all ISBN will work because we are using the google books api. Later we will add more api's like amazon's to increase the number of books. It will prompt the user to enter their books ISBN and will return a preview of the book as well as where you can purchase the book from. We will add more features to this later, in particular comparining local prices on campus to that of online. 
 
