// Example 1

console.time('response in');
console.log('Click to continue');
console.timeEnd('response in');
console.log('One more time');
console.log.timeEnd('response in')




// Example 2
var start = new Date().getTime();

for (i = 0; i < 50000; ++i) {
// do something
}

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);

// Example-3
// hello mama 