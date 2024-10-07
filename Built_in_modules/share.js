const lodash =require('lodash');

const array=[1,[2,[3,[4,[5]]]]];

const handling=lodash.flattenDeep(array);

console.log(handling);