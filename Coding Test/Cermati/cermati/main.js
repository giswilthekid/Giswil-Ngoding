function setCookie(name,value,duration) {
    var expires = "";
    if (duration) {
        var date = new Date();
        date.setTime(date.getTime() + (duration*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function notifPopOut() {
   var cont = document.getElementById("container");
   cont.classList.toggle("container-after");
}

function newsletterPopOut() {
	var newsletter = document.getElementById("newsletter");
	newsletter.classList.toggle("newsletter-after");
	setCookie('ppkcookie','testcookie',10);
}

document.addEventListener("DOMContentLoaded", function() {
  	var x = getCookie('ppkcookie');
	if (x){
		var newslet = document.getElementById("newsletter");
		newslet.style.display = "none";
	}
});



