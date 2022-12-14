declareUpdate();
xdmp.documentInsert(
   "/employee1.json",
    { "Employee": {
      "ID": 1,
      "FirstName": "Ilunga",
      "LastName": "Widget",
      "Position": " Human Resources" }}),
xdmp.documentInsert(
   "/employee2.json",
    { "Employee": {
      "ID": 2,
      "FirstName": "Smith",
      "LastName": "Lead",
      "Position": "java studio" }}),
xdmp.documentInsert(
   "/employee3.json",
    { "Employee": {
      "ID": 3,
      "FirstName": "mirium",
      "LastName": "Manager",
      "Position": "Senior Technical Lead" }}),
xdmp.documentInsert(
   "/employee4.json",
    { "Employee": {
      "ID": 4,
      "FirstName": "ibrahim",
      "LastName": "Gajam",
      "Position": " Researcher" }}),
xdmp.documentInsert(
   "/employee5.json",
    { "Employee": {
      "ID": 14,
      "FirstName": "Abhi",
      "LastName": "singh",
      "Position": "Senior consultant" }}),
xdmp.documentInsert(
   "/employee6.json",
    { "Employee": {
      "ID": 15,
      "FirstName": "Rudy",
      "LastName": "Fila",
      "Position": "Scientist" }}),
xdmp.documentInsert(
   "/employee7.json",
    { "Employee": {
      "ID": 16,
      "FirstName": "Donald",
      "LastName": "Putin",
      "Position": "Power Couple" }}),
xdmp.documentInsert(
   "/expense1.json",
    { "Expenses": {
         "EmployeeID": 1,
         "Date": "2012-06-27",
         "Amount": 131.02,
         "Purchase": {
            "Category": "Lodging",
            "Vendor": "Hyatt Hotels",
            "Description": "Exec. King Room"}}}),
 xdmp.documentInsert(
   "/expense2.json",
    { "Expenses": {
         "EmployeeID": 2,
         "Date": "2012-06-27",
         "Amount": 155.22,
         "Purchase": {
            "Category": "Transportation",
            "Vendor": "Alaska",
            "Description": "SFO > SEA"}}}),
xdmp.documentInsert(
   "/expense3.json",
    { "Expenses": {
         "EmployeeID": 1,
         "Date": "2012-08-03",
         "Amount": 59.95,
         "Purchase": {
            "Category": "Meals",
            "Vendor": "Doug's Dinner",
            "Description": "Dinner"}}}),
xdmp.documentInsert(
   "/expense4.json",
    { "Expenses": {
         "EmployeeID": 3,
         "Date": "2012-05-07",
         "Amount": 162.95,
         "Purchase": {
            "Category": "Lodging",
            "Vendor": "Hilton Hotels",
            "Description": "Exec. Suite"}}}),
xdmp.documentInsert(
   "/expense5.json",
    { "Expenses": {
         "EmployeeID": 3,
         "Date": "2012-05-30",
         "Amount": 120.00,
         "Purchase": {
            "Category": "Lodging",
            "Vendor": "Kingsman Motel",
            "Description": "Reg Room"}}}),
xdmp.documentInsert(
   "/expense6.json",
    { "Expenses": {
         "EmployeeID": 4,
         "Date": "2012-03-23",
         "Amount": 155.55,
         "Purchase": {
            "Category": "Lodging",
            "Vendor": "Waterfront Hotel",
            "Description": "Queen Room"}}}),
xdmp.documentInsert(
   "/expense7.json",
    { "Expenses": {
         "EmployeeID": 4,
         "Date": "2012-06-05",
         "Amount": 104.29,
         "Purchase": {
            "Category": "Meals",
            "Vendor": "Good Eats",
            "Description": "Client Lunch"}}}),
xdmp.documentInsert(
   "/GoodEats.json",
    { "ApprovedVendor": {
         "Name": "Good Eats",
         "Address": {
            "Street": "707 Oxford Rd.",
            "City": "Ann Arbor",
            "Region": "MI",
            "PostalCode": "48104",
            "PostalCode": "USA",
            "Phone": "(313) 555-5735"}}}),
xdmp.documentInsert(
   "/WaterfrontHotel.json",
    { "ApprovedVendor": {
         "Name": "Waterfront Hotel",
         "Address": {
            "Street": "1000 Coast Rd.",
            "City": "Santa Cruz",
            "Region": "CA",
            "PostalCode": "94330",
            "PostalCode": "USA",
            "Phone": "(831) 745-8913"}}}),
xdmp.documentInsert(
   "/KingsmanMotel.json",
    { "ApprovedVendor": {
         "Name": "pratibha",
         "Address": {
            "Street": "4832 St.",
            "City": "Agra",
            "Region": "UP",
            "PostalCode": "282001",
            "Phone": "(91) 90876789"}}}),
xdmp.documentInsert(
   "/Hilton.json",
    { "ApprovedVendor": {
         "Name": "Hitler",
         "Address": {
            "Street": "Market St.",
            "City": "San Francisco",
            "Region": "CA",
            "PostalCode": "94033",
            "PostalCode": "USA",
            "Phone": "(415) 540-8732"}}}),
xdmp.documentInsert(
   "/Hyatt.json",
    { "ApprovedVendor": {
         "Name": "Tolu",
         "Address": {
            "Street": "9023 Caterberry Ave.",
            "City": "Seattle",
            "Region": "WA",
            "PostalCode": "56445",
            "PostalCode": "USA",
            "Phone": "(206) 321-3152"}}}),
xdmp.documentInsert(
   "/MealLimit.json",
    { "ExpenseLimit": {
         "Category": "Meals",
         "Limit": 100}}),
xdmp.documentInsert(
   "/LodgingLimit.json",
    { "ExpenseLimit": {
         "Category": "Lodging",
         "Limit": 300}}),
xdmp.documentInsert(
   "/TransLimit.json",
    { "ExpenseLimit": {
         "Category": "Transportation",
         "Limit": 200}})


