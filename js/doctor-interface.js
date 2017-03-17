
var Doctor = require('./../js/doctor.js').doctorModule;



var displayDoctorList = function(doctorList) {
  $("#display").empty();
  var htmlString = "";
  console.log(doctorList);
  if (doctorList.length > 0) {
    doctorList.forEach(function(doctor) {
      htmlString +=
      "<div class='col-md-6'>"+
      "<div class='panel panel-primary'>" +
      "<div class='panel-heading'>" +
      "<h3 class='panel-title'>"+ doctor.name + "</h3>" +
      "</div>" +
      "<div class='panel-body'>" +
      "<img src='" + doctor.image + "' alt='Doctor Image'/>" +
      "<h6>Practice Name: " + doctor.practiceName + "</h6>" +
      "<h6>Specialty: " + doctor.specialty +"</h6>" +
      "<p>" +
      doctor.bio +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
    });
  } else {
    htmlString = "<h4>No Doctors Found.  Try another Search</h4>"
  }
  $("#display").append(htmlString);
};

$(document).ready(function() {

  $("#search-button").click(function() {
    //Build Search array (term, location, radius, number)
    var search= {
      'term': $("#search").val(),
      'location': $('select option:selected').val(),
      'radius': $('input[type=radio]:checked').val(),
      'number': $('#number').val()
    };
    if (search.number <= 0) {
      search.number = 1;
    }
    console.log(search);
    var doctor = new Doctor();
    doctor.searchDoctors(search, displayDoctorList);
  });



});
