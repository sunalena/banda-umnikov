//При необходимсоти можно выставить любую дату окончания
function initializeTimer() {
	var endDate = Date.now() + 43932;//new Date(2019,4,6);
 
	var currentDate = Date.now();
	var seconds = 43932;//(endDate-currentDate) / 1000;
	if (seconds > 0) {
		var minutes = seconds/60; 
		var hours = minutes/60;
		var days = hours / 24;
		minutes = (hours - Math.floor(hours)) * 60; 
		days = Math.floor(days);
		hours =  Math.floor(hours)- days * 24; 
 
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
		minutes = Math.floor(minutes); 
 
		setTimePage(days, hours,minutes,seconds); 
 
		function secOut() {
		  if (seconds == 0) { 
			  if (minutes == 0) { 
				  if (hours == 0) { 
				  	   if(days == 0){
				  			showMessage(timerId); 
				  	    }
				  		else{
				  			days--; 
				  			hours = 24; 
						    minutes = 59; 
						    seconds = 59; 
				  		}
				  }
				  else {
					  hours--; 
					  minutes = 59; 
					  seconds = 59; 
				  }
			  }
			  else {
				  minutes--; 
				  seconds = 59; 
			  }
		  }
		  else {
			  seconds--; 
		  }
		  setTimePage(days, hours,minutes,seconds); 
		}
		timerId = setInterval(secOut, 1000) 
	}
	else {
		alert("Установленая дата уже прошла");
	}
}
window.onload = function()
{
     initializeTimer();
}
function setTimePage(d,h,m,s) { 
	//var days = document.getElementById("days");
  var hours1 = document.getElementById("hours1"); 
  var hours2 = document.getElementById("hours2"); 
  var minutes1 = document.getElementById("minutes1"); 
  var minutes2 = document.getElementById("minutes2"); 
  var seconds1 = document.getElementById("seconds1");
  var seconds2 = document.getElementById("seconds2"); 
 
	//days.innerHTML = d;
  hours1.innerHTML = Math.floor((h + d * 24)/10);
  hours2.innerHTML = (h + d * 24)%10;
  minutes1.innerHTML = Math.floor(m/10);
  minutes2.innerHTML = m%10;
  seconds1.innerHTML = Math.floor(s/10);
  seconds2.innerHTML = s%10;
 
}
var endDate = new Date(2019,4,6);