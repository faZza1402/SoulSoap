const imagesTrack = document.querySelector('.about-us-images');
const images = document.querySelectorAll('.about-us-images img');
const controlers = document.querySelectorAll('.first-about-btn, .second-about-btn');
const circles = document.querySelectorAll('.circle');
let imageIndex = 0;

const slideWidth = 432;

function show(index) {
	imageIndex = index;

	images.forEach((img) => {
		img.style.transform = `translateX(-${imageIndex * slideWidth}px)`;
	});

	circles.forEach((circle, i) => {
		
		circle.style.cursor = 'pointer';
		circle.onclick = () => {
			show(i);
		};

		if (i === imageIndex) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
}

controlers.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.classList.contains('prev')) {
			let index = imageIndex - 1;

			if (index < 0) {
				index = images.length - 1;
			}

			show(index);

		} else if (btn.classList.contains('next')) {
			
			let index = imageIndex + 1;
			
			if (index >= images.length) {
				index = 0;
			}

			show(index);
		}
	});
});

show(imageIndex);

const openLoginForm = document.getElementById('open-login-form');
const closeLoginForm = document.getElementById('close-btn');
const contentLoginForm = document.getElementById('login-form');
const body = document.body;

openLoginForm.addEventListener('click', () => {
	
	contentLoginForm.classList.add('active');
	body.classList.add('account-open');

});

closeLoginForm.addEventListener('click', closeModal);

contentLoginForm.addEventListener('click', (e) => {

	if (e.target === contentLoginForm) closeModal();

});

function closeModal(){
	
	contentLoginForm.classList.remove('active');
	body.classList.remove('account-open');

};


