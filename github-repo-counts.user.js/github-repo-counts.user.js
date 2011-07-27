// ==UserScript==
// @name           GitHub Repo Counts
// @namespace      https://github.com/skratchdot/github-repo-counts.user.js
// @description    A user script to display repo counts when browsing Github repository pages.
// @include        https://github.com/*
// ==/UserScript==

var main = function () {
	$(document).ready(function() {
		$('ul.repo_filterer li a').each(function() {
			try {
				var elem = $(this);
				var selector = elem.attr('rel');
				var elements = $('ul.repo_list').find('li.' + selector);
				elem.append(' (' + elements.size() + ')');				
			} catch(e) {}
		});
	});
};

// Inject our main script
var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
