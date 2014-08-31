
 function useless(callback) { return callback(); }

var text = "sanjay knwar";
assert(useless(function(){return text; }) === text,
		"The useless function works" + text);
