const countProps = function(obj) {
    'use strict';
  return Object.keys(obj).length
  
};

console.log(countProps({})); 

console.log(countProps({a:1, b:1})); 

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); 