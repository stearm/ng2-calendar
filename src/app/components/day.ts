import {Component,Input} from 'angular2/core';
import {IEvent} from '../models/ievent';

@Component({
	selector: 'day',
	templateUrl: './app/components/day.html'
})
export class Day {
	
	@Input() day: number;
	@Input() events: Array<IEvent>;
		
}