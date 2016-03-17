
// //////////////////////////////////////////////////////////////////////////
// jQuery
// //////////////////////////////////////////////////////////////////////////
global.$ = global.jQuery = require('jquery');
require('jquery-ui');
require('jquery-tablesort');
require('jquery-sortable');
require('jqtree');

require('imports?define=>false!blueimp-file-upload');


// //////////////////////////////////////////////////////////////////////////
// Unterscore
// //////////////////////////////////////////////////////////////////////////
global._ = require('underscore');

// //////////////////////////////////////////////////////////////////////////
// Vue.js
// //////////////////////////////////////////////////////////////////////////
global.Vue = require('vue');
global.Vue.use(require('vue-resource'));

global.VueRouter = require('vue-router');
global.Vue.use(VueRouter);

// //////////////////////////////////////////////////////////////////////////
// Fine Uploader
// //////////////////////////////////////////////////////////////////////////
global.fineUploader = require('exports?qq!fine-uploader/fine-uploader/fine-uploader.js');

// //////////////////////////////////////////////////////////////////////////
// Sortable Table
// //////////////////////////////////////////////////////////////////////////
global.Sortable = require('sortablejs');

// //////////////////////////////////////////////////////////////////////////
// MediumEditor
// //////////////////////////////////////////////////////////////////////////
global.MediumEditor = require('medium-editor');
global.MediumEditorTable = require('medium-editor-tables');

// //////////////////////////////////////////////////////////////////////////
// Dante
// //////////////////////////////////////////////////////////////////////////
global.Sanitize = require('../vendor/sanitize/sanitize.js');

require('../vendor/dante/js/dante-editor.js');
require('../vendor/dante/css/dante-editor.css');


// //////////////////////////////////////////////////////////////////////////
// FullCalendar
// //////////////////////////////////////////////////////////////////////////
global.fullcalendar = require('fullcalendar');
global.moment = require('moment');

// //////////////////////////////////////////////////////////////////////////
// Filesize
// //////////////////////////////////////////////////////////////////////////
global.filesize = require('filesize');

// //////////////////////////////////////////////////////////////////////////
// Toastr
// //////////////////////////////////////////////////////////////////////////
global.toastr = require('toastr');
