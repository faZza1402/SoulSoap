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
const loginForm = document.getElementById('login-container');
const body = document.body;

openLoginForm.addEventListener('click', () => {
	
	contentLoginForm.classList.add('active');
	loginForm.classList.add('active');
	body.classList.add('account-open');

});

closeLoginForm.addEventListener('click', closeModal);

contentLoginForm.addEventListener('click', (e) => {

	if (e.target === contentLoginForm) closeModal();

});

const regForm = document.getElementById('reg-form');
const openRegForm = document.getElementById('reg-open');
const contentRegForm = document.getElementById('reg');
const closeReg = document.getElementById('reg-close-btn');

function closeModal(){
	
	contentLoginForm.classList.remove('active');
	loginForm.classList.remove('active');
	body.classList.remove('account-open');

	contentRegForm.classList.remove('active');
	regForm.classList.remove('active');

};

openRegForm.addEventListener('click', () => {
	
	contentLoginForm.classList.remove('active');
	loginForm.classList.remove('active');
	
	regForm.classList.add('active');
	contentRegForm.classList.add('active');
	
});

regForm.addEventListener('click', (e) => {

	if (e.target === regForm) closeModal();

});

closeReg.addEventListener('click', closeModal);

