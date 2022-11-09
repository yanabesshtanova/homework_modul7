let user = {
	firstName : "besshtanova",
	age : 31,
}
function printObject(obj) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			console.log(prop, obj[prop]);
		}
	}
}
printObject(user);