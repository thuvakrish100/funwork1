SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/155366202', function(sound) {
    $('#start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  });