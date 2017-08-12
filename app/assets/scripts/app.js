  const getQuoteBtn = document.getElementById('new-quote-btn');
  const quoteContainer = document.getElementById('quote-holder');
  const quoteBody = document.getElementById('quote-text');
  const quoteSource = document.getElementById('quote-source');
  const btnWrapper = document.getElementById('btn-wrapper');

/*
Get a new quote from the API
 */
  function getAQuote() {
      $.ajax({
          url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
          success: function(data) {

              let post = data.shift(); // The data is an array of posts. Grab the first one. 

              btnWrapper.innerHTML = `<a class="button tweet-button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet?text=${quoteText} ~ ${post.title}"
  data-size="large">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class='button fb-button' target='_blank' OnClick="window.open(this.href,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;" href='http://www.facebook.com/sharer/sharer.php?u=https://jamesbyrne89.github.io/Random-Quote-Machine&title=Design Wisdom'>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>`;

              quoteBody.innerHTML = `<div id='quote-mark' class='quote__mark'>​‌“</div>${post.content}`;
              quoteSource.innerHTML = `<span>${post.title}</span>`;

              let quoteText = document.getElementsByTagName('p')[0].innerHTML;
              document.getElementById('tweet-quote').setAttribute('href', `https://twitter.com/intent/tweet?text=${quoteText}%20~%20${post.title}`);
          },
          cache: false
      });

  };

  getQuoteBtn.addEventListener('click', getAQuote);

  document.body.addEventListener('keyup', function(e) {
      if (e.keyCode === 32 || e.keyCode === 13) {
          getAQuote();
      }
  })

  getAQuote();