package AutomationTest.BrightTalkTest;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import static AutomationTest.BrightTalkTest.HomePage.homePage;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.testng.Assert;

public class StepDefinition {
	static Response response;
	List<Integer> list= new ArrayList<>();;
	@Given("^I am on the home page$")
	public void iAmOnTheHomePage() {
		homePage();
	}

	@Given("^I get the default list of users for on (\\d+)st page$")
	public void i_get_the_default_list_of_users_for_on_st_page(String pageNumber) throws Throwable {
		response= RestUtils.getQueryResponse("page", pageNumber);
		Assert.assertEquals(response.getStatusCode(), 200);
		List<Integer> list1 = response.path("data.id");
		list.addAll(list1);
	}

	@When("^I get the list of all users$")
	public void i_get_the_list_of_all_users() throws Throwable {
		response= RestUtils.getQueryResponse("page", "2");
		Assert.assertEquals(response.getStatusCode(), 200);
		List<Integer> list2 = response.path("data.id");
		list.addAll(list2);
	}

	@Then("^I should see total users count equals to number of user ids$")
	public void i_should_see_total_users_count_equals_to_number_of_user_ids() throws Throwable {
		int count= response.path("total");
		Assert.assertEquals(count,list.size());
	}

	@Given("^I login succesfully with following data$")
	public void i_login_succesfully_with_following_data(DataTable usercredentials) throws Throwable {
		List<List<String>> data = usercredentials.raw();
		String js = "{\n" + "  \"email\": \"" + data.get(0).get(0) + "\",\n" + "  \"password\": \"" + data.get(0).get(1)
				+ "\"\n" + "}";
		Assert.assertEquals(RestUtils.postResponse(js, "login").getStatusCode(), 200);
	}

	@Given("^I login unsuccesfully with following data$")
	public void i_login_unsuccesfully_with_following_data(DataTable usercredentials) throws Throwable {
		List<List<String>> data = usercredentials.raw();
		String js = "{\n" + "  \"email\": \"" + data.get(0).get(0) + "\",\n" + "  \"password\": \"" + data.get(0).get(1)
				+ "\"\n" + "}";
		Assert.assertEquals(RestUtils.postResponse(js, "login").getStatusCode(), 400);
	}

	@Given("^I create user with following \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_create_user_with_following_and(String name, String job) throws Throwable {
		String js = "{\n" + "  \"name\": \"" + name + "\",\n" + "  \"job\": \"" + job + "\"\n" + "}";
		response = RestUtils.postResponse(js, "users");
		Assert.assertEquals(response.getStatusCode(), 201);
	}

	@Then("^response should contain \"([^\"]*)\" and \"([^\"]*)\" with others data$")
	public void response_should_contain_and_with_others_data(String name, String job) throws Throwable {
		Assert.assertEquals(name, response.path("name"));
		Assert.assertEquals(job, response.path("job"));
		Assert.assertTrue(Integer.parseInt(response.path("id")) > 0);
		Assert.assertNotNull(response.path("createdAt"));
	}
	
	@Given("^I wait for user list to load$")
	public void i_wait_for_user_list_to_load() throws Throwable {
		response = RestUtils.getQueryResponse("delay", "3");
		Assert.assertEquals(response.getStatusCode(), 200);
	}

	@Then("^I should see that every user has a unique id$")
	public void i_should_see_that_every_user_has_a_unique_id() throws Throwable {
		List<Integer> list = response.path("data.id");
		Set<Integer> set = new HashSet<Integer>(list);
		Assert.assertTrue(!(set.size() < list.size()));
	}

	@Given("^I make a search for user (\\d+)$")
	public void i_make_a_search_for_user(String id) throws Throwable {
		response = RestUtils.getResponse("/users/" + id + "");
	}

	@Then("^I should see following user data$")
	public void i_should_see_following_user_data(DataTable userDetails) throws Throwable {
		Assert.assertEquals(response.getStatusCode(), 200);
		List<List<String>> data = userDetails.raw();
		Assert.assertEquals(data.get(0).get(0), response.path("data.first_name"));
		Assert.assertEquals(data.get(0).get(1), response.path("data.email"));
	}
	
	@Given("^I make a search for resource (\\d+)$")
	public void i_make_a_search_for_resource(String id) throws Throwable {
		response = RestUtils.getResponse("/unknown/" + id + "");
	}

	@Then("^I receive error code (\\d+) in response$")
	public void i_receive_error_code_in_response(int statusCode) throws Throwable {
		Assert.assertEquals(response.getStatusCode(), statusCode);
	}
	
	@Then("^I should see following Resource data$")
	public void i_should_see_following_Resource_data(DataTable resourceDetails) throws Throwable {
		Assert.assertEquals(response.getStatusCode(), 200);
		List<List<String>> data = resourceDetails.raw();
		Assert.assertEquals(data.get(0).get(0), response.path("data.id").toString());
		Assert.assertEquals(data.get(0).get(1), response.path("data.name"));
	}
}
