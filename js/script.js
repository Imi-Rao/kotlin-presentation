const nav = document.querySelector(".nav");
const navBTN = document.querySelector(".burger-btn");
const AllNavItems = document.querySelectorAll("nav__item");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	AllNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemsAnimation();
};
const handleNavItemsAnimation = () => {
	let delayTime = 0;

	AllNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

nav.addEventListener("click", handleNav);
nav__item.addEventListener("click", handleNav);
