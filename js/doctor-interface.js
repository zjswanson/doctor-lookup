var displayDoctorList = function(doctorList) {
  console.log(doctorlist);
};

$(document).ready(function() {

  $("#search-button").click(function() {
    var searchTerm = $("#search").val();
    var doctor = new Doctor();
    doctor.searchDoctors(searchTerm);
  });



});
