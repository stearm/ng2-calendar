import {Component,Input} from 'angular2/core'
import {EventService} from '../services/event-service'

@Component({
	selector: 'day',
	templateUrl: './app/components/day.html'
})
export class Day {
	
	@Input() day: number;
	
	constructor(private eventService: EventService) { }
		
}