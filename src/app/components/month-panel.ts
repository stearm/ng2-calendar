import {Component,Input} from 'angular2/core';
import {Line} from '../components/line';
import {Month} from '../models/month';
import {IFilter} from '../models/ifilter';

@Component({
	selector: 'month-panel',
	templateUrl: './app/components/month-panel.html',
	directives: [Line]
})
export class MonthPanel {

	@Input() filter: IFilter;

	getOffset(){
		return moment().year(this.filter.year).month(this.filter.month).date(1).day();
	}
	
	getFrom(index:number){
		return 8-(this.getOffset())+(index*7);
	}
	
	getTo(index:number){
		return 14-(this.getOffset())+(index*7);
	}
	
	getLastDay(){
		return moment().year(this.filter.year).month(this.filter.month).endOf('month').date();
	}

}