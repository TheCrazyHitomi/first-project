// const picturesDirectory = "../assets/image/photo";

// const pictureGrid = document.createElement("div");
// pictureGrid.classList.add("pictureGrid");

const adilenaPics = [
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/1075396_197391160424874_282281364_o.jpg",
	},
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/77825_130961610388146_1311438264_o.jpg",
	},
	{ name: "adilena", picture: "../assets/images/photo/adilena/adilena.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/adilena2.jpg" },
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/Adilena-lac%20de%20villerest.jpg",
	},
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/amandine-thomas-by-adilena-2.jpg",
	},
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/amandine-thomas-by-adilena-3.jpg",
	},
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/amandine-thomas-by-adilena-5.jpg",
	},
	{
		name: "adilena",
		picture:
			"../assets/images/photo/adilena/amandine-thomas-by-adilena-6.jpg",
	},
	{ name: "adilena", picture: "../assets/images/photo/adilena/AT.jpg" },
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/little-5(1).jpg",
	},
	{ name: "adilena", picture: "../assets/images/photo/adilena/me.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/mee.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/meme.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moim.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimm.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimmm.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimmmm.jpg" },
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/moimmmmmm.jpg",
	},
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/moimmmmmmm.jpg",
	},
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/moimmmmmmmmm.jpg",
	},
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/moimmmmmmmmmm.jpg",
	},
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimoi.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimoim.jpg" },
	{ name: "adilena", picture: "../assets/images/photo/adilena/moimoimm.jpg" },
	{
		name: "adilena",
		picture: "../assets/images/photo/adilena/moimoimoi.jpg",
	},
];

const createPictureLink = () => {
	const PictureLink = document.createElement("div");
	PictureLink.classList.add("picture-link");

	const allButton = document.createElement("div");
	allButton.classList.add("all-button");

	const boxButton = document.createElement("div");
	boxButton.classList.add("box-button");

	const adilenaButton = document.createElement("button");
	adilenaButton.classList.add("filter-button");
	adilenaButton.innerHTML = "Adilena";

	adilenaButton.addEventListener("click", () => {
		cards.innerHTML = "";
		adilenaPics.forEach((pictures) => {
			const { name, picture } = pictures;
			createCard(name, picture);
		});
	});
	return PictureLink;
};

// const christianPics = [
// 	"../assets/images/photo/adilena/1075396_197391160424874_282281364_o.jpg",
// 	"../assets/images/photo/adilena/77825_130961610388146_1311438264_o.jpg",
// 	"../assets/images/photo/adilena/adilena.jpg",
// 	"../assets/images/photo/adilena/adilena2.jpg",
// 	"../assets/images/photo/adilena/Adilena-lac%20de%20villerest.jpg",
// 	"../assets/images/photo/adilena/amandine-thomas-by-adilena-2.jpg",
// 	"../assets/images/photo/adilena/amandine-thomas-by-adilena-3.jpg",
// 	"../assets/images/photo/adilena/amandine-thomas-by-adilena-5.jpg",
// 	"../assets/images/photo/adilena/amandine-thomas-by-adilena-6.jpg",
// 	"../assets/images/photo/adilena/AT.jpg",
// 	"../assets/images/photo/adilena/little-5(1).jpg",
// 	"../assets/images/photo/adilena/me.jpg",
// 	"../assets/images/photo/adilena/mee.jpg",
// 	"../assets/images/photo/adilena/meme.jpg",
// 	"../assets/images/photo/adilena/moim.jpg",
// 	"../assets/images/photo/adilena/moimm.jpg",
// 	"../assets/images/photo/adilena/moimmm.jpg",
// 	"../assets/images/photo/adilena/moimmmm.jpg",
// 	"../assets/images/photo/adilena/moimmmmmm.jpg",
// 	"../assets/images/photo/adilena/moimmmmmmm.jpg",
// 	"../assets/images/photo/adilena/moimmmmmmmmm.jpg",
// 	"../assets/images/photo/adilena/moimmmmmmmmmm.jpg",
// 	"../assets/images/photo/adilena/moimoi.jpg",
// 	"../assets/images/photo/adilena/moimoim.jpg",
// 	"../assets/images/photo/adilena/moimoimm.jpg",
// 	"../assets/images/photo/adilena/moimoimoi.jpg",
// ];

// const gabyPics = [
// 	"../assets/images/photo/gaby/gaby10.png",
// 	"../assets/images/photo/gaby/gaby11.png",
// 	"../assets/images/photo/gaby/gaby1png.png",
// 	"../assets/images/photo/gaby/gaby3.png",
// 	"../assets/images/photo/gaby/gaby4.png",
// 	"../assets/images/photo/gaby/gaby5.png",
// 	"../assets/images/photo/gaby/gaby6.png",
// 	"../assets/images/photo/gaby/gaby7.png",
// 	"../assets/images/photo/gaby/gaby8.png",
// 	"../assets/images/photo/gaby/gaby9.png",
// ];

// const ricoPics = [
// 	"../assets/images/photo/rico/AmadineT by Rico.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-12.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-12-2.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-14.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-14-2.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-15.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-16.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-16-2.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-17.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-17-2.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-18.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-19.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-2.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-20.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-26.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-27.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-3.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-30.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-31.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-32.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-33.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-34.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-35.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-36.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-37.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-38.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-39.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-40.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-41.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-43.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-44.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-45.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-7.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-8.jpg",
// 	"../assets/images/photo/rico/AmadineT by Rico-9.jpg",
// ];

// // const allPictures = [];
// // for (let i = 0; i < photographs.length; i++) {
// // 	const photograph = photographs[i];
// // 	const files = fs.readFileSync(`${picturesDirectory}${photograph}`);
// // 	allPictures.push(files);
// // }
// // console.log(allPictures);
