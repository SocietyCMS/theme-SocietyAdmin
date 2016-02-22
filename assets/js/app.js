(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// /////////////////////////////////////////////////
// Components
// /////////////////////////////////////////////////
require('./components/semantic-ui');

require('./components/vue-filters');

// /////////////////////////////////////////////////
// Elements - 3rd Party components
// /////////////////////////////////////////////////
require('./elements/jQueryFunctions');

require('./elements/societyAdmin');
require('./elements/semanticFileTypeClassMap');

require('./elements/medium-editor');

require('./elements/toastr');

},{"./components/semantic-ui":2,"./components/vue-filters":3,"./elements/jQueryFunctions":4,"./elements/medium-editor":5,"./elements/semanticFileTypeClassMap":6,"./elements/societyAdmin":7,"./elements/toastr":8}],2:[function(require,module,exports){
'use strict';

setTimeout(function () {

    $('.message .close').on('click', function () {
        $(this).closest('.message').transition('fade');
    });

    $('.ui.dropdown').dropdown();
}, 100);

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var editor = new MediumEditor('.editable', {
    placeholder: {
        text: ''
    },
    extensions: {
        table: new MediumEditorTable()
    },
    toolbar: {
        buttons: ['h2', 'h3', 'bold', 'italic', 'unorderedlist', 'orderedlist', 'table']
    }
});

},{}],6:[function(require,module,exports){
(function (global){
"use strict";

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
'use strict';

$('.toc .ui.sticky').sticky({
    context: '#content',
    observeChanges: true
});

},{}],8:[function(require,module,exports){
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

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
