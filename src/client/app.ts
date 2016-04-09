import { HTTP_PROVIDERS, RequestOptions } from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import 'rxjs/add/operator/map';
import {MyProjectApp} from './app/my-project';

// class MyOptions extends BaseRequestOptions {
//   body: string = JSON.stringify({name: "Ryan"});
// }

//[HTTP_PROVIDERS, provide(RequestOptions, {useClass:MyOptions})]
bootstrap(MyProjectApp, [
    HTTP_PROVIDERS
]);

