
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

var msgid = msgtext.match(/\nMessage-ID: <(.*?)>/i)[1];

var subject = msgtext.match(/\nSubject: (.*)/)[1];

// List-Id: <www-style.w3.org>
// List-Help: <http://www.w3.org/Mail/>
// List-Post: <mailto:www-style@w3.org>

// List-ID: <chrome-devrel.google.com>
// X-Google-Group-Id: 670934218986
// List-Post: <http://groups.google.com/a/google.com/group/chrome-devrel/post?hl=en_US>, <mailto:chrome-devrel@google.com>
// List-Help: <http://www.google.com/support/a/google.com/bin/static.py?hl=en_US&page=groups.cs>, <mailto:chrome-devrel+help@google.com>
// List-Archive: <http://groups.google.com/a/google.com/group/chrome-devrel/?hl=en_US>

// List-ID: <google-chrome-developer-tools.googlegroups.com>
// List-Post: <http://groups.google.com/group/google-chrome-developer-tools/post?hl=en_US>, <mailto:google-chrome-developer-tools@googlegroups.com>
// List-Help: <http://groups.google.com/support/?hl=en_US>, <mailto:google-chrome-developer-tools+help@googlegroups.com>
// List-Archive: <http://groups.google.com/group/google-chrome-developer-tools?hl=en_US>


// FIXME: this one is broken:
//    List-ID: <chromium-html5.chromium.org>
//    X-Google-Group-Id: 874170190433
//    List-Post: <http://groups.google.com/a/chromium.org/group/chromium-html5/post?hl=en_US>,
//     <mailto:chromium-html5@chromium.org>
//    List-Help: <http://www.google.com/support/a/chromium.org/bin/static.py?hl=en_US&page=groups.cs>,
//     <mailto:chromium-html5+help@chromium.org>
//    List-Archive: <http://groups.google.com/a/chromium.org/group/chromium-html5/?hl=en_US>
//    List-Subscribe: <http://groups.google.com/a/chromium.org/group/chromium-html5/subscribe?hl=en_US>,
//     <mailto:chromium-html5+subscribe@chromium.org>

// and then sometimes there is no listid in the orig message..
var listid = (msgtext.match(/\nList-ID: (.*)/i) || msgtext.match(/\nTo: .*?<(.*?)>/i))[1]
  , srcroot
  , url

// google
if (/(google|googlegroups)\.com/.test(listid)){


	// google groups search is totally busted. :(
	// so we'll just go to the group homepage.
	url = msgtext.match(/\nList-Archive: <(.*)>/)[1];

// w3
} else if (/w3\.org$/.test(listid)){

	//url = 'http://www.w3.org/mid/' + msgid + ';list=' + listid.replace(/w3\.org$/,'');
	url = "http://www.google.com/search?q=" + encodeURIComponent('site:lists.w3.org "' + subject + '"') + "&btnI";


// webkit-dev
} else if (/webkit-dev/.test(listid)){

	url = "http://www.google.com/search?q=" + encodeURIComponent('site:lists.webkit.org "' + subject + '"') + "&btnI";

// whatwg
} else if (/whatwg/.test(listid)){

	url = "http://www.google.com/search?q=" + encodeURIComponent('site:lists.whatwg.org "' + subject + '"') + "&btnI";
}



if (url)
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








