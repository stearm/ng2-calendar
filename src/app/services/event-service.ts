import {Injectable} from 'angular2/core'
import {IFilter} from '../models/ifilter'

@Injectable()
export class EventService {
	
	showEvents: boolean = false;
	
	private events: any;
	
	toggleEvents(){
		this.showEvents = !this.showEvents;
	}
	
	getEvents(){
		
	}
	
	hasEvents(filter: IFilter): boolean {
		return false;
	}
}