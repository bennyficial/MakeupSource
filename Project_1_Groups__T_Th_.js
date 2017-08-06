
var brands = [];
var product_types = [];
var brand;
var product;
var product_type;
var queryURL;
var categories = [
	{
		name: "eyes",
		products:[
			{
				name: "brow",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "eyeliner",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "eyeshadow",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "mascara",
				brands: ["mac", "covergirl", "maybelline", ]
			},
		]
	},
	{
		name: "face",
		products:[
			{
				name: "blush and bronzer",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "concealer",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "foundation",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "contour and highlight",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "powder",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "primer",
				brands: ["mac", "covergirl", "maybelline", ]
			},
		]
	},
	{
		name: "lips",
		products:[
			{
				name: "lipstick",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "lip gloss",
				brands: ["mac", "covergirl", "maybelline", ]
			},
		]
	},
	{
		name: "accesories",
		products:[
			{
				name: "brushes",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "makeup tools",
				brands: ["mac", "covergirl", "maybelline", ]
			},
			{
				name: "remover",
				brands: ["mac", "covergirl", "maybelline", ]
			},
		]
	}
];

categories.forEach(function (category) {
	console.log(category.name);
	var categoryLi = $("<li></li>");
	var categoryA = $('<a class="drop" href="#">' + category.name + '</a>');
	var productsUnlistd = $('<ul></ul>')
	categoryLi.append(categoryA,productsUnlistd)
	category.products.forEach(function(product){
		var productLi = $('<li></li>');
		var productA = $('<a class="drop" href="#">' + product.name + '</a>')
		var brandUnlistd = $('<ul>')
		product.brands.forEach(function(brand){
			// var newHTML = index_makeup.html;
			var brandLi = $('<li>');
			var brandA = $('<a class="brand" target="_blank">' + brand + '</a>')
			brandA.attr('href',);
			brandA.attr('data-brand', brand)
			brandA.attr('data-products', product.name)
			brandLi.append(brandA);
			brandUnlistd.append(brandLi);
		});
		productLi.append(productA,brandUnlistd);
		productsUnlistd.append(productLi);
	})
	$(".nav-menu").append(categoryLi);
});

$(document).on('click',".brand",function(){
	event.preventDefault();
	// brand = $('#brand-input').val().trim();
	 brand = $(this).attr('data-brand');
	 product = $(this).attr('data-products');
	console.log($(this).attr('data-brand'));
	console.log($(this).attr('data-products'));
	brands.push(brand);

	open('index_mkup.html');
	displayMakeUpfo();
  	// console.log(brand);
	// makeButtons();
 // 	product = $('#product-input').val().trim();
	// product_types.push(product);
  	// console.log(product);
	// makeButtons();
	// displayMakeUpfo();
});
// $("#covergirl").hover(function(){
// 	product = $('#covergirl').text().trim();
// 	product_types.push(product);
// 	console.log(product);
// });

// function makeButtons() {
// 	$("#animal-buttons").empty();
// 	for (var i = 0; i < animals.length; i++) {
// 		var a = $("<button type='button'>");
// 		a.addClass("fellow btn btn-primary btn-lg");
// 		a.attr("data-animal", animals[i]);
// 		a.text(animals[i]);
// 		$("#animal-buttons").append(a);
// 	}
// 	$('.fellow').on('click',function(){  // review why we put the on click function inside makeButtons function also note you are calling the class fellow
// 		$("#animals").empty();
// 		animal = $(this).attr("data-animal"); // play with this a little more to get a better understanding
// 		console.log(animal);
// 		displayAnimalsInfo(); // i was calling these twice when i had another displayAnimalsInfo() placed inside of the on.click function for #addAnimal
// 	});
// }                          //http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
function displayMakeUpfo() {
	 queryURL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brand + "&product_type=" + product;
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		var results = response
		console.log(results);
		for (var i = 0; i < results.length; i++) {
			var productDiv = $("<div id='results' class='col-md-4'>");
			// console.log(productDiv);
			var productName = results[i].name;
			// console.log(productName);
			var pName = $("<div id='product-name'>").text(productName);
			// console.log(pName);
			var price = results[i].price;
			var p = $("<p>").text("Price:" + price);
			var productImage = $("<img>");
			var staticSrc = results[i].image_link;
			var webLink = results[i].product_link;
			productImage.attr("src",staticSrc);
			productImage.addClass("product");
			productImage.attr("href",webLink);
			// console.log(webLink);
			productDiv.append(pName);
			// console.log(productDiv.append(pName));
			productDiv.append(productImage);
			productDiv.append(p);
			$("#products").prepend(productDiv); // we prepend so that the rest of the divs fall in place after
			$("#results").wrap($('<a target="_blank">',{   // look into wrap and how it works
   				href: webLink
			}));
			$(document).ready(function(){
		    	$(".product").click(function(){
		        	$(this).attr("href");
		    	});
			});

		}

		// console.log(results);
	})
}
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
	//  $('#empli').click( function() { open('index_makeup.html') })

 });
//
