$(document).ready(function () {
    var name = $("#customerName");
    var number = $("#phoneNumber");
    var comments = $("#review");
    
    $(addCustomer).on("submit", submit);
    function submit(event){
        var newCustomer = {
            customerName: name.val().trim(),
            phoneNumber: number.val().trim(),
            review: comments.val().trim(),
        };
        submit(newCustomer);
    };

    function submit(newCustomer){
        $.post("/api/customers", newCustomer, function(){
            window.location.href = "/customers";
        });
    }
});
