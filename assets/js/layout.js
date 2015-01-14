ellipsis = {
  'value' : ['&nbsp;', '.', '..', '...'],
  'count' : 0,
  'run' : false,
  'timer' : null,
  'element' : '.loading',
  'start' : function () {
    var t = this;
    this.run = true;
    this.timer = setInterval(function () {
      if (t.run) {
        $(t.element).html(t.value[t.count % t.value.length]).text();
        t.count++;
      }
    }, 250);
  },
  'stop' : function () {
    this.run = false;
    clearInterval(this.timer);
    this.count = 0;
  }
}

ellipsis.start();

$( document ).ready(function() {
  $( '.indentation-container' ).on( 'click', '.indentation.indentation-toggle', function() {
    $( this ).closest( '.indentation-container' ).addClass( 'collapsed' );
  });

  $( '.indentation-container' ).on( 'click', '.indentation-ellipsis.indentation-toggle', function() {
    $( this ).closest( '.indentation-container' ).removeClass( 'collapsed' );
  });
});
