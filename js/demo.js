// Javascript single line comment
/*
Javascript multi-line comment
*/
alert('This is an alert.');
var name;

while (!name) {
name = prompt('What is the first letter of your name?');
}




var  writeNameMultipleTimes = function () {
	for (var i = 0; i < 10; i++) {
		document.write('<strong>' + name + '</strong><br>')
	}
	
	
};

writeNameMultipleTimes();
