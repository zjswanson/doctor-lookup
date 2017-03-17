
var Doctor = require('./../js/doctor.js').doctorModule;



var displayDoctorList = function(doctorList) {
  var htmlString = "";
  doctorList.forEach(function(doctor) {
    htmlString +=
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
    "</div>";
  });
  $("#display").append(htmlString);
};

$(document).ready(function() {

  $("#search-button").click(function() {
    var searchTerm = $("#search").val();
    var doctor = new Doctor();
    doctor.searchDoctors(searchTerm, displayDoctorList);
  });



});
