import {Component,Input,OnInit} from 'angular2/core';
import {Day} from '../components/day';

@Component({
	selector: 'line',
	templateUrl: './app/components/line.html',
	directives: [Day]
})
export class Line implements OnInit{
	
	@Input() offset: number;
	@Input() from: number;
	@Input() to: number;
	
	private offsetList:Array<number> = [];
	private fromToList:Array<number> = [];
	
	constructor(){}
	
	ngOnInit(){
		for (var i = 0; i < this.offset; i++) {
			this.offsetList.push(i);
		}
		
		for (var i = this.from; i <= this.to; i++) {
			this.fromToList.push(i);
		}
	}
	
}