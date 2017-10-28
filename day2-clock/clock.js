 const secondHand = document.querySelector('.second-hand');
 const minuteHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');


function setDate(){
 const now = new Date();
 const seconds = now.getSeconds();
 const minutes = now.getMinutes();
 const hours = now.getHours();
 //transform seconds into degrees
 const secondsDegrees = ((seconds/60)*360)+90;//we are adding 90 to even out those 90deg in CSS that we added so that the hands start vertically
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`

 const minuteDegrees = ((minutes/60)*360)+90;
 minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

 const hourDegrees = ((hours/12)*360)+90;
 hourHand.style.transform= `rotate(${hourDegrees}deg) scale(0.75, 1)`
//scale here shortens the hour hand

//to get rid of the glitch when secondsHand reaches 90deg
 if(secondsDegrees === 90) {
     secondHand.style.transition = 'none'
 } else {
     secondHand.style.transition = ''
 }
}
setInterval(setDate, 1000);//call the function every second
