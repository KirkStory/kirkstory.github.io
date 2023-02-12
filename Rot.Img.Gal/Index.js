const imageContainerEl = document.querySelector (".image-container")

const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")
let x = 0
let timer;
prevEl.addEventLestener("click", ()=>{
  x = x + 45;
  updateGallery()
});

nextEl.addEventLestener("click", ()=>{
  x = x - 45;
  clearTimeout(timer);
  updateGallery()

function updateGallery(){
	imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg`;
	timer = setTimeout(()=>{
		x = x -45
		clearTimeout(timer);
		updateGallery()

	}, 3000)




},

