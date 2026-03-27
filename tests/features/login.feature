Feature:Login Functionality

Scenario Outline: 






#  Scenario outline: Login with valid credentials
#         Given a user is on the login page
#         When the user enters username as '<username>'
#         And the user enters password as '<password>'
#         And the user clicks on the login button
#         Then the user is logged in succesfully
#         And the user should see the products page
#         Examples:
#             | username              | password      |
#             | standard_user         | secret_sauce  |
#             | performance_glitch_user | secret_sauce  |
#             |problem_user          | secret_sauce  |
#             |error_user            | secret_sauce  |
#             |visual_user     | secret_sauce  |



# Scenario: Login with valid credentials
# Given user is on the login page
# When  user enters valid username
# And user enters valid password
# And user clicks login button 
# Then user should be able to login successfully


# Scenario: Login with locked_username credentials
# Given user is on the login page
# When  user enters valid locked_username
# And user enters valid password
# And user clicks login button 
# Then user gets an error message 
# And User is back on login page


# Scenario: Login with performance_glitch credentials
# Given user is on the login page
# When  user enters  username as "performance_glitch_user"
# And user enters  password as "secrete_sauce"
# And user clicks login button
# Then user should be able to login successfully
# And user is able to navigate to product page 



# Scenario: Login with valid  credentials
# Given user ison login page
# When user enters  <username> adn enter <password>
# |username | password|
# |standard_user|secret_sauce|
# |performance_glitch_user|secret_sauce|
# |problem_user|secret_sauce|
# |error_user|secret_sauce|
# |visual_user|secret_sauce|
# And user clicks on login in succesfully
# Then user is logged in succesfully
# And user is able to navigate to product page
