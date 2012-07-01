// ==UserScript==
// @name           GitHub Repo Counts
// @namespace      https://github.com/skratchdot/github-repo-counts.user.js
// @description    A user script to display repo counts when browsing Github repository pages.
// @include        https://github.com/*
// @match          https://github.com/*
// @run-at         document-end
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @updateURL      https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @version        1.1
// ==/UserScript==
/*global jQuery */
/*jslint browser: true */

var main = function () {
	'use strict';
	jQuery(document).ready(function () {
		jQuery('.page-profile ul.repo_filterer li a').each(function () {
			try {
				var elem = jQuery(this),
					selector = elem.attr('rel'),
					elements = jQuery('ul.repo_list').find('li.' + selector);
				elem.append(' (' + elements.size() + ')');
			} catch (e) {}
		});
	});
};

// Inject our main script
var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
