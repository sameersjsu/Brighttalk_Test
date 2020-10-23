package AutomationTest.BrightTalkTest;

import static io.restassured.RestAssured.given;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RestUtils {
	static Response response;

    public static Response getResponse(String parameter){
    	RequestSpecification reqSpec = new RequestSpecBuilder().setBaseUri("https://reqres.in/api/").build();
    	response =given().spec(reqSpec).when().get(parameter).then().extract().response();
		return response;
    }

    public static Response getQueryResponse(String paraName, String paraValue){
    	RequestSpecification reqSpec = new RequestSpecBuilder().setBaseUri("https://reqres.in/api/users").build();
    	response =given().spec(reqSpec).queryParam(paraName,paraValue).when().get().then().extract().response();
		return response;
    }
    
    public static Response postResponse(String postBody, String postURL){
    	RequestSpecification reqSpec = new RequestSpecBuilder().setBaseUri("https://reqres.in/api/").build();
    	response =given().spec(reqSpec).contentType(ContentType.JSON)
                .body(postBody).post(postURL).then().extract().response();
		return response;
    }
}
