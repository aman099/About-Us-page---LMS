// Carousel 1
const getCertifiedGridContainer = document.querySelector(".leadership-cards");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// prevBtn.addEventListener("click", () => {
// 	getCertifiedGridContainer.scrollBy({
// 		left: getCertifiedGridContainer.clientWidth * 1,
// 		behavior: "smooth",
// 	});
// });
// nextBtn.addEventListener("click", () => {
// 	getCertifiedGridContainer.scrollBy({
// 		left: getCertifiedGridContainer.clientWidth * -1,
// 		behavior: "smooth",
// 	});
// });

const card = document.querySelector(".leadership-card");

prevBtn.addEventListener("click", () => {
	getCertifiedGridContainer.scrollBy({
		left: card.clientWidth * 1 + 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		getCertifiedGridContainer.scrollBy({
			left: card.clientWidth * 1 + 40,
			behavior: "smooth",
		});
	}
});
nextBtn.addEventListener("click", () => {
	getCertifiedGridContainer.scrollBy({
		left: card.clientWidth * -1 - 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		getCertifiedGridContainer.scrollBy({
			left: card.clientWidth * -1 - 40,
			behavior: "smooth",
		});
	}
});

const getCertifiedGrid = document.querySelector(".get-certified-grid");

// console.log(getCertifiedGrid.getBoundingClientRect().top);
// console.log(getCertifiedGrid.getBoundingClientRect().bottom >= screenTop);
console.log(screenTop);

const btnLeft = document.querySelector(".btn-left-cont");
const btnRight = document.querySelector(".btn-right-cont");
const throughTitleCont = document.querySelector(".through-title-cont");
const throughTitleContent = document.querySelector(
	".through-title-cont .through-title-content"
);

btnLeft.addEventListener("click", () => {
	throughTitleCont.scrollBy({
		left: throughTitleContent.offsetWidth * 1,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		throughTitleCont.scrollBy({
			left: throughTitleContent.clientWidth * 1 + 40,
			behavior: "smooth",
		});
	}
});
btnRight.addEventListener("click", () => {
	throughTitleCont.scrollBy({
		left: throughTitleContent.offsetWidth * -1,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		throughTitleCont.scrollBy({
			left: throughTitleContent.clientWidth * -1 - 40,
			behavior: "smooth",
		});
	}
});
