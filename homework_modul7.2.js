let example = {
	name: 'yana',
	age: 31,
	key: 3,
}
function myFunction(str, Object ) {
	console.log(str in Object)
}
myFunction("key", example)