class Set {
	// Accept a `list` parameter (default to an empty array).
	constructor() {
		// Create a `values` property and set it equal to an empty array
		 
		// Loop through the list and push each item into the set (the array of values)
	
	}

	get length() {
		// return the length of the values property
	}

	insert(val) {
		// if `val` is not in the `values` property, then push it in
	}

	remove(val) {
		// if `val` is in the `values` property, then remove it
	}

	has(val) {
		// return true if `val` is in `values`, false if it isn't
	}

	union(set) {
		// return a new Set with the values from this Set and the
		// Set passed in as a parameter
	}

	intersect(set) {
		// return a new Set of the values that appear in both this
		// Set and the Set passed in
	}

	difference(set) {
		// return a new Set of the values that only appear in one of
		// the two sets
	}
}

module.exports = {
	Set,
};
