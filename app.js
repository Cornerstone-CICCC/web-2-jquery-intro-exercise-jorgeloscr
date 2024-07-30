$(function() {
  // YOUR CODE HERE

    $('#toggleButton').click(function() {
        $('#myParagraph').toggle();
    });

    $('#colorButton').click(function() {
        $('#colorDiv').css('background-color', 'red');
    });

    $('#addClassButton').click(function() {
        $('#classDiv').addClass('highlight');
    });

    $('#removeClassButton').click(function() {
        $('#classDiv').removeClass('highlight');
    });

    $('#fadeInButton').click(function() {
        $('#fadeDiv').fadeIn();
    });

    $('#fadeOutButton').click(function() {
        $('#fadeDiv').fadeOut();
    });

    $('#slideUpButton').click(function() {
        $('#slideDiv').slideUp();
    });

    $('#slideDownButton').click(function() {
        $('#slideDiv').slideDown();
    });

})