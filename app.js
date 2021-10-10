const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.nav');
const bars = document.querySelectorAll('.bars');
const links = document.querySelectorAll('li');

hamburger.addEventListener('click', ()=>{
	hamburger.classList.toggle('active');
	nav.classList.toggle('active');
	bars.forEach(bar =>{
		bar.classList.toggle('active');
	})
	links.forEach(link =>{
		link.classList.toggle('active');
	})

})
// window.addEventListener('scroll',()=>{
// 	const header = document.querySelector('header');
// 	if(scrollY >50){
// 		header.classList.add('sticky');
// 	}else{
// 		header.classList.remove('sticky');
// 	}
// })