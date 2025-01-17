$(document).ready(function() {
    //Create a function that respond to a click of the form and sends an alert
    $('#add_to_cart_form').click(function() {
        alert('Please log in to add items to cart'); 
    });
    
    //Create function that responds when user inputs text and stores it in lowercase in the value variable
    $("#search_input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        // Use a filter function to loop through the table and using the toggle method hide all elements exact for those with match value
        $("#necklaces_table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});