const str = '010212';
const str2 = '01';

console.log(str.substring(0, 2));
console.log(str.substring(1));

console.log(str.startsWith('01'));
console.log(str.substring(0, 2) == str2.substring(0, 2));
console.log(str.includes(str2));
