const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('profile');

console.log(myParam);

switch (myParam) {
		case '1':
		name = "hiraga";
		break;
		case '2':
		name = "yamada";
		break;
		default:
		name = "other";
		break;
}

console.log(name);

document.getElementById("name").innerHTML = name;
