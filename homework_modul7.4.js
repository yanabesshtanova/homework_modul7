function Applicate(devicePower, deviceColor, status) {
	this.power = devicePower;
	this.color = deviceColor;
	this.a = function (a) {
		this.status = a;
	};
}

const lamp = new Applicate(150, "white", 0);
const microwave = new Applicate(900, "black", 0);

let lampStatus = prompt("Включить лампу - 1, Оставить выключенной - 0");
let microwaveStatus = prompt("Включить микроволновку - 1, Оставить выключенной - 0");

lamp.a(+lampStatus);
microwave.a(+microwaveStatus);

console.log(lamp);
console.log(microwave);

function getSumDevicesPower(x, y) {
	let a = x.power;
	let b = y.power;
	if (x.status == 0) {
		a = 0;
	}
	if (y.status == 0) {
		b = 0;
	}
	console.log("Общая потребяемая энергия - " + (a + b));
}
getSumDevicesPower(lamp, microwave);