'use strict'
import {Injectable} from 'angular2/core'
import {IFilter} from '../models/ifilter'
import {ILine} from '../models/iline'

@Injectable()
export class CalendarService {

	private filter: IFilter = {
		"month": moment().month(),
		"year": moment().year()
	};
	
	getLines() : Array<ILine> {
		let lines: Array<ILine> = [];
		let linesCount = this.getLastDay() + this.getOffset();
		linesCount = Math.ceil(linesCount / 7);
		for (let i = 0; i < linesCount; i++) {
			// first line
			if (i == 0) {
				lines.push({ "offset": this.getOffset(), "from": 1, "to": 7 - this.getOffset() });
				// last line
			} else if (i == linesCount - 1) {
				lines.push({ "from": this.getFrom(i - 1), "to": this.getLastDay() });
			} else {
				lines.push({ "from": this.getFrom(i - 1), "to": this.getTo(i - 1) });
			}
		}
		return lines;
	}

	private getFrom(index: number) {
		return 8 - (this.getOffset()) + (index * 7);
	}

	private getTo(index: number) {
		return 14 - (this.getOffset()) + (index * 7);
	}

	private getOffset() {
		return moment().year(this.filter.year).month(this.filter.month).date(1).day();
	}

	private getLastDay() {
		return moment().year(this.filter.year).month(this.filter.month).endOf('month').date();
	}

}