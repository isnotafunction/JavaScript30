const inputs=document.querySelectorAll(".controls input")

function handleUpdate(){
  const suffix = this.dataset.sizing || "";//"or nothing"because of the colour not having a suffix
document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}
//loop through node list with forEach()
inputs.forEach(input=>input.addEventListener("change", handleUpdate));
//this triggers the function only when you change the values but not when you move the slider, to do that:
inputs.forEach(input=>input.addEventListener("mousemove", handleUpdate));


//***dataset will group all your data- attributes into an object;
