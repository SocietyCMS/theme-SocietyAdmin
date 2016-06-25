// //////////////////////////////////////////////////////////////////////////
// MediumEditor
// //////////////////////////////////////////////////////////////////////////
global.MediumEditor = require('medium-editor');
global.MediumEditorTable = require('medium-editor-tables');

import activateInsertPlugin from 'medium-editor-insert-plugin-webpack';
activateInsertPlugin(global.$);

global.editor = new MediumEditor('.editable');