/*
Example S3 file listing:
{
	Key: 'v2-test3.sql',
	LastModified: 2022-05-06T01:57:28.000Z,
	ETag: '"4439d4e18da687830497cd94ab506bd3-2"',
	Size: 8258140,
	StorageClass: 'STANDARD'
}
*/
const index = require('./compareETags');
function test()
{
	const res = index('v2-test3.sql', '4439d4e18da687830497cd94ab506bd3-2');
	console.log(res);
	console.log('Should return true if they match.');
}
test();