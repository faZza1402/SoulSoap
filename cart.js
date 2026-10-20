const accountOpen = document.querySelector('.account-open');
const accountWrap = document.querySelector('.account-wrap');
const accountContent = document.querySelector('.account-content');

const regOpen = document.querySelector('.reg-open');
const regWrap = document.querySelector('.reg-wrap');
const regContent = document.querySelector('.reg-content');

const closeBtn = document.querySelectorAll('.close');

accountOpen.addEventListener('click', () => {

	accountWrap.classList.add('active');
	accountContent.classList.add('active');

});

regOpen.addEventListener('click', () => {

	accountWrap.classList.remove('active');
	accountContent.classList.remove('active');

	regWrap.classList.add('active');
	regContent.classList.add('active');

});

function closeModal(){

	accountWrap.classList.remove('active');
	accountContent.classList.remove('active');

	regWrap.classList.remove('active');
	regContent.classList.remove('active');

}

closeBtn.forEach(close => {

	close.addEventListener('click', closeModal);

});

accountWrap.addEventListener('click', (e) => {

	if (e.target === accountWrap) closeModal();

});

regWrap.addEventListener('click', (e) => {

	if (e.target === regWrap) closeModal();

});
