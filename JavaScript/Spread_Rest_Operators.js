var [name, age, ...city] = ["abc", 12, "byc", "asd", "sdasd"]


// Use rest to enclose the rest of specific user-supplied values into an array:
function myRestOperator(firstName, lastName, ...otherInfo) { 
    return `${firstName} ${lastName} and ${otherInfo}`;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  document.write("<br />" + myRestOperator("firstName", "lastName", "All", "Other", "Informations"));
  

  // Define a function with three parameters: Spread
function mySpreadOperator(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  document.write("<br />" + mySpreadOperator(...["FirstName", "LastName", "Edureka"]));
  