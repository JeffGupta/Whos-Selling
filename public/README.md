# Whos-Selling
SWE432 -002

SWE 432 -002 - HW3 

Anmol Gupta
Frank Lee

Step 1: Define four (4) baseline scenarios

Registration - IMPLEMENTED (1)
A new user to AF-Books may create a registration upon completing the required fields. The application checks to ensure that the email address is unique and is a valid GMU email address. After registering a message will prompt telling the user the registration is completed. After which, a user can log in using his/her credentials on the login page. 

Browse active book listing by hovering over columns 
On the homepage a user can hover over the categories (Science, Math, History, English) corresponding pictures. This will trigger a dropdown of popular books specific to that subject. This will give the users an overview of what books are being sold and how much money they can potentially save/earn as a respective buyer/seller. 

Login - IMPLEMENTED (2)
The user can log in using his/her new credentials that have been added to the firebase server rom the registration. 

Account Details - Remade with react for HW5
Displays account information with react

Contact Information - IMPLEMENTED with d3.js for HW5. Currently only shown at bottom of account details page after logging in, will change in the future
Provide users with contact information in case they have any inquires or simply want to know the members of the site. In a craigslist-like site, there's bound to be people with complaints or questions.

Make a Listing - IMPLEMENTED with react for HW4
If the user wants to sell , he or she can make a listing on the site. Furthermore, the user has to option to review their listing before making it public. React will be used as we implement this feature. 

Search - IMPLEMENTED for third feature in HW4 
From the ISBN, a user can search for the book he/she is interested in by typing in a book’s corresponding ISBN. At the moment not all ISBN will work because we are using the google books api. Later we will add more api's like amazon's to increase the number of books. It will prompt the user to enter their books ISBN and will return a preview of the book as well as where you can purchase the book from. We will add more features to this later, in particular comparining local prices on campus to that of online.

________________________________________________________________________________________________________________________________________
HW6 
Added 7 jasmine test cases. Using Spec runner in jasmine folder. 

________________________________________________________________________________________________________________________________________
HW7
We have set up Heroku Hosting for hosting our Node.js application. We have also created the Node.js backend 
for our web application. We have a file upload feature which is called "upload". It can be navigated to from
the home page at the moment.

link:
https://whos-selling.herokuapp.com/index.html
 