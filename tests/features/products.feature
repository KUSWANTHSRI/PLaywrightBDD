

Feature: product Functionality

Background: User is logged in
Given user is on login page
When user enters username 
And user enters password 
When  user  clicks on login  button 
Then user is logged in succesfully

Scenario: Adding a product to cart 
Given user is logged in 
When user product descrption is available 
When user clicks on add to cart 
Then product is added to cart
When  user clicks on cart menu
Then the cart is opend
And user is able 

Scenario:  View a product descrption
Given user is logged in 
When user clicks on a product
Then the product descrption is available
And user is able to see the entire product descrption