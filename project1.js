var brands = [];
var product_types = [];
var brand;
var product;
var product_type;
var queryURL;
var vidz = {
    lips: ['urnbV5gG87o', 'WgaMhoQdotc', 'wYzg8HgPCHI', 'z75rIsnkS9E', 'AjTrbcjmktw', 'Ag6h5DLmAA0', 'vgBu6PgEF6M', 'Ivs_qLZbY68'],
    eyes: ['InA8Xbg-hvo', 'bDoObmlSkuk', 'u06Yb4gwNFY', 'W4W-4VL1ABU', 'KRmmtEJGzrE', 'hcur7Z-xzLo', 'l55V-PAxkIE', 'VKqwQnkzvTI', 'tXt8pmBw94E'],
    face: ['XvH2ukztRzs', '6pyRi_9gv-c', 'REqphQgUNgA', 'vWAsq-zJMJY', '23HCIWwh6OQ', 'WGIlfoKp0Qs', 'WSoEgv8XAWU', 'xP9W61cxy5M', '1LKe519hEcM', 'E-2EWx6lyxE', 'PcRIxuNyrmw'],
  }

// =====================//
// click/touch function
//=====================//
$(document).ready(function() {
  $('#closebtn').click( function() { close() })
 });

$(document).on('click touch',".eye",function(){
  var randomEyes = Math.floor(Math.random() * vidz.eyes.length);
  console.log(randomEyes);
  var vidzID = vidz.eyes[randomEyes];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})

$(document).on('click touch',".face",function(){

  var randomFace = Math.floor(Math.random() * vidz.face.length);
  console.log(randomFace);
  var vidzID = vidz.face[randomFace];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})

$(document).on('click touch',".lip",function(){
  var randomLips = Math.floor(Math.random() * vidz.lips.length);
  console.log(randomLips);
  var vidzID = vidz.lips[randomLips];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})

$(document).on('click touch',".acc",function(){

  var randomAccessories = Math.floor(Math.random() * vidz.accessory.length);
  console.log(randomAccessories);
  var vidzID = vidz.accessory[randomAccessories];
  var player = $("<iframe id='ytplayer' type ='text/html' width='600' height='400' src='https://www.youtube.com/embed/" + vidzID + "?autoplay=0' frameborder='0' allowfullscreen>")
  $("#player").html(player);

})

$(document).on('click touch',".we",function(){
	event.preventDefault();
	brand = $(this).attr('data-brand');
	product = $(this).attr('data-products');
	console.log($(this).attr('data-brand'));
	console.log($(this).attr('data-products'));
	brands.push(brand);
	displayMakeUpfo();
  console.log(brand);
  console.log(product);
  $("#newWindow").empty();
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
		}
	})
}