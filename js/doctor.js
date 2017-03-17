var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.searchDoctors = function(searchTerm, callback) {
  var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query='+
      searchTerm+
      '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' +
      encodeURI(apiKey);

  $.get(url)
    .then(function(result) {
       callback(result);
     })
    .fail(function(error){
       console.log("fail");
     });

};


exports.doctorModule = Doctor;
