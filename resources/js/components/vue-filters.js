Vue.filter('humanReadableFilesize', function (size) {
    return filesize(size, {round: 0});
});

Vue.filter('semanticFileTypeClass', function (mime) {
    if (semanticFileTypeClassMap[mime]) {
        return semanticFileTypeClassMap[mime]
    }
    return "file outline"
});

// Localization
Vue.filter('trans', function (lang, param) {
    return Lang.get(lang, param);
});
Vue.filter('trans_has', function (lang) {
    return Lang.has(lang, param);
});
Vue.filter('trans_choice', function (lang, count, param) {
    return Lang.choice(lang, count, param);
});