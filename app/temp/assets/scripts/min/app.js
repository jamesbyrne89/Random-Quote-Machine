"use strict";function getAQuote(){$.ajax({url:"https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",success:function(t){var e=t.shift();btnWrapper.innerHTML='<a class="button tweet-button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet?text='+n+" ~ "+e.title+'"\n  data-size="large">\n                        <i class="fa fa-twitter" aria-hidden="true"></i>\n                    </a>\n                    <a class=\'button fb-button\' target=\'_blank\' OnClick="window.open(this.href,\'targetWindow\',\'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250\'); return false;" href=\'http://www.facebook.com/sharer/sharer.php?u=https://jamesbyrne89.github.io/Random-Quote-Machine&title=Design Wisdom\'>\n                        <i class="fa fa-facebook" aria-hidden="true"></i>\n                    </a>',quoteBody.innerHTML="<div id='quote-mark' class='quote-mark'>​‌“</div>"+e.content,quoteSource.innerHTML="<span>"+e.title+"</span>";var n=document.getElementsByTagName("p")[0].innerHTML;document.getElementById("tweet-quote").setAttribute("href","https://twitter.com/intent/tweet?text="+n+"%20~%20"+e.title)},cache:!1})}var getQuoteBtn=document.getElementById("new-quote-btn"),quoteContainer=document.getElementById("quote-holder"),quoteBody=document.getElementById("quote-text"),quoteSource=document.getElementById("quote-source"),btnWrapper=document.getElementById("btn-wrapper");getQuoteBtn.addEventListener("click",getAQuote),document.body.addEventListener("keyup",function(t){32!==t.keyCode&&13!==t.keyCode||getAQuote()}),getAQuote();