
function playsound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
  console.log(key);

  if(!audio)return;//stop the function from running if key without audio pressed
  audio.currentTime=0;//rewind (without this when you press a key multiple times
  //it will ignore you until the audio comes to the end)
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e){
  if(e.propertyName!=="transform") return;//skip it if it's not a transform
  this.classList.remove("playing");//"this" here refers to key that addEventListener
  //is attached to
}

const keys = document.querySelectorAll(".keys");
//when you have an array of elements you cant listen to all of them, you must loop
//over every single one of them
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playsound);
