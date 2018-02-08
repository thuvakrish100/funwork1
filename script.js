SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/155366202', function(sound) {
    $('#Start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/173826641', function(sound) {
    $('#Start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/335350731', function(sound) {
    $('#Start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/349414693', function(sound) {
    $('#Start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/354663899', function(sound) {
    $('#Start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/316859203', function(sound) {
    $('#Start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/27107039', function(sound) {
    $('#Start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/317969885', function(sound) {
    $('#Start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/339606057', function(sound) {
    $('#Start8').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/235717376', function(sound) {
    $('#Start9').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop9').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/347351490', function(sound) {
    $('#Start10').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop10').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/345532678', function(sound) {
    $('#Start11').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop11').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/345497207', function(sound) {
    $('#Start11').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop11').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

});
