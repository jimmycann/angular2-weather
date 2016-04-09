System.register(['angular2/http', 'angular2/platform/browser', 'rxjs/add/operator/map', './app/my-project'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, browser_1, my_project_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (my_project_1_1) {
                my_project_1 = my_project_1_1;
            }],
        execute: function() {
            // class MyOptions extends BaseRequestOptions {
            //   body: string = JSON.stringify({name: "Ryan"});
            // }
            //[HTTP_PROVIDERS, provide(RequestOptions, {useClass:MyOptions})]
            browser_1.bootstrap(my_project_1.MyProjectApp, [
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map