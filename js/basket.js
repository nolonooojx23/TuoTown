const basket_boxs = document.querySelector(".basket_boxs");
const total_price = document.querySelector(".total_price");
// localStorage.clear()

let basketBox = JSON.parse(localStorage.getItem("basketBox")) ? JSON.parse(localStorage.getItem("basketBox")) : []

 
let sum =0
function writeContent() {
	sum = 0
	basket_boxs.innerHTML =""
	basketBox.forEach((item) =>{
		basket_boxs.innerHTML +=`
		<div class="basket-box bg-[#303030] py-5 px-8 flex items-center text-white justify-between my-[1px] max-sm:px-3">
		<div class="title_image flex items-center gap-5">
			<img src="./${item.productImg}" alt="" class ="w-[56px] h-[49px]">
			<p class="text-lg max-md:text-base max-sm:text-sm"> ${item.productName} </p>
		</div>
		<div class="price_btn flex items-center gap-2">
			<p class="max-sm:text-sm max-[430px]:hidden">${item.productPrice}</p>
			<div class="cursor-pointer w-9 h-9 rounded-full flex justify-center items-center"><img src="./icon/basket_icon.svg" alt="" class="basket_btns">
		</div>
	</div>
	`
	sum += parseInt(item.productPrice)
	})
	total_price.textContent = `${sum} р`	
}
writeContent()


document.addEventListener("click",(e)=>{
	if (e.target.classList.contains("basket_add")) {
		const productName = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".box-title").textContent;
		const productPrice = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".boxPrice").textContent;
		const productImg = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".boxImg").getAttribute("src");
	
		let box_info ={
			productName,
			productPrice,
			productImg,
		}
		basketBox.push(box_info);

		localStorage.setItem("basketBox", JSON.stringify(basketBox))

		writeContent()
	}
})



document.addEventListener("click", (e) =>{
	if (e.target.classList.contains("basket_btns")) {
		let filterName = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".title_image p").textContent.trim()
		let filterData = basketBox.filter((item) => {
			return item.productName !== filterName;
		})
		basketBox = filterData;

		localStorage.setItem("basketBox", JSON.stringify(filterData))
		
		writeContent()
		
	}
})
