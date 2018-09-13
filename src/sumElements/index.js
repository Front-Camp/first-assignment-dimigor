/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
	const numb = n => {
		n = parseFloat(n);
		if (isFinite(n)) {
			return n
		} else {
			return 0
		}
	}
	// let numb = arr.filter((a) => {
 //    if (Number(a) && isFinite(a)) { return parseFloat(a); }
	// });


	return arr.reduce((a, b) => numb(a) + numb(b));

};

export default sumElements;
