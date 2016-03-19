import {Component,Input} from 'angular2/core';
import {Month} from '../models/month';

@Component({
	selector: 'filter-panel',
	templateUrl: './app/components/filter-panel.html'
})
export class FilterPanel{
	
	@Input() year: number;
	@Input() month: Month;
	
}