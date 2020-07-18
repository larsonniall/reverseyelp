$(document).ready(function(){

  

  $("#signUp").on("click", function(event) {
 
    window.location.href = "/customers";
  //   $.ajax("/customers", {
  //     type: "GET"
  //   }).then(
  //     function () {
  //       console.log("please enter your information to sign up");
        
  //       window.location.href = "/customers";
  //     }
  //   );
  // });
});


$("#search").on("submit", function(event){
  event.preventDefault();
var input= $("#text").val();
console.log(input);
// make an ajax request to the route defined searching for a customer 
//look for that specific name in the database 




});
  


//   $.ajax("/api/customers", {
//     type: "POST",
//     data: newCustomer
//   }).then(
//     function () {
//       console.log("created new customers");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );



// $.ajax("/api/customers/" + id, {
// type: "DELETE"
// }).then(
// function () {
//   console.log("deleted customers", id);
//   // Reload the page to get the updated list
//   location.reload();
// }
// );



});