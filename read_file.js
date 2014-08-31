var FS = require('fs');

FS.readFile('number.txt', 'utf8', function(err,data){
	if(err) throw err;
	console.log('File has been read: :'+ data);
});
console.log('After readFile');
