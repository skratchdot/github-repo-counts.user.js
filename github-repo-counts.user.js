// ==UserScript==
// @name           GitHub: Repo Counts
// @namespace      https://github.com/skratchdot/github-repo-counts.user.js
// @description    A user script to display repo counts when browsing Github repository pages.
// @include        https://github.com/*
// @match          https://github.com/*
// @run-at         document-end
// @grant          none
// @icon           http://skratchdot.com/favicon.ico
// @downloadURL    https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @updateURL      https://github.com/skratchdot/github-repo-counts.user.js/raw/master/github-repo-counts.user.js
// @version        1.7
// ==/UserScript==
/*global jQuery */
/*jslint browser: true */

(function () {
	'use strict';

	var init = function () {
		// Make input filter smaller when the "new repo" button exists
		if (jQuery('body.page-profile .filter-bar a.new-repo').length > 0) {
	        $('#your-repos-filter').css('width','210px');
		}
		jQuery('.page-profile ul.repo_filterer li a').each(function () {
			try {
				var elem = jQuery(this),
					selector = elem.attr('rel'),
					elements = jQuery('ul.js-repo-list').find('li.' + selector);
				elem.append(' (' + elements.size() + ')');
				elem.css('font-size', '11px');
			} catch (e) {}
		});
	};

	jQuery(document).ready(function () {
		jQuery(document).on('pjax:end', function (event) {
			if (jQuery(event.relatedTarget).parents('li[data-tab="repo"]').length > 0) {
				init();
			}
		});
		init();
	});
}());