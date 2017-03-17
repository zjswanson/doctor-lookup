
var Doctor = require('./../js/doctor.js').doctorModule;



var displayDoctorList = function(doctorList) {
  console.log(doctorList);
};

$(document).ready(function() {

  $("#search-button").click(function() {
    var searchTerm = $("#search").val();
    var doctor = new Doctor();
    doctor.searchDoctors(searchTerm, displayDoctorList);
  });



});
