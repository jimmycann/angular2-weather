import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'my-project-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/my-project.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class MyProjectApp {
  public weather;

  constructor(private http: Http){}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.http.get('http://globalmapweather.azurewebsites.net:80/api/Weather')
        .map((res:Response) => res.json())
        .subscribe(
            data => { this.weather = data},
            err => console.error(err),
            () => console.log(this.weather)
        );

  }
}