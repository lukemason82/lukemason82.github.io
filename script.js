window.onload = function(){
	if(getCookie('show_cookie_notice') != 'no'){
		document.getElementById("cookie-notice").style.display = "block";
	}
	if(window.scrollY <= 0){
		document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
	}
}

function cookieDismiss(){
  setCookie('show_cookie_notice','no');
  document.getElementById("cookie-notice").style.display = "none";
}

function setCookie(cookie_name, value){
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + (365));
  document.cookie = cookie_name + "=" + escape(value) + "; expires="+exdate.toUTCString() + "; path=/";
}

function getCookie(cookie_name){
  if (document.cookie.length>0){
    cookie_start = document.cookie.indexOf(cookie_name + "=");
    if (cookie_start != -1){
      cookie_start = cookie_start + cookie_name.length+1;
      cookie_end = document.cookie.indexOf(";",cookie_start);
      if (cookie_end == -1){
        cookie_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(cookie_start,cookie_end));
    }
  }
  return "";
}

function toggleMenuButton(elementx){
	if(elementx.className != "hamburgerMenu cross"){
		elementx.className = "hamburgerMenu cross"
		document.getElementsByTagName("nav")[0].className = "visible";
	}else{
		elementx.className = "hamburgerMenu"
		document.getElementsByTagName("nav")[0].className = "";
	}
	/*
	//document.getElementById("menu-link").onclick = function (e) {
		//e.preventDefault();
		if (document.getElementsByTagName("nav")[0].className == "visible") {
			document.getElementsByTagName("nav")[0].className = "";
		} else {
			document.getElementsByTagName("nav")[0].className = "visible";
		}
	//}*/
}
window.onscroll = function() {
	if(window.scrollY > 0){
		document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.4)";
	}else{
		document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
	}};


function showDesc(element){
	event.preventDefault();
	if(element.firstElementChild.style.maxHeight != "0px"){
		element.firstElementChild.style.maxHeight = "0px";
	}else{
		element.firstElementChild.style.maxHeight = "400px";
	}
}
