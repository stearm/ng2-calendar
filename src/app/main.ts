///<reference path="../../node_modules/angular2/typings/browser.d.ts" />
///<reference path="../typings/moment/moment.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Calendar} from './components/calendar';
import {CalendarService} from './services/calendar-service'

bootstrap(Calendar, [CalendarService]);