import {Component,Input} from 'angular2/core'
import {Month} from '../models/month'
import {IFilter} from '../models/ifilter'

@Component({
	selector: 'filter-panel',
	templateUrl: './app/components/filter-panel.html'
})
export class FilterPanel{
	
	@Input() filter: IFilter;
	
}