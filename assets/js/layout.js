$(document).ready(function() {
  $('.indentation-container' ).on('click', '.indentation.indentation-toggle', function() {
    $( this ).closest( '.indentation-container' ).addClass( 'collapsed' );
  });

  $('.indentation-container' ).on('click', '.indentation-ellipsis.indentation-toggle', function() {
    $( this ).closest( '.indentation-container' ).removeClass( 'collapsed' );
  });

  $('[data-toggle="tooltip"]').tooltip();
});
