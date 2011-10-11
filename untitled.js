
/*

// bind on 
$$('#canvas_frame')[0].contentDocument

// for click on 
querySelectorAll('#\\:1n1')


// grab
('.b7.J-M .J-N')[2] // forward

// and clone it.

// 
.innerHTML = .innerHTML.replace('Forward', 'View in Groups')


// https://groups.google.com/a/google.com/forum/favicon.ico

*/

// okay fuck all that.
// starting with a URL like:
// https://mail.google.com/mail/?ui=2&ik=5ac907bf92&view=om&th=132f06dcf1473cae
var msgtext = document.body.textContent;

var msgid = msgtext.match(/Message-ID: <(.*?)>/i)[1];

// List-Id: <www-style.w3.org>
// List-Help: <http://www.w3.org/Mail/>
// List-Post: <mailto:www-style@w3.org>

// List-ID: <chrome-devrel.google.com>
// X-Google-Group-Id: 670934218986
// List-Post: <http://groups.google.com/a/google.com/group/chrome-devrel/post?hl=en_US>, <mailto:chrome-devrel@google.com>
// List-Help: <http://www.google.com/support/a/google.com/bin/static.py?hl=en_US&page=groups.cs>, <mailto:chrome-devrel+help@google.com>
// List-Archive: <http://groups.google.com/a/google.com/group/chrome-devrel/?hl=en_US>


var listid = msgtext.match(/List-ID: <(.*?)>/i)[1]
  , srcroot
  , url

// get the search root
if (/google\.com$/.test(listid)){
	srcroot = msgtext.match(/List-Post: <(.*?)\/group\//)[1];	

	url = srcroot + '/groups?msgid=' + encodeURIComponent(msgid);

	// heres the selector for that link:
	// $$('table.rf + * a')[0].href
    

} else 
if (/w3\.org$/.test(listid)){

	url = 'http://www.w3.org/mid/' + msgid + ';list=' + listid.replace(/w3\.org$/,'');


}



window.open(url, Math.random());
// location.href = url;

// get that URL and this part of it





// in w3c case

var url  = 'http://www.w3.org/Search/Mail/Public/advanced_search?'+
'keywords=&hdr-1-name=subject&hdr-1-query=&hdr-2-name=from&'+
'hdr-2-query=&hdr-3-name=message-id&hdr-3-query='+ encodeURIComponent(msgid) +
'&period_month=&period_year=&index-type=g&index-grp=Public__FULL&'+
'type-index=&resultsperpage=20&sortby=date'

// $$('.result strong a')[0].href

// interestingly enough... 








