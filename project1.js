
var brands = [];
var product_types = [];
var brand;
var product;
var product_type;
var queryURL;
// var categories = [
// 	{
// 		name: "eyes",
// 		products:[
// 			{
// 				name: "brow",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "eyeliner",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "eyeshadow",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "mascara",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 		]
// 	},
// 	{
// 		name: "face",
// 		products:[
// 			{
// 				name: "blush and bronzer",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "concealer",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "foundation",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "contour and highlight",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "powder",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "primer",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 		]
// 	},
// 	{
// 		name: "lips",
// 		products:[
// 			{
// 				name: "lipstick",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "lip gloss",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 		]
// 	},
// 	{
// 		name: "accesories",
// 		products:[
// 			{
// 				name: "brushes",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "makeup tools",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 			{
// 				name: "remover",
// 				brands: ["mac", "covergirl", "maybelline", ]
// 			},
// 		]
// 	}
// ];

// categories.forEach(function (category) {
// 	console.log(category.name);
// 	var categoryLi = $("<li class = 'lip'></li>");
// 	var categoryA = $('<a class="drop" href="#">' + category.name + '</a>');
// 	var productsUnlistd = $('<ul></ul>')
// 	categoryLi.append(categoryA,productsUnlistd)
// 	category.products.forEach(function(product){
// 		var productLi = $('<li></li>');
// 		var productA = $('<a class="drop" href="#">' + product.name + '</a>')
// 		var brandUnlistd = $('<ul>')
// 		product.brands.forEach(function(brand){
// 			// var newHTML = index_makeup.html;
// 			var brandLi = $('<li>');
// 			var brandA = $('<a class="brand" target="_blank">' + brand + '</a>')
// 			brandA.attr('href',);
// 			brandA.attr('data-brand', brand)
// 			brandA.attr('data-products', product.name)
// 			brandLi.append(brandA);
// 			brandUnlistd.append(brandLi);
// 		});
// 		productLi.append(productA,brandUnlistd);
// 		productsUnlistd.append(productLi);
// 	})
// 	$(".nav-menu").append(categoryLi);
// });

// $(document).on('click',".brand",function(){
// 	event.preventDefault();
// 	// brand = $('#brand-input').val().trim();
// 	 brand = $(this).attr('data-brand');
// 	 product = $(this).attr('data-products');
// 	console.log($(this).attr('data-brand'));
// 	console.log($(this).attr('data-products'));
// 	brands.push(brand);

// 	open('index_mkup.html');
// 	displayMakeUpfo();
// });



function open(url) {
	$('#grayBlock').fadeIn();
	$('#iframe').attr('src', url);
	 $('#newWindow').fadeIn();
};

function close() {
	$('#grayBlock').fadeOut();
	 $('#newWindow').fadeOut();
};

$(document).ready(function() {
// $('ul').css({width: $('#newWindow').width()-20,height:    $('#newWindow').height()-90})

	 $('#closebtn').click( function() { close() })
	 // $('.sub').click( function() { open('index_makeup.html') })

 });

  var vidz = {
    lips: ['urnbV5gG87o', 'WgaMhoQdotc', 'wYzg8HgPCHI', 'z75rIsnkS9E', 'AjTrbcjmktw', 'Ag6h5DLmAA0', 'vgBu6PgEF6M', 'Ivs_qLZbY68'],
    eyes: ['InA8Xbg-hvo', 'bDoObmlSkuk', 'u06Yb4gwNFY', 'W4W-4VL1ABU', 'KRmmtEJGzrE', 'hcur7Z-xzLo', 'l55V-PAxkIE', 'VKqwQnkzvTI', 'tXt8pmBw94E'],
    face: ['XvH2ukztRzs', '6pyRi_9gv-c', 'REqphQgUNgA', 'vWAsq-zJMJY', '23HCIWwh6OQ', 'WGIlfoKp0Qs', 'WSoEgv8XAWU', 'xP9W61cxy5M', '1LKe519hEcM', 'E-2EWx6lyxE', 'PcRIxuNyrmw'],
    accessory: ['jltoL58UlE8'],
    starter: ['w6wFUHPpOJ8', '9sfdPfojPmY']
  }

// $(document).on("load", function() {
// 	 var randomStarters = Math.floor(Math.random() * vidz.starter.length);
//   console.log(randomStarters);
//   // $("#player").empty();
//   var vidzID = vidz.starter[randomStarters];
//   var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
//   $("#player").html(player);
//   console.log(vidzID);
// })


$(document).on('click touch',".eye",function(){
  // $(".eye").on("click", function() {
  var randomEyes = Math.floor(Math.random() * vidz.eyes.length);
  console.log(randomEyes);
  // $("#player").empty();
  var vidzID = vidz.eyes[randomEyes];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})
$(document).on('click touch',".face",function(){
  // $(".face").on("click", function() {
  var randomFace = Math.floor(Math.random() * vidz.face.length);
  console.log(randomFace);
  // $("#player").empty();
  var vidzID = vidz.face[randomFace];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})
$(document).on('click touch',".lip",function(){
// $(".lip").on("click", function() {
  var randomLips = Math.floor(Math.random() * vidz.lips.length);
  console.log(randomLips);
  // $("#player").empty();
  var vidzID = vidz.lips[randomLips];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})
$(document).on('click touch',".acc",function(){
// $(".acc").on("click", function() {
  var randomAccessories = Math.floor(Math.random() * vidz.accessory.length);
  console.log(randomAccessories);
  // $("#player").empty();
  var vidzID = vidz.accessory[randomAccessories];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})
// =====================//
// click function
//=====================//
$(document).on('click touch',".we",function(){
	event.preventDefault();
	// brand = $('#brand-input').val().trim();
	brand = $(this).attr('data-brand');
	product = $(this).attr('data-products');
	console.log($(this).attr('data-brand'));
	console.log($(this).attr('data-products'));
	brands.push(brand);
	displayMakeUpfo();
  console.log(brand);
  console.log(product);
});


// =====================//
// ajax call
//=====================//
function displayMakeUpfo() {
	 queryURL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brand + "&product_type=" + product;
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		var results = response
		console.log(results);
		for (var i = 0; i < results.length; i++) {
			var productDiv = $("<div id='results' class='col-md-4'>");
			var productName = results[i].name;
			var pName = $("<div id='product-name'>").text(productName);
			var price = results[i].price;
			var p = $("<p>").text("Price:" + price);
			var productImage = $("<img>");
			var staticSrc = results[i].image_link;
			var webLink = results[i].product_link;
			productImage.attr("src",staticSrc);
			productImage.addClass("product");
			productImage.attr("href",webLink);
			productDiv.append(pName);
			productDiv.append(productImage);
			productDiv.append(p);
			$("#newWindow").prepend(productDiv); // we prepend so that the rest of the divs fall in place after
			$("#results").wrap($('<a target="_blank">').attr("href", webLink));
			
			$(document).ready(function(){
		    	$(".product").click(function(){
		        	$(this).attr("href");


		    	});

			});
		}
	})
}