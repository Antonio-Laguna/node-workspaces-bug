const customLoader = require('my-custom-loader');
const isSorted = require('is-sorted');
const args = [1, 1, 3, 4, 5];

console.log('Package A\n');
console.log('is-sorted: 1.0.5\n');
console.log('Process meta');
console.log('CWD from process: %s', process.cwd());
console.log('Require paths from process:');
console.log(require.resolve.paths('is-sorted'));
console.log('');
customLoader('is-sorted', args);

console.log('\nCalling %s with %s', 'is-sorted', args);
console.log('Function name is', isSorted.name);
console.log('Result is', isSorted(args));

console.log('\nPackage A - END\n');
console.log('\n----------------------------------------\n');
