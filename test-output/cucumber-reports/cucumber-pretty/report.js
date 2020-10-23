$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 2,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I get the list of all users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see total users count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_get_the_default_list_of_users_for_on_st_page(String)"
});
formatter.result({
  "duration": 1756465898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_the_list_of_all_users()"
});
formatter.result({
  "duration": 119110382,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_total_users_count_equals_to_number_of_user_ids()"
});
formatter.result({
  "duration": 11815026,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I login succesfully with following data",
  "rows": [
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_succesfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 1305754119,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I login unsuccesfully with following data",
  "rows": [
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_unsuccesfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 403136914,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I create user with following \"\u003cName\u003e\" and \"\u003cJob\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"\u003cName\u003e\" and \"\u003cJob\u003e\" with others data",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 22,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 23,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 24,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I create user with following \"Peter\" and \"Manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"Peter\" and \"Manager\" with others data",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 30
    },
    {
      "val": "Manager",
      "offset": 42
    }
  ],
  "location": "StepDefinition.i_create_user_with_following_and(String,String)"
});
formatter.result({
  "duration": 412351598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 25
    },
    {
      "val": "Manager",
      "offset": 37
    }
  ],
  "location": "StepDefinition.response_should_contain_and_with_others_data(String,String)"
});
formatter.result({
  "duration": 30058480,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@APITest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I create user with following \"Liza\" and \"Sales\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"Liza\" and \"Sales\" with others data",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 30
    },
    {
      "val": "Sales",
      "offset": 41
    }
  ],
  "location": "StepDefinition.i_create_user_with_following_and(String,String)"
});
formatter.result({
  "duration": 419958807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 25
    },
    {
      "val": "Sales",
      "offset": 36
    }
  ],
  "location": "StepDefinition.response_should_contain_and_with_others_data(String,String)"
});
formatter.result({
  "duration": 21432483,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I wait for user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_wait_for_user_list_to_load()"
});
formatter.result({
  "duration": 5605305329,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_that_every_user_has_a_unique_id()"
});
formatter.result({
  "duration": 9176965,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(String)"
});
formatter.result({
  "duration": 1051696886,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_following_user_data(DataTable)"
});
formatter.result({
  "duration": 22835311,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I make a search for user 23",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(String)"
});
formatter.result({
  "duration": 961101591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_receive_error_code_in_response(int)"
});
formatter.result({
  "duration": 414031,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "#Added 2 new scenario"
    }
  ],
  "line": 40,
  "name": "Should see SINGLE Resource data",
  "description": "",
  "id": "api-test;should-see-single-resource-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I make a search for resource 2",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I should see following Resource data",
  "rows": [
    {
      "cells": [
        "2",
        "fuchsia rose"
      ],
      "line": 43
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_resource(String)"
});
formatter.result({
  "duration": 1589616425,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_following_Resource_data(DataTable)"
});
formatter.result({
  "duration": 15873961,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Should see SINGLE Resource NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-resource-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I make a search for resource 23",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_resource(String)"
});
formatter.result({
  "duration": 1584640235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_receive_error_code_in_response(int)"
});
formatter.result({
  "duration": 67822,
  "status": "passed"
});
});