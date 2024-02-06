Feature: Login Functionality

  Scenario: User can log in with correct credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And the user clicks the login button
    Then the user should be redirected to the home page
    And "Click on the Vite and React logos to learn more" text is displayed

  Scenario: User cannot log in with incorrect credentials
    Given the user is on the login page
    When the user enters an invalid username and password
    And the user clicks the login button
    Then an error message "Login failed" should be displayed
