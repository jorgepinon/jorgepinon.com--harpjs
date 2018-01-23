function getCookie(Name) { 
	var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
	if (document.cookie.match(re)) //if cookie found
	return document.cookie.match(re)[0].split("=")[1] //return its value
	return null
}

function setCookie(name, value, days) {
	var expireDate = new Date()
	//set "expstring" to either future or past date, to set or delete cookie, respectively
	var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
	document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function setLocalStorage(lsName) {
	var localStorage;
	try {
		localStorage = window.localStorage;
		if (!localStorage[lsName]) {
			localStorage.setItem(lsName, "true");
			// Add expiration
		}
	} catch (e) {
		// ls api returns errors
	}
}

function removeLocalStorage(name) {
	var localStorage;
	try {
		localStorage = window.localStorage;
		localStorage.removeItem(name);
	} catch (e) {
		// ls api returns errors
	}
}
