#Automation Test Task
Please develop the automation task using this simple framework.

I have made the following changes :

1) Have created one tag i.e. APITest and mentioned same in Hook- we don't need to run before and after hook for API test.

2)Created RestUtil class for get and post response.

3)In step definition added all api test steps and implemented logic which we need to verify based on scenario.

4)Comment out few depandancies  in pom.xml due to conflict- was getting SSLHandshakeException while setting up

5)Added parameter's and 2 more test scenario's in API-Test.feature file









----------------------------------------------------------------------------------------------------------------------------------------
Output:
Please clone this repo and run from your local. The results are also captured in the cucumber reports folder.

To run the tests just go to your local repository and run Maven test in command line:
"mvn clean test"

sameers-MacBook-Pro:brighttalktech-automation-test-task-maven sameermylavarapu$ mvn clean test

[INFO] Scanning for projects...
[WARNING] 
[WARNING] Some problems were encountered while building the effective model for AutomationTest:BrightTalkTest:jar:0.0.1-SNAPSHOT
[WARNING] 'dependencies.dependency.(groupId:artifactId:type:classifier)' must be unique: org.testng:testng:jar -> version 6.14.3 vs 7.0.0-beta3 @ line 155, column 21
[WARNING] 
[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.
[WARNING] 
[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.
[WARNING] 
[INFO] 
[INFO] -------------------< AutomationTest:BrightTalkTest >--------------------
[INFO] Building BrightTalkTest 0.0.1-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy/3.0.6/groovy-3.0.6.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy/3.0.6/groovy-3.0.6.pom (24 kB at 80 kB/s)
[WARNING] The POM for com.sun.xml.bind:jaxb-osgi:jar:2.2.10 is invalid, transitive dependencies (if any) will not be available, enable debug logging for more details
Downloading from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy/3.0.6/groovy-3.0.6.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/codehaus/groovy/groovy/3.0.6/groovy-3.0.6.jar (8.0 MB at 18 MB/s)

[INFO] 
[INFO] --- maven-clean-plugin:2.5:clean (default-clean) @ BrightTalkTest ---
[INFO] Deleting /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/target
[INFO] 
[INFO] --- maven-resources-plugin:2.6:resources (default-resources) @ BrightTalkTest ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/src/main/resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @ BrightTalkTest ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 7 source files to /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/target/classes
[INFO] 
[INFO] --- maven-resources-plugin:2.6:testResources (default-testResources) @ BrightTalkTest ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/src/test/resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.1:testCompile (default-testCompile) @ BrightTalkTest ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 3 source files to /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/target/test-classes
[INFO] 
[INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @ BrightTalkTest ---
[INFO] Surefire report directory: /Users/sameermylavarapu/Downloads/brighttalktech-automation-test-task-maven/target/surefire-reports




-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running AutomationTest.BrightTalkTest.RunnerTest
Configuring TestNG with: org.apache.maven.surefire.testng.conf.TestNG652Configurator@13969fbe
@APITest
Feature: API test
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by cucumber.deps.com.thoughtworks.xstream.core.util.Fields (file:/Users/sameermylavarapu/.m2/repository/info/cukes/cucumber-jvm-deps/1.0.5/cucumber-jvm-deps-1.0.5.jar) to field java.util.TreeMap.comparator
WARNING: Please consider reporting this to the maintainers of cucumber.deps.com.thoughtworks.xstream.core.util.Fields
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release



  Scenario: Should see LIST USERS of all existing users              # src/test/java/API-Test.feature:4
    Given I get the default list of users for on 1st page            # StepDefinition.i_get_the_default_list_of_users_for_on_st_page(String)
    When I get the list of all users                                 # StepDefinition.i_get_the_list_of_all_users()
    Then I should see total users count equals to number of user ids # StepDefinition.i_should_see_total_users_count_equals_to_number_of_user_ids()

  Scenario: LOGIN - SUCCESSFUL by a user          # src/test/java/API-Test.feature:9
    Given I login succesfully with following data # StepDefinition.i_login_succesfully_with_following_data(DataTable)

  Scenario: LOGIN - UNSUCCESSFUL by a user          # src/test/java/API-Test.feature:13
    Given I login unsuccesfully with following data # StepDefinition.i_login_unsuccesfully_with_following_data(DataTable)

  Scenario Outline: CREATE a user                                      # src/test/java/API-Test.feature:17
    Given I create user with following "<Name>" and "<Job>"
    Then response should contain "<Name>" and "<Job>" with others data


    Examples: 

  @APITest
  Scenario Outline: CREATE a user                                       # src/test/java/API-Test.feature:23
    Given I create user with following "Peter" and "Manager"            # StepDefinition.i_create_user_with_following_and(String,String)
    Then response should contain "Peter" and "Manager" with others data # StepDefinition.response_should_contain_and_with_others_data(String,String)
    

  @APITest
  Scenario Outline: CREATE a user                                    # src/test/java/API-Test.feature:24
    Given I create user with following "Liza" and "Sales"            # StepDefinition.i_create_user_with_following_and(String,String)
    Then response should contain "Liza" and "Sales" with others data # StepDefinition.response_should_contain_and_with_others_data(String,String)
    

  Scenario: Should see list of users with DELAYED RESPONSE # src/test/java/API-Test.feature:26
    Given I wait for user list to load                     # StepDefinition.i_wait_for_user_list_to_load()
    Then I should see that every user has a unique id      # StepDefinition.i_should_see_that_every_user_has_a_unique_id()
    

  Scenario: Should see SINGLE USER data   # src/test/java/API-Test.feature:30
    Given I make a search for user 3      # StepDefinition.i_make_a_search_for_user(String)
    Then I should see following user data # StepDefinition.i_should_see_following_user_data(DataTable)
    

  Scenario: Should see SINGLE USER NOT FOUND error code # src/test/java/API-Test.feature:35
    Given I make a search for user 23                   # StepDefinition.i_make_a_search_for_user(String)
    Then I receive error code 404 in response           # StepDefinition.i_receive_error_code_in_response(int)
    

  #Added 2 new scenario
  Scenario: Should see SINGLE Resource data   # src/test/java/API-Test.feature:40
    Given I make a search for resource 2      # StepDefinition.i_make_a_search_for_resource(String)
    Then I should see following Resource data # StepDefinition.i_should_see_following_Resource_data(DataTable)

  Scenario: Should see SINGLE Resource NOT FOUND error code # src/test/java/API-Test.feature:45
    Given I make a search for resource 23                   # StepDefinition.i_make_a_search_for_resource(String)
    Then I receive error code 404 in response               # StepDefinition.i_receive_error_code_in_response(int)
    
    

10 Scenarios (10 passed)
19 Steps (19 passed)
0m8.087s

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 8.644 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  12.150 s
[INFO] Finished at: 2020-10-22T21:47:15-07:00
[INFO] ------------------------------------------------------------------------


