// ==UserScript==
// @name           GitHub: Repo Counts
// @namespace      https://github.com/skratchdot/github-repo-counts.user.js
// @description    A user script to display repo counts when browsing Github repository pages.
// @include        https://github.com/*
// @match          https://github.com/*
// @require        https://gist.github.com/skratchdot/5604120/raw/_init.js
// @require        https://gist.github.com/skratchdot/5604120/raw/repo-counts.js
// @run-at         document-end
// @grant          none
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @updateURL      https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @version        1.9
// ==/UserScript==
/*global SKRATCHDOT, document */

// This code is only going to run for browsers that don't support
// the @require annotation when executing userscripts.
if ('undefined' === typeof SKRATCHDOT) {
	var addScript = function (src) {
		'use strict';
		var script = document.createElement('script');
		script.src = src;
		document.body.appendChild(script);
		document.body.removeChild(script);
	};

	// Required by: repo-filter-info
	addScript('https://gist.github.com/skratchdot/5604120/raw/repo-counts.js');
}