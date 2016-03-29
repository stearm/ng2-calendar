import {Component,Input} from 'angular2/core'
import {Line} from '../components/line'
import {FilterPanel} from '../components/filter-panel'
import {Month} from '../models/month'
import {IFilter} from '../models/ifilter'
import {CalendarService} from '../services/calendar-service'

@Component({
	selector: 'month-panel',
	templateUrl: './app/components/month-panel.html',
	directives: [FilterPanel,Line]
})
export class MonthPanel {
	
	@Input() filter: IFilter;
	
	constructor(private calendarService: CalendarService) { }

}