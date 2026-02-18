let arr = 'INDIA'.split('');   // ['I','N','D','I','A']
// replace characters starting at index 3 (the 'I') removing 2 chars ('I','A')
// and insert 'ONESIA' as characters
arr.splice(3, 2, ...'ONESIA');
const result = arr.join('');
console.log(result); // "INDONESIA"
