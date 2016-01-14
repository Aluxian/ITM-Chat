/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
requirejs.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'handlebars': '../lib/handlebars/handlebars',
        'text': '../lib/requirejs-text/text',
        '_': '../lib/lodash/dist/lodash',
        '$': '../lib/jquery/jquery',
        'angular-foundation': '../lib/angular-foundation/mm-foundation',
        'angular-foundation-tpls': '../lib/angular-foundation/mm-foundation-tpls'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular':{
            exports: 'angular'
        },
        'angular-ui-router':{
            deps: ['angular']
        },
        'handlebars':{
            exports: 'Handlebars'
        },
        '_':{
            exports:'_'
        },
        'angular-foundation-tpls':{
            deps: ['angular']
        },
        'angular-foundation':{
            deps: ['angular', 'angular-foundation-tpls']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
