function info (first, last, phone, state, city) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.statePlace = state;
  this.cityPlace = city;
};
//
// function list (obj) {
//   for (i = 0; )
//
// }

$(function () {
  $('form').submit(function() {
    event.preventDefault();

    var inpFirstName = $("input#first-name").val();
    var inpLastName = $("input#last-name").val();
    var inpPhoneNumber = $("input#phone-number").val();
    var inpStatePlace = $("input#state-place").val();
    var inpCityPlace = $("input#city-place").val();

    var newPerson = new info(inpFirstName, inpLastName, inpPhoneNumber, inpStatePlace, inpCityPlace);

      $('#test').text(newPerson.firstName + newPerson.lastName + newPerson.phoneNumber + newPerson.statePlace + newPerson.cityPlace);

  });
});
