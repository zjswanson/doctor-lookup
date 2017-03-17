var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.searchDoctors = function(search, callback) {
  var url = 'https://api.betterdoctor.com/2016-03-01/doctors?' +
    'query='+ encodeURI(search.term) + //text search
      '&location=' + encodeURI(search.location) + encodeURI(search.radius) +
      '&skip=0&limit=' + encodeURI(search.number) +
      '&user_key=' +
      encodeURI(apiKey);

  var searchResults =[];
  $.get(url)
    .then(function(result) {
      // each doctor at:
      result.data.forEach(function(foundDoctor) {
        // things to display: Practice Name .practices.name
        var doctor = {
          'practiceName': foundDoctor.practices[0].name,
          'name': foundDoctor.profile.first_name + foundDoctor.profile.last_name,
          'bio': foundDoctor.profile.bio,
          'image': foundDoctor.profile.image_url,
          'specialty': foundDoctor.specialties[0].name
        };
        searchResults.push(doctor);
      });

     })
     .then(function() {

       callback(searchResults);
     })
    .fail(function(error){
       console.log("fail");
     });

};


exports.doctorModule = Doctor;
