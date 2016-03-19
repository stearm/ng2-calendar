import {Component} from 'angular2/core';
import {FilterPanel} from '../components/filter-panel';
import {Line} from '../components/line';
import {EventService} from '../services/event-service';
import {Month} from '../models/month';

@Component({
	selector: 'calendar',
	templateUrl: './app/components/calendar.html',
	providers: [EventService],
	directives: [FilterPanel, Line]
})
export class Calendar {

	selectedMonth: Month = moment().month();
	selectedYear: number = moment().year();;

	constructor(private _eventService: EventService) { }
	
	getOffset(){
		return moment().year(this.selectedYear).month(this.selectedMonth).date(1).day();
	}
	
	getFrom(index:number){
		return 8-(this.getOffset())+(index*7);
	}
	
	getTo(index:number){
		return 14-(this.getOffset())+(index*7);
	}
	
	getLastDay(){
		return moment().year(this.selectedYear).month(this.selectedMonth).endOf('month').date();
	}
	
	onChange(){
		console.log(this.selectedMonth);
		console.log(this.selectedYear);
	}
	
	getEvents() {
		return [
			{ "description": "e1", "beginDate": new Date(), "endDate": new Date() },
			{ "description": "e2", "beginDate": new Date(), "endDate": new Date() },
			{ "description": "e3", "beginDate": new Date(), "endDate": new Date() }
		];
	}

}