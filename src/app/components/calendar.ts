import {Component,Input} from 'angular2/core';
import {FilterPanel} from '../components/filter-panel';
import {MonthPanel} from '../components/month-panel';
import {Line} from '../components/line';
import {EventService} from '../services/event-service';
import {Month} from '../models/month';
import {IFilter} from '../models/ifilter';

@Component({
	selector: 'calendar',
	templateUrl: './app/components/calendar.html',
	providers: [EventService],
	directives: [FilterPanel, MonthPanel]
})
export class Calendar {

	@Input() filter: IFilter = {
		"month": moment().month(),
		"year": moment().year()
	};
	
	constructor(private _eventService: EventService) { }

}