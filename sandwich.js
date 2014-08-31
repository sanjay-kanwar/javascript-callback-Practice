function sandwich(param1, param2, callback){
	console.log("Started eating my sandwich .\n\nIt has: "+ param1 + ', '+ param2);
	callback();
	console.log("Finished Callback");

}


sandwich('ham','cheese',function(){
	console.log('Finished eating my sandwich');
});
