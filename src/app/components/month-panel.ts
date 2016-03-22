import {Component,Input} from 'angular2/core';
import {Line} from '../components/line';
import {Month} from '../models/month';

@Component({
	selector: 'month-panel',
	templateUrl: './app/components/month-panel.html',
	directives: [Line]
})
export class MonthPanel {

	@Input() selectedMonth: Month;
	@Input() selectedYear: number;
	
	constructor(){
		this.selectedMonth = moment().month();
		this.selectedYear = moment().year();
	}

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

}