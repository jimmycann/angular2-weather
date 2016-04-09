System.register(['angular2/core', 'angular2/router', './route-config', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, route_config_1, http_1;
    var MyProjectApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (route_config_1_1) {
                route_config_1 = route_config_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MyProjectApp = (function () {
                function MyProjectApp(http) {
                    this.http = http;
                }
                MyProjectApp.prototype.ngOnInit = function () {
                    this.getWeather();
                };
                MyProjectApp.prototype.getWeather = function () {
                    var _this = this;
                    this.http.get('http://globalmapweather.azurewebsites.net:80/api/Weather')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.weather = data; }, function (err) { return console.error(err); }, function () { return console.log(_this.weather); });
                };
                MyProjectApp = __decorate([
                    core_1.Component({
                        selector: 'my-project-app',
                        providers: [router_1.ROUTER_PROVIDERS],
                        templateUrl: 'app/my-project.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([].concat(route_config_1.CliRouteConfig)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyProjectApp);
                return MyProjectApp;
            }());
            exports_1("MyProjectApp", MyProjectApp);
        }
    }
});
//# sourceMappingURL=my-project.js.map