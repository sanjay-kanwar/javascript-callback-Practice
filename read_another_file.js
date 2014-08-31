var fs = require('fs');

fs.readFile('READFile.txt', 'utf8', function(err,data){
	if(err) throw err;
	console.log("The content of the file is: "+ data);

});

