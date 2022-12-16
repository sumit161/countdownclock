cl=console.log;
request=document.getElementById("countdown")

function setZero(num){
	return (num < 10) ? (`0` + num) : (num);
};

function countdown(){
let futuredate=new Date(2023, 0, 16, 13, 27, 44);//launch date
//cl(futuredate)
let currentdate=new Date();//current date
let diff=futuredate.getTime()-currentdate.getTime();
let ndays=Math.floor(diff/86400000);
//cl(ndays)
let hr=Math.floor((diff%(1000*24*60*60))/(1000*60*60));
let min=Math.floor(diff%(1000*60*60)/(1000*60));
let sec=Math.floor(diff%(1000*60)/1000);
let milli=diff%1000;


ndays=setZero(ndays);
hr=setZero(hr);
min=setZero(min);
sec=setZero(sec);

if(milli<10){milli="00"+milli}
else if(milli<100){milli="0"+milli}

result=`
      <div class="countdown" id="countdown">
	   <div class="counter">
	      <p>Days</p>
	      <p>${ndays}</p>
	   </div>
	   <div class="counter">
	      <p>Hr</p>
	      <p>:${hr}</p>
	   </div>
	   <div class="counter">
	      <p>Min</p>
	      <p>:${min}</p>
	   </div>
	   <div class="counter">
	      <p>Sec</p>
	      <p>:${sec}</p>
	   </div>
	   <div class="counter">
	      <p>mili</p>
	      <p>:${milli}</p>
	   </div>
	</div>`
	
	request.innerHTML=result;
	setTimeout(countdown,100);
};
countdown()

request2=document.getElementById("today");


let currentdate=new Date();

	week=["sun","mon","tue","wed","thi","fri","sat"];
    	let Day=currentdate.getDay();
		let date1=currentdate.getDate();
		let mon=currentdate.getMonth();
		let year=currentdate.getFullYear();
// cl(week[Day])
result1=`Remaining period from today(${week[Day]}, ${date1}/${mon+1}/${year})>>`
cl(result1)
request2.innerHTML=result1