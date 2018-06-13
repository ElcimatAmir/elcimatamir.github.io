var credit = document.getElementById("credit"),
	time = document.getElementById("time"),
	bar = document.getElementById("rangeBar") ;
// events 

bar.oninput = function (credit, time, bar) {
	var res = document.getElementById("rangeBarValue") ;
	var barValue = document.getElementById("rangeBar") ;
	res.value = barValue.value + " %" ;

	var c = document.getElementById("credit"),
		t = document.getElementById("time"),
		p = document.getElementById("rangeBar") ;

	if (c.value < 1 || c.value > 1000000000 || t.value <= 0) {
		 error() ;
	} else {
		calc(c, t, p);
	}
}

credit.oninput = function (credit, time, bar) {
	var c = document.getElementById("credit"),
		t = document.getElementById("time"),
		p = document.getElementById("rangeBar") ;

	if (c.value < 1 || c.value > 1000000000 || t.value <= 0) {
		 error() ;
	} else {
		calc(c, t, p);
	}
}

time.oninput = function (credit, time, bar) {
	var c = document.getElementById("credit"),
		t = document.getElementById("time"),
		p = document.getElementById("rangeBar") ;

	if (c.value < 1 || c.value > 1000000000 || t.value <= 0) {
		 error() ;
	} else {
		calc(c, t, p);
	}
}


// functions
function calc (c, t, p) {
	var credit 		=parseInt(c.value) 	  ,
		timeInMonth = t.value * 12  ,
		pr     		= p.value /100 ,
	//for the results	
		resAll		= document.getElementById("resAll") ,
		resP		= document.getElementById("resP")   ,
		creditValue = document.getElementById("c") ,
		resTime     = document.getElementById("timeC") ,
		monthPay    = document.getElementById("monthPay"), 
	// counting the values	
		prInValue   = pr * credit ,
		all			= prInValue + credit,
		payInMonth  = all / timeInMonth ;
	// show the results
	resAll.innerHTML = all.toFixed(2);
	resP.innerHTML   =prInValue.toFixed(2);
	creditValue.innerHTML = credit.toFixed(2) ; 
	resTime.innerHTML = timeInMonth+"(мес)" ;
	monthPay.innerHTML = payInMonth.toFixed(2);	
}
function error() {
	var	resAll		= document.getElementById("resAll") ,
		resP		= document.getElementById("resP")   ,
		creditValue = document.getElementById("c") ,
		resTime     = document.getElementById("timeC") ,
		monthPay    = document.getElementById("monthPay");

		resAll.innerHTML = " ";
		resP.innerHTML   =" ";
		creditValue.innerHTML = " " ; 
		resTime.innerHTML = "  " ;
		monthPay.innerHTML = " ";
}