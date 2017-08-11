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
  $("body").removeClass();
  $("#mobile-body-overly").css("display", "none");
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

var config = {
    apiKey: "AIzaSyDxtanBxpKCOImeon6w-GtyomCji_KbGXs",
    authDomain: "testhosting-bb37b.firebaseapp.com",
    databaseURL: "https://testhosting-bb37b.firebaseio.com",
    projectId: "testhosting-bb37b",
    storageBucket: "testhosting-bb37b.appspot.com",
    messagingSenderId: "94235915776"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var photoName;

  $.ajax({
    url: 'https://igapi.ga/themakeupsource01/media/?count=13',
    dataType: "jsonp",
    method: 'GET'
  }).done(function(response){

    var random = Math.floor(Math.random() *6);

    var instaImage = response.items[random].images.standard_resolution.url;
    var instaQuote = response.items[random].caption.text;

    var instaImage2 = response.items[random+1].images.standard_resolution.url;
    var instaQuote2 = response.items[random+1].caption.text;

    $('#insta1').html('<img src="'+instaImage+'">');
    $('#insta1Quote').html('<b><img src="img/quote_sign_left.png">  <small>'+instaQuote+'</small><b><img src="img/quote_sign_right.png">');

    $('#insta2').html('<img src="'+instaImage2+'">');
    $('#insta2Quote').html('<b><img src="img/quote_sign_left.png">  <small>'+instaQuote2+'</small><b><img src="img/quote_sign_right.png">');

  });  

  //must change firebase so that anyone can send in info. set to true
  //must change storage so that anyone can store something 
  $("#sendMessage").on("click", function(event) {
      event.preventDefault();
    
        //grabing the values up top
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var subject = $("#subject").val().trim();
        var message = $("#message").val().trim();

        //date and stime stamp
        var timeNow = Date(Date.now());
        timeNow.toString();

        photoName = name;

        //.push
        database.ref().push({
          //database : local
          Name: name,
          Email: email,
          Subject: subject,
          Message: message,
          Timestamp: timeNow
        });

        //thanking the contact person
        $('#messageSent').html('<h1 class="text-success text-center">Thank you, ' + photoName + ', we will contact you soon!</h1>');

        //hide the contactForm
        $('.contactForm').hide();

        //grab the divs
        var uploadDivM = $('#uploadMessage');
        var uploadDivB = $('#uploadButton');

        //styling the word itself
        /////this section needs to be styled in CSS in production
        uploadDivM.html('<p id="contactFeature">To have your comments featured on our page please upload your photo</p>')
                  .addClass('text-center');

        //created the upload file button
        uploadDivB.append('<input type="file" value="upload" id="fileButton" />');   

        //functions that reconizged changes to the file button
        $('#fileButton').on('change', uploadPhoto);

    });

        //carrying out the filebutton
      function uploadPhoto(picture) {
        //get file // don't know why its index of 0, because it's the only file?
        var file = picture.target.files[0];

        //Create a storage ref
        // firebase.storage().ref('folder_name/file_name')
        var storageRef = firebase.storage().ref('members/' + photoName); 
       
       //Upload file
        var task = storageRef.put(file);

        // tell user successful or not, the functions order matters
        task.on('state_changed', progress , error, compelete);

        //tell the user the photo uploaded is in progress
        function progress(snapshot){
          $('#uploadMessage').html('<h1 class="text-success text-center">Uploading</h1>');
          $('#fileButton').hide();
        };

        //if there is an error up on firebase and the photo is no successful
        function error(err) {
          $('#uploadMessage').html('<h1 class="text-danger text-center">Oh no something happened, Contact us! Lets get you featured!</h1>');
          $('#fileButton').hide();
        };

        //once the photo is complete the user is notified
        function compelete(com){
          $('#uploadMessage').html('<h1 class="text-primary text-center">Thank you, for your Photo!</h1>');
          $('#fileButton').hide();
        };

      };

      //this is login
  var btnLogin = $('#btnLogin');
  var btnSignUp = $('#btnSignUp');
  var btnLogOut = $('#btnLogOut');

  btnLogin.on('click', function(){
    event.preventDefault();

    var txtEmail = $('#txtEmail').val().trim();
    var txtPassword = $('#txtPassword').val().trim();

    var email = txtEmail;
    var password = txtPassword;

    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(e => {
      console.log(e.message);
      $('#signUpAlert').html('<h3>Error Please sign-in again or sign-up with us.</h3>');
    });

    console.log('email is: '+ txtEmail);
    console.log('password is: '+ txtPassword);

    txtEmail = $('#txtEmail').val('');
    txtPassword = $('#txtPassword').val('');

  });

  //add a click for sign up
  btnSignUp.on('click', function(){
    event.preventDefault();

    //need to check for real password
    var txtEmail = $('#txtEmail').val().trim();
    //password should be at least 6 char
    var txtPassword = $('#txtPassword').val().trim();

    var email = txtEmail;
    var password = txtPassword;

    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(e => {
      console.log(e.message);
      if (password.length <= 6){
        $('#signUpAlert').html('<h3>Password must be longer than 6 characters</h3>');
      }
      else if (e.message = 'The email address is badly formatted.'){
        $('#signUpAlert').html('<h3>Please use a correct email.</h3>');
      }
    });


    console.log('email is: '+ txtEmail);
    console.log('password is: '+ txtPassword);

    txtEmail = $('#txtEmail').val('');
    txtPassword = $('#txtPassword').val('');

  });

  btnLogOut.on('click', e => {
    firebase.auth().signOut();

  });

  //Add a realtime auth listen to see if user is logged in the whole time
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      //when users are logged in
      btnLogOut.removeClass('hide');
      btnLogin.addClass('hide');
      $('#LoginInstructions').html('<p>You are logged in</p>');
      $('.loginForm').addClass('hide');
      $('#signUpAlert').html('');

    }
    else {
      //no users logged in
      console.log('not Logged In');
      btnLogOut.addClass('hide');
      $('#LoginInstructions').html('<p>Already have an account?</p>'); 
      $('.loginForm').removeClass('hide');     
      $('#signUpAlert').removeClass('hide');
      $('#signUpAlert').html('<p>Login Area</p>');

    }
 });   