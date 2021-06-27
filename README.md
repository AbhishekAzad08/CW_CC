# CW_CC

# Products Acceptance Criteria
1. Display all Products on the page in Tabular Format
2. Products should be able to sort by header click and default Name ascending
3. Only 5 Products should be displayed on each page and allow user to navigate
4. Edit and Delete Product options should be available on the Products table
5. New Product can be created using Add button available above the Products Table
6. Delete Product should Prompt for confirmation upon click
7. Edit click should navigate to another page and Load with Product details
8. Add click should navigate to another page and validate fields on Submit click

# Tech stack
Front-end: Angular
Back-end: .Net Core with EF Core(SQL)

# Unit Testing 
xUnit tests has been added for business layer methods.

# Build and Run instructions
There are 2 components 
i)  eComm (Angular) 
ii) eComm.WebApi (.Net Core)

Open the .sln file in Visual Studio 2019 from WebAPI folder. Update the connection string in the eComm.WebAPI project. Run the solution. Database will be seeded with few products.
Run the Angular project using ng serve command

# Runing the Unit tests
Open the Test explorer
Click Run All Tests to run the unit tests
