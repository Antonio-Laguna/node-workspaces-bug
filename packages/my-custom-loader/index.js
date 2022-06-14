module.exports = function customLoader(pkg, args) {
  const requiredPackage = require(pkg);
  console.log('Loader Meta\n');
  console.log('CWD from loader: %s', process.cwd());
  console.log('Require paths from process:');
  console.log(require.resolve.paths('is-sorted'));
  console.log('');
  console.log('Calling %s with %s', pkg, args);
  console.log('Function name is', requiredPackage.name);
  console.log('Result is', requiredPackage(args));
}
