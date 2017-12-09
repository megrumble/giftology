//Declare queryURL, initialize product
var queryURL   = "http://api.walmartlabs.com/v1/search?apiKey=5tqpb7skr82fputft42hqt7e&query=";
var product;

//Click event listener on .test-btn class
$(".test-btn").on("click", () => {

    //Reference #product-input
    var productInput = $("#product-input").val().trim().toLowerCase();

    //Assign default value if applicable
    (productInput !== "")? product = productInput : product = "iphone";

    //AJAX call
        //Problem: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
        //Solution: Set dataType: 'jsonp', crossDomain: true
    $.ajax({
        //Set AJAX properties
        url: queryURL + product,
        method: 'GET',
        dataType: 'jsonp',
        crossDomain: true
    }).done( response => {
        //Log response
        console.log(response);
    });
});