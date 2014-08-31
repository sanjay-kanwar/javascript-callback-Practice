function  twoNumbers(num1, num2, callback){
	var result = num2-num1;
	callback(result);

}


twoNumbers(2,4,function(num){
	console.log("The Final Result is " + num);

});
