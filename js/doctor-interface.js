var Doctor = require('./../js/doctor.js').doctorModule;



var displayDoctorList = function(doctorList) {
  console.log(doctorlist);
};

$(document).ready(function() {

  $("#search-button").click(function() {
    var searchTerm = $("#search").val();
    var newdoctor = new Doctor();
    doctor.searchDoctors(searchTerm, displayDoctorList);
  });



});
