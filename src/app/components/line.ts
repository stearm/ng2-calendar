import {Component,Input,OnChanges} from 'angular2/core';
import {Day} from '../components/day';

@Component({
	selector: 'line',
	templateUrl: './app/components/line.html',
	directives: [Day]
})
export class Line implements OnChanges{
	
	@Input() offset: number;
	@Input() from: number;
	@Input() to: number;
	
	private offsetList:Array<number> = [];
	private fromToList:Array<number> = [];
	
	constructor(){}
	
	ngOnChanges(){
		this.offsetList = [];
		for (var i = 0; i < this.offset; i++) {
			this.offsetList.push(i);
		}
		
		this.fromToList = [];
		for (var i = this.from; i <= this.to; i++) {
			this.fromToList.push(i);
		}
	}
	
}