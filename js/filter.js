// CheckBOX
const CheckBox_Btn = document.querySelector(".CheckBox_Btn");
const checkBox = document.querySelector(".checkBox");

CheckBox_Btn.addEventListener("click", () => {
	checkBox.classList.toggle("active_checkBox");
});


const checkBox_boxs = document.querySelector(".checkBox_boxs");
const main_box = document.querySelector(".main-box");
const filter_list = document.querySelector(".filter_list");

let product = [
	{
		img: "image/box1.png",
		price: 1850,
		name: "Кухонный нож SQ02-B",
		id: 1,
	},
	{
		img: "image/box2.png",
		price: 1450,
		name: "Кухонный нож SQ03-B",
		id: 2,
	},
	{
		img: "image/box1.png",
		price: 750,
		name: "Охотничий нож SQ01-B",
		id: 3,
	},
	{
		img: "image/box2.png",
		price: 950,
		name: "Складной нож SQ04-B",
		id: 4,
	},
	{
		img: "image/box1.png",
		price: 1850,
		name: "Кухонный нож SQ02-B",
		id: 5,
	},
	{
		img: "image/box2.png",
		price: 1450,
		name: "Кухонный нож SQ03-B",
		id: 6,
	},
	{
		img: "image/box1.png",
		price: 750,
		name: "Охотничий нож SQ01-B",
		id: 7,
	},
	{
		img: "image/box2.png",
		price: 950,
		name: "Складной нож SQ04-B",
		id: 8,
	},
	{
		img: "image/box1.png",
		price: 1850,
		name: "Кухонный нож SQ02-B",
		id: 9,
	},
	{
		img: "image/box2.png",
		price: 1450,
		name: "Кухонный нож SQ03-B",
		id: 10,
	},
	{
		img: "image/box1.png",
		price: 750,
		name: "Охотничий нож SQ01-B",
		id: 11,
	},
	{
		img: "image/box2.png",
		price: 950,
		name: "Складной нож SQ04-B",
		id: 12,
	},
	{
		img: "image/box1.png",
		price: 1850,
		name: "Кухонный нож SQ02-B",
		id: 13,
	},
	{
		img: "image/box2.png",
		price: 1450,
		name: "Кухонный нож SQ03-B",
		id: 14,
	},
	{
		img: "image/box1.png",
		price: 750,
		name: "Охотничий нож SQ01-B",
		id: 15,
	},
]

product.forEach((item) => {
	if (item.id <= 6) {
		checkBox_boxs.innerHTML += `
		<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
		<div class="box rounded-2xl bg-neutral-800 flex
		items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
		<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
		<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
			<div class="add_icon_img flex items-center gap-3 p-2">
				<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
				<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
			</div>
		</div>
		<img src="./${item.img}" alt="" class = "boxImg">
	</div>
		<div class="box-text text-xl mt-5 text-white">
			<p class = "box-title">${item.name}</p>
			<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
		</div>
	</div>`
	}
})

function filter() {
	filter_list.addEventListener("click", (e) => {
		const showId = e.target.dataset.id
		switch (showId) {
			case 'All':
			checkBox_boxs.innerHTML = ""
			product.forEach((item) => {
				if (item.id <= 18) {
					checkBox_boxs.innerHTML += `
					<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
					<div class="box rounded-2xl bg-neutral-800 flex
					items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
					<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
					<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
						<div class="add_icon_img flex items-center gap-3 p-2">
							<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
							<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
						</div>
					</div>
					<img src="./${item.img}" alt="" class = "boxImg">
				</div>
					<div class="box-text text-xl mt-5 text-white">
						<p class = "box-title">${item.name}</p>
						<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
					</div>
				</div>`
				}
			});
			break;
			case '1':
				checkBox_boxs.innerHTML = ""
				product.forEach((item) => {
					if (item.name == "Складной нож SQ04-B") {
						checkBox_boxs.innerHTML +=  `
						<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
						<div class="box rounded-2xl bg-neutral-800 flex
						items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
						<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
						<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
							<div class="add_icon_img flex items-center gap-3 p-2">
								<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
								<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
							</div>
						</div>
						<img src="./${item.img}" alt="" class = "boxImg">
					</div>
						<div class="box-text text-xl mt-5 text-white">
							<p class = "box-title">${item.name}</p>
							<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
						</div>
					</div>`
					}
				})
				break;
			case '2':
					checkBox_boxs.innerHTML = ""
					product.forEach((item) => {
						if (item.name == "Кухонный нож SQ03-B") {
							checkBox_boxs.innerHTML += `
							<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
							<div class="box rounded-2xl bg-neutral-800 flex
							items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
							<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
							<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
								<div class="add_icon_img flex items-center gap-3 p-2">
									<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
									<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
								</div>
							</div>
							<img src="./${item.img}" alt="" class = "boxImg">
						</div>
							<div class="box-text text-xl mt-5 text-white">
								<p class = "box-title">${item.name}</p>
								<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
							</div>
						</div>`
						}
					})
					break;
			case '3':
				checkBox_boxs.innerHTML = ""
				product.forEach((item) => {
					if (item.name == "Охотничий нож SQ01-B") {
						checkBox_boxs.innerHTML +=`
						<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
						<div class="box rounded-2xl bg-neutral-800 flex
						items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
						<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
						<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
							<div class="add_icon_img flex items-center gap-3 p-2">
								<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
								<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
							</div>
						</div>
						<img src="./${item.img}" alt="" class = "boxImg">
					</div>
						<div class="box-text text-xl mt-5 text-white">
							<p class = "box-title">${item.name}</p>
							<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
						</div>
					</div>`
					}
				})
				break;
			case 'Others':
					checkBox_boxs.innerHTML = ""
					product.forEach((item) => {
						if (item.price <= 1400) {
							checkBox_boxs.innerHTML +=`
							<div class="main-box mt-4 max-lg:mt-6  wow animate__animated animate__fadeInRight">
							<div class="box rounded-2xl bg-neutral-800 flex
							items-center bg-[url('./${item.img}')] bg-no-repeat bg-center relative">
							<span class="bg-[url('./${item.img}')] bg-no-repeat bg-center"></span>
							<div class="add_icons flex justify-end absolute top-0 right-0 p-5 gap-2 w-full h-10">
								<div class="add_icon_img flex items-center gap-3 p-2">
									<img src="./icon/add.svg" alt="" class="cursor-pointer w-5 h-5">
									<img src="./icon/navIcon4.svg" alt="" class="basket_add cursor-pointer w-5 h-5">
								</div>
							</div>
							<img src="./${item.img}" alt="" class = "boxImg">
						</div>
							<div class="box-text text-xl mt-5 text-white">
								<p class = "box-title">${item.name}</p>
								<div class=" flex items-center gap-5"><p class="boxPrice text-sm">${item.price} р.</p><p class="box-text-title-p">новинка</p></div>
							</div>
						</div>`
						}
					})
					break;
		}
	})
}

filter()
