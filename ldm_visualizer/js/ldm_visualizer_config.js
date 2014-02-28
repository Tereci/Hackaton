require.config({
    baseUrl: ".",
    paths: {
        'jquery': '../../lib/jquery/jquery',
        'handlebars': '../../lib/handlebars/handlebars',
        'ember': '../../lib/ember/ember',
        'modernizr': '../../lib/modernizr/modernizr',
        'foundation': '../../lib/foundation/js/foundation',
        'foundation.ext': '../../lib/foundation/js/foundation/foundation.tooltip',
        'labs': '../../assets/gd-labs',
        'templates': 'js/app/templates/compiled.hbs',
        'sdk': '../../lib/gd-sdk-js/dist/gd-sdk-js',
        // TODO: will be removed when sdk team fixes their bug
        'xhr': '../../assets/xhr'
    },
    shim: {
        'handlebars': ['jquery'],
        'ember': ['handlebars'],
        'modernizr': ['jquery'],
        'foundation': ['modernizr'],
        'foundation.ext': ['foundation'],
        'xhr': ['jquery'],
        'sdk': ['xhr-on-window'],
        'labs': ['sdk-on-window'],
        'templates': ['ember']
    },

    // main application module
    deps: ["js/ldm_visualizer.js"]
});