// Menu

const menu = document.querySelector(".menu");
const exit = document.querySelector(".exit");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", ()=>{
	menu.classList.add("active");
});
exit.addEventListener("click", ()=>{
	menu.classList.remove("active");
});

// Login

const login_page = document.querySelector(".login_page");
const loginBtn = document.querySelector(".loginBtn");
const Login_exitBtn = document.querySelector(".Login_exitBtn");
const LoginBox = document.querySelector(".login-box")

loginBtn.addEventListener("click", ()=>{
	login_page.classList.add("show");
})
Login_exitBtn.addEventListener("click", ()=>{
	login_page.classList.remove("show");
})

function Basket_remove() {
	const basket_btns = document.querySelectorAll("#basket_btn");

	basket_btns.forEach(basket_btn => {
    basket_btn.addEventListener("click", () => {
        basket_btn.parentNode.parentNode.remove();
    });
});
}

Basket_remove() 

function showBasket() {
	const show_basket_btn = document.querySelector(".show_basket_btn");
	const basket = document.querySelector(".basket");
	const removeBtn = document.querySelector(".removeBtn");


	show_basket_btn.addEventListener("click", ()=>{
		basket.classList.toggle("basket_active")
	})
	removeBtn.addEventListener("click", ()=>{
		basket.classList.remove("basket_active")
	})
}
showBasket()
