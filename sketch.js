window.onload = function() 
{$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

$(document).ready(function() {
  // add click event listener to document
  $(document).on('click', function(event) {
    // create new lily1 element
    var lily1 = $('<div class="lily1"></div>');
    // set lily1 position based on mouse click coordinates
    lily1.css({
      top: event.clientY - 100,
      left: event.clientX - 100,
    });
    // append lily1 to body
    $('body').append(lily1);
    // show lily1
    lily1.fadeIn();
  });
});






}

