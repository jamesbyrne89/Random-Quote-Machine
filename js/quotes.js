$('#generate').on('click', function() {
        $("#quote-holder").addClass("reset");
        $("#quote-holder").removeClass("executed");
        $("#quote-source").delay(1000).addClass("reset");
        $("#quote-source").delay(1000).removeClass("executed");
        $("#tweet-button").addClass("reset");
        $("#tweet-button").removeClass("executed");
                $("#tweet-quote").delay(10000).addClass("reset");
        $("#tweet-quote").delay(10000).removeClass("executed");
        setTimeout(function(){ 
          $.ajax({
            crossOrigin: true,
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
            dataType:"jsonp"
        });
        }, 300); 
  });
  function mycallback(json){
    var quote = json[0];
    $("#quote-holder").html(quote.content);
    $("#quote-source").html("~ " + quote.title);
    $("#quote-holder").addClass("executed");
    $("#quote-holder").removeClass("reset");
    $("#quote-source").delay(1000).addClass("executed");
    $("#quote-source").delay(1000).removeClass("reset");
    $("#tweet-button").addClass("executed");
    $("#tweet-button").removeClass("reset");
        $("#tweet-quote").delay(10000).addClass("executed");
    $("#tweet-quote").delay(10000).removeClass("reset");
    var noTags = (quote.content).replace(/(<([^>]+)>)/gi,"'");
          $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent(noTags +' - ' + (quote.title)));
  }


