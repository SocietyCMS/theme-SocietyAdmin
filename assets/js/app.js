(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./elements/jQueryFunctions');

require('./elements/societyAdmin');
require('./elements/semanticFileTypeClassMap');

require('./elements/medium-editor');

},{"./elements/jQueryFunctions":2,"./elements/medium-editor":3,"./elements/semanticFileTypeClassMap":4,"./elements/societyAdmin":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
(function (global){
"use strict";

global.semanticFileTypeClassMap = {

    "text/plain": "file text outline",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "file word outline",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "file excel outline",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "file powerpoint outline",

    "application/zip": "file archive outline",
    "application/pdf": "file pdf outline",

    "audio/mpeg": "file audio outline",
    "audio/mpeg3": "file audio outline",
    "audio/mp4": "file audio outline",

    "image/png": "file image outline",
    "image/jpeg": "file image outline"
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
'use strict';

$('.toc .ui.sticky').sticky({
    context: '#content',
    observeChanges: true
});

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
