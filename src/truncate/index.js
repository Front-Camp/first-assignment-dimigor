/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  var arr = [];
  let len = str.length - length - replacer.length;

  if (str === '' || str.length < length) {

  	return str

  } else if (str.length > length ){

  	return str.slice(0,len).concat(replacer);

  } else {

 	return new Error('this is not a string');
}
  
};

export default truncate;
