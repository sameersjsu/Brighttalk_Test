@APITest
Feature: API test

  Scenario: Should see LIST USERS of all existing users
    Given I get the default list of users for on 1st page
    When I get the list of all users
    Then I should see total users count equals to number of user ids

  Scenario: LOGIN - SUCCESSFUL by a user
    Given I login succesfully with following data
      | eve.holt@reqres.in | cityslicka |

  Scenario: LOGIN - UNSUCCESSFUL by a user
    Given I login unsuccesfully with following data
      | eve.holt@reqres.in |  |

  Scenario Outline: CREATE a user
    Given I create user with following "<Name>" and "<Job>"
    Then response should contain "<Name>" and "<Job>" with others data

    Examples: 
      | Name  | Job     |
      | Peter | Manager |
      | Liza  | Sales   |

  Scenario: Should see list of users with DELAYED RESPONSE
    Given I wait for user list to load
    Then I should see that every user has a unique id

  Scenario: Should see SINGLE USER data
    Given I make a search for user 3
    Then I should see following user data
      | Emma | emma.wong@reqres.in |

  Scenario: Should see SINGLE USER NOT FOUND error code
    Given I make a search for user 23
    Then I receive error code 404 in response

  #Added 2 new scenario
  Scenario: Should see SINGLE Resource data
    Given I make a search for resource 2
    Then I should see following Resource data
      | 2 | fuchsia rose |

  Scenario: Should see SINGLE Resource NOT FOUND error code
    Given I make a search for resource 23
    Then I receive error code 404 in response
