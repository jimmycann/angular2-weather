System.register(['angular2/testing', '../app/my-project'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_project_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_project_1_1) {
                my_project_1 = my_project_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [my_project_1.MyProjectApp]; });
            testing_1.describe('App: MyProject', function () {
            });
        }
    }
});
//# sourceMappingURL=my-project.spec.js.map