document.getElementById('cancelButton').addEventListener("click", (event) => {
	event.preventDefault();
	errors = document.querySelectorAll("formError");
	for (var i = errors.length - 1; i >= 0; i--) {
		
	}
	document.getElementById('registryForm').reset();
});

document.getElementById('submitButton').addEventListener("click", (event) => {
	event.preventDefault();
	var registry = {};
	registry.fullname = document.getElementById('completeNameInput').value;
	registry.email = document.getElementById('emailInput').value;
	let password = document.getElementById('passwordInput').value;
	let passwordConfirmation = document.getElementById('passwordConfirmationInput').value;
	let validPassword = true;
	if (password != passwordConfirmation) {
		console.log("The password and password confirmation need to match!");
		validPassword = false;
	}
	if (password.search(/\d/) == -1) {
		console.log("The password needs at least 1 number!");
		validPassword = false;
	}
	if (password.search(/[a-zA-Z]/) == -1) {
		console.log("The password needs at least 1 letter!");
		validPassword = false;
	}
	if (validPassword) {
		registry.password = password;
	}
	let country = document.getElementById('country');
	let countryValue = country.options[country.selectedIndex].value;
	if (countryValue == "") {
		console.log("A country has to be selected!");
	} else {
		registry.country = countryValue;
	}
	let gender = document.querySelector("input[name=gender]:checked");
	if (gender == null) {
		console.log("A gender has to be selected!");
	} else {
		registry.gender = gender.value;
	}
	console.log(registry);
});
