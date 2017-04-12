
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.modal').modal({
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.        
          google.maps.event.trigger(map, 'resize');
        },
      });
      $('select').material_select();
      $(".dropdown-button").dropdown();
      $( "#submitBtn" ).click(function() {
     		console.log($('#stateSelection').val())
        $("#parkDisplay").show();;
      });
      $(".parkSubmitBtn").click(function(){
        $("#parallax2").show();
      });

      $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#explosion-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
      });
      
      // video controls
      $('#state').on('click', function () {
          var video = $('#explosion-vid').get(0);
          var icons = $('#state > span');
          $('#overlay').toggleClass('fade');
          if (video.paused) {
              video.play();
              icons.removeClass('iconicfill-play').addClass('iconicfill-pause');
          } else {
              video.pause();
              icons.removeClass('iconicfill-pause').addClass('iconicfill-play');
          }
      });
    });     

function goBack() {
    window.history.back();
}