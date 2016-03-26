import {Injectable} from 'angular2/core'
import {IFilter} from '../models/ifilter'

@Injectable()
export class EventService {
	
	private events: any;
	
	getEvents(){
		
	}
	
	hasEvents(filter: IFilter): boolean {
		return false;
	}
}