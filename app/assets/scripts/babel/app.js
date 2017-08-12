'use strict';

var getQuoteBtn = document.getElementById('new-quote-btn');
var quoteContainer = document.getElementById('quote-holder');
var quoteBody = document.getElementById('quote-text');
var quoteSource = document.getElementById('quote-source');
var btnWrapper = document.getElementById('btn-wrapper');

/*
Get a new quote from the API
 */
function getAQuote() {
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function success(data) {

            var post = data.shift(); // The data is an array of posts. Grab the first one. 

            btnWrapper.innerHTML = '<a class="button tweet-button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet?text=' + quoteText + ' ~ ' + post.title + '"\n  data-size="large">\n                        <i class="fa fa-twitter" aria-hidden="true"></i>\n                    </a>\n                    <a class=\'button fb-button\' target=\'_blank\' OnClick="window.open(this.href,\'targetWindow\',\'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250\'); return false;" href=\'http://www.facebook.com/sharer/sharer.php?u=https://jamesbyrne89.github.io/Random-Quote-Machine&title=Design Wisdom\'>\n                        <i class="fa fa-facebook" aria-hidden="true"></i>\n                    </a>';

            quoteBody.innerHTML = '<div id=\'quote-mark\' class=\'quote-mark\'>\u200B\u200C\u201C</div>' + post.content;
            quoteSource.innerHTML = '<span>' + post.title + '</span>';

            var quoteText = document.getElementsByTagName('p')[0].innerHTML;
            document.getElementById('tweet-quote').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quoteText + '%20~%20' + post.title);
        },
        cache: false
    });
};

getQuoteBtn.addEventListener('click', getAQuote);

document.body.addEventListener('keyup', function (e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
        getAQuote();
    }
});

getAQuote();