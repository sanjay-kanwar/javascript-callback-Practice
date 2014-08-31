var fs = require('fs')
var myNumber = undefined

function addOne(){
	fs.readFile('number.txt', function doneReading(err, fileContents){
	myNumber = parseInt(fileContents)
	myNumber++
})
	
}


function logMyNumber(){

	console.log(myNumber);
}

addOne()
console.log(logMyNumber)

