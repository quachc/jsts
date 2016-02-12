import BasicSegmentString from '../noding/BasicSegmentString';
import FastNodingValidator from '../noding/FastNodingValidator';
import ArrayList from '../../../../java/util/ArrayList';
export default class EdgeNodingValidator {
	constructor(...args) {
		this.nv = null;
		if (args.length === 1) {
			let [edges] = args;
			this.nv = new FastNodingValidator(EdgeNodingValidator.toSegmentStrings(edges));
		}
	}
	get interfaces_() {
		return [];
	}
	static toSegmentStrings(edges) {
		var segStrings = new ArrayList();
		for (var i = edges.iterator(); i.hasNext(); ) {
			var e = i.next();
			segStrings.add(new BasicSegmentString(e.getCoordinates(), e));
		}
		return segStrings;
	}
	static checkValid(edges) {
		var validator = new EdgeNodingValidator(edges);
		validator.checkValid();
	}
	checkValid() {
		this.nv.checkValid();
	}
	getClass() {
		return EdgeNodingValidator;
	}
}
