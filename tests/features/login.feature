Feature:Login Functionality
Scenario: Login with valid credentials
Given user is on the login page
When  user enters valid username
And user enters valid password
And user clicks login button 
Then user should be able to login successfully


Scenario: Login with locked_username credentials
Given user is on the login page
When  user enters valid locked_username
And user enters valid password
And user clicks login button 
Then user gets an error message 
And User is back on login page


Scenario: Login with performance_glitch credentials
Given user is on the login page
When  user enters  username as "performance_glitch_user"
And user enters  password as "secrete_sauce"
And user clicks login button
Then user should be able to login successfully
And user is able to navigate to product page 

