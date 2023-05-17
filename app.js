const num = document.querySelector(".num")
const btn = document.querySelector("button")

let val = 0

num.innerHTML = val

btn.addEventListener("click", ()=>{
	val += 1
	num.innerHTML = val
})
