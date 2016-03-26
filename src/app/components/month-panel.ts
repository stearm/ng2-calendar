import {Component,Input} from 'angular2/core'
import {Line} from '../components/line'
import {Month} from '../models/month'
import {IFilter} from '../models/ifilter'
import {CalendarService} from '../services/calendar-service'

@Component({
	selector: 'month-panel',
	templateUrl: './app/components/month-panel.html',
	directives: [Line]
})
export class MonthPanel {
	
	constructor(private calendarService: CalendarService) { }

}