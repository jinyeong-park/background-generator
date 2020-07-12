var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "#" + randomColor;
	// color.innerHTML = "#" + randomColor;
	css.textContent = body.style.background + ";";
}

genNew.addEventListener("click", setBg);
setBg();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
