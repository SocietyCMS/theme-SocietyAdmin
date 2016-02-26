var editor = new MediumEditor('.editable', {
    placeholder: {
        text: ''
    },
    extensions: {
        table: new MediumEditorTable()
    },
    toolbar: {
        buttons: [
            'h2',
            'h3',
            'bold',
            'italic',
            'unorderedlist',
            'orderedlist',
            'table'
        ]
    }
});

$('.editable').mediumInsert({
    editor: editor
});