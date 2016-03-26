import {Component} from 'angular2/core'
import {FilterPanel} from '../components/filter-panel'
import {MonthPanel} from '../components/month-panel'
import {CalendarService} from '../services/calendar-service'

@Component({
	selector: 'calendar',
	templateUrl: './app/components/calendar.html',
	directives: [FilterPanel, MonthPanel]
})
export class Calendar {
	
	constructor(private calendarService: CalendarService) { }

}