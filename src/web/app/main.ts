import {bootstrap} from 'angular2/platform/browser';
import {TodoComponent} from './todo-component'
import {provide} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

bootstrap(
    TodoComponent,
    [
        HTTP_PROVIDERS
    ]
);