var vicNumber = prompt('How many disaster victims')

var vicPhone = []
var vicName = []
var vicStreet = []

console.log(vicNumber)

for (var i = 1; i <= vicNumber; i++) {
	console.log(i)
	var name = prompt('Enter victims name')
	vicName.push(' ' + name)
	var phone = prompt('Enter victims phone')
	vicPhone.push(' '+ phone)
	var street = prompt('Enter victims street')
	vicStreet.push(' ' + street)
};

var vicInfo = "\nVictims name:" + vicName + "\nVictims phone:" + vicPhone + "\nVictims street:" + vicStreet

var volNumber = prompt('How many volunteers')

var volPhone = []
var volName = []
var volStreet = []

for (var i = 1; i <= volNumber; i++) {
	var name = prompt('Enter volunteers name')
	volName.push(' ' + name)
	var phone = prompt('Enter volunteers phone')
	volPhone.push(' '+ phone)
	var street = prompt('Enter volunteers street')
	volStreet.push(' ' + street)
};

var volInfo = "\nVolunteers name:" + volName + "\nVolunteers phone:" + volPhone + "\nVolunteers street:" + volStreet

alert("Victims: " + vicNumber + "\nVolunteers: " + volNumber + vicInfo + volInfo)