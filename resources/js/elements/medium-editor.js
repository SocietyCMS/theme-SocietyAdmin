
var editor = new Dante.Editor(
    {
        el: "#editor",
        upload_url: "/images.json",
        store_url: '/api/blog/article/blabla/autosave?token='+societycms.jwtoken,
        disable_title: true,
        body_placeholder: "Tell your story..."
    }
);
editor.start();