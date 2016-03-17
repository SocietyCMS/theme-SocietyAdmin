/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// /////////////////////////////////////////////////
	// Components
	// /////////////////////////////////////////////////
	__webpack_require__(1);

	__webpack_require__(2);

	// /////////////////////////////////////////////////
	// Elements - 3rd Party components
	// /////////////////////////////////////////////////
	__webpack_require__(3);

	__webpack_require__(4);
	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	setTimeout(function () {

	    $('.message .close').on('click', function () {
	        $(this).closest('.message').transition('fade');
	    });

	    $('.ui.dropdown').dropdown();

	    $('.ui.initialize.accordion').accordion();
	}, 100);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Vue.filter('humanReadableFilesize', function (size) {
	    return filesize(size, { round: 0 });
	});

	Vue.filter('semanticFileTypeClass', function (mime) {
	    if (semanticFileTypeClassMap[mime]) {
	        return semanticFileTypeClassMap[mime];
	    }
	    return "file outline";
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	jQuery.fn.extend({
	    disableSelection: function disableSelection() {
	        return this.each(function () {
	            this.onselectstart = function () {
	                return false;
	            };
	            this.unselectable = "on";
	            jQuery(this).css('user-select', 'none');
	            jQuery(this).css('-o-user-select', 'none');
	            jQuery(this).css('-moz-user-select', 'none');
	            jQuery(this).css('-khtml-user-select', 'none');
	            jQuery(this).css('-webkit-user-select', 'none');
	        });
	    }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	$('.toc .ui.sticky').sticky({
	    context: '#content',
	    observeChanges: true
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	global.semanticFileTypeClassMap = {

	    // folder
	    "application/x-directory": "folder",

	    // archive
	    "application/x-gtar": "file archive outline",
	    "application/x-tar": "file archive outline",
	    "application/x-ustar": "file archive outline",
	    "application/zip": "file archive outline",

	    // audio
	    "audio/basic": "file audio outline",
	    "audio/echospeech": "file audio outline",
	    "audio/tsplayer": "file audio outline",
	    "audio/voxware": "file audio outline",
	    "audio/x-aiff": "file audio outline",
	    "audio/x-dspeeh": "file audio outline",
	    "audio/x-midi": "file audio outline",
	    "audio/x-mpeg": "file audio outline",
	    "audio/x-pn-realaudio": "file audio outline",
	    "audio/x-pn-realaudio-plugin": "file audio outline",
	    "audio/x-qt-stream": "file audio outline",
	    "audio/x-wav": "file audio outline",
	    "audio/mpeg": "file audio outline",
	    "audio/mpeg3": "file audio outline",
	    "audio/mp4": "file audio outline",

	    // excel
	    "application/msexcel": "file excel outline",
	    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "file excel outline",

	    // image
	    "image/gif": "file image outline",
	    "image/ief": "file image outline",
	    "image/jpeg": "file image outline",
	    "image/png": "file image outline",
	    "image/tiff": "file image outline",
	    "image/x-icon": "file image outline",

	    // pdf
	    "application/pdf": "file pdf outline",

	    // powerpoint
	    "application/mspowerpoint": "file powerpoint outline",
	    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "file powerpoint outline",

	    // text
	    "text/comma-separated-values": "file text outline",
	    "text/css": "file text outline",
	    "text/html": "file text outline",
	    "text/javascript": "file text outline",
	    "text/plain": "file text outline",
	    "text/richtext": "file text outline",
	    "text/rtf": "file text outline",
	    "application/xml": "file text outline",

	    // video
	    "video/mpeg": "file video outline",
	    "video/quicktime": "file video outline",
	    "video/x-msvideo": "file video outline",
	    "video/x-sgi-movie": "file video outline",
	    "video/vnd.vivo": "file video outline",

	    // word
	    "application/msword": "file word outline",
	    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "file word outline"

	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var editor = new Dante.Editor({
	    el: "#editor",
	    upload_url: "/images.json",
	    store_url: '/api/blog/article/blabla/autosave?token=' + societycms.jwtoken,
	    disable_title: true,
	    body_placeholder: "Tell your story..."
	});
	editor.start();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	toastr.options = {
	    "closeButton": false,
	    "debug": false,
	    "newestOnTop": false,
	    "progressBar": true,
	    "positionClass": "toast-top-center",
	    "preventDuplicates": false,
	    "onclick": null,
	    "showDuration": "300",
	    "hideDuration": "1000",
	    "timeOut": "8000",
	    "extendedTimeOut": "1000",
	    "showEasing": "swing",
	    "hideEasing": "linear",
	    "showMethod": "fadeIn",
	    "hideMethod": "fadeOut"
	};

/***/ }
/******/ ]);