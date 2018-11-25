function submitAction(form)
{
	var text = document.getElementById("name");
	text.innerHTML = form.nameInput.value;
	var number = document.getElementById("year")
	number.innerHTML = form.numberInput.value;
	var weapons = document.getElementById("weapons");
	weapons.innerHTML = form.bodyParts.value;
	var nameRus = document.getElementById("nameRus");
	nameRus.innerHTML = form.Number.value;
 	
 	var history = document.getElementById("text1");
 	history.style.visibility ="visible";

}