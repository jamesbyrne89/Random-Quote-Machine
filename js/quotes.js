$(document).ready(function() {
$('#generate').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        var quoteSource = (post.title);
        var currentQuote = (post.content);
        $('#quote-source').html('~   ' + post.title).animate({opacity:1},400);
        $('#quote-holder').html(post.content).animate({opacity:1},400);
        $('#tweet-button').animate({opacity:1},400);
        var noTags = currentQuote.replace(/(<([^>]+)>)/gi,"");
          $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + noTags + "- " + quoteSource));
      },
      cache: false
    });
  });
});
  


