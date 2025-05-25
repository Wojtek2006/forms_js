$( ".PESEL__fields--btn" ).on( "click", function() {
	const name = $( "#PESEL__name" ).val();
	const surname = $( "#PESEL__surname" ).val();
	const date = $( "#PESEL__date" ).val().split("-");

	alert(date);

	setPESELName(name);
	setPESELSurname(surname);

	generatePESEL(date[2], date[1], date[0]);
}); 

function setPESELName(name) {
	if (name != "") {
		$( ".name" ).html(name.toUpperCase());
	}
	else {
		return;
	}
}

function setPESELSurname(surname) {
	if (surname != "") {
		$( ".surname" ).html(surname.toUpperCase());
	}
	else {
		return;
	}
}

function generatePESEL(day, month, year) {
	const PESELDay = day;
	const PESELMonth = year > 1999 ? parseInt(month) + 20 : month;
	const PESELYear = year.substring(2);


	alert(PESELDay);
	alert(PESELMonth);
	alert(PESELYear);
}