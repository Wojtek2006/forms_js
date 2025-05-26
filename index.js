const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// <-----------------> PESEL <-----------------> 

const oddNums = ["1", "3", "5", "7", "9"];
const evenNums = ["0", "2", "4", "6", "8"];

$( ".PESEL__fields--btn" ).on( "click", function() {
	const name = $( "#PESEL__name" ).val();
	const surname = $( "#PESEL__surname" ).val();
	const date = $( "#PESEL__date" ).val().split("-");
	const gender = $( "#PESEL__gender" ).val();


	setPeselName(name);
	setPeselSurname(surname);

	generatePesel(date[2], date[1], date[0], gender);
}); 

function setPeselName(name) {
	if (name != "") {
		$( ".name" ).html(name.toUpperCase());
	}
	else {
		return;
	}
}

function setPeselSurname(surname) {
	if (surname != "") {
		$( ".surname" ).html(surname.toUpperCase());
	}
	else {
		return;
	}
}

function setPesel(Pesel) {
	if (Pesel.length == 11) {
		$( ".PESEL" ).html(Pesel);
	}
	else {
		return;
	}
}

function calcPeselControlNum(Pesel) {
	let numWeight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let ctrlNum = 0;

	for (let i = 0; i < Pesel.length; i++) {
		ctrlNum += (Pesel[i] * numWeight[i]) % 10;
	}

	ctrlNum = 10 - (ctrlNum % 10);

	return ctrlNum;
}

function generatePesel(day, month, year, gender) {
	const peselDay = day;
	const peselMonth = year > 1999 ? parseInt(month) + 20 : month;
	const peselYear = year.substring(2);
	const peselGender = gender == "man" ? oddNums[Math.floor(Math.random() * 4)] : evenNums[Math.floor(Math.random() * 4)];
	const peselOrderNum = Math.floor((Math.random() * 999) + 100);
	const unfinPesel = peselYear + peselMonth + peselDay + peselOrderNum + peselGender;
	const ctrlNum = calcPeselControlNum(unfinPesel);

	const PESEL = peselYear + peselMonth + peselDay + peselOrderNum + peselGender + ctrlNum;

	setPesel(PESEL);
}