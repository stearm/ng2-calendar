import {Component} from 'angular2/core'
import {EventService} from '../services/event-service'

@Component({
	selector: 'events-panel',
	templateUrl: './app/components/events-panel.html'
})
export class EventsPanel {
	
	constructor(private eventService: EventService){ }
	
}