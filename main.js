const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector(".nav-list");
const lin = document.querySelectorAll(".links");

hamburger.addEventListener("click",()=>{
	menu.classList.toggle("toggle")
})

lin.forEach(link =>{
	link.addEventListener("click",()=>{
		console.log("in");
		menu.classList.toggle("toggle")
	})
})

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
	origin:'left',
	duration:1000,
	delay:600,
	distance:'25rem'
});
sr.reveal('.animate-bottom',{
	origin:'bottom',
	duration:1000,
	delay:600,
	distance:'25rem'
})
sr.reveal('.animate-right',{
	origin:'right',
	duration:1000,
	delay:600,
	ditance:'25rem'
});
sr.reveal(".animate-top",{
	origin:'top',
	duration:1000,
	distance:'25rem',
	delay:600
});