function some_function(arg1, arg2, callback){

	var my_number = Math.ceil(Math.random()*(arg1-arg2)+arg2);
		
	console.log("Before Call Back");

	callback(my_number);
	
	console.log("After call Back");
}

some_function(5, 15, function(num){
	console.log("callback called " + num);
});
