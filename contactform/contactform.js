 $(document).ready(function(){ 

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

  //themakeupsource01
  //remember to change it from drake

  $.ajax({
    url: 'https://igapi.ga/drake/media/?count=13',
    dataType: "jsonp",
    method: 'GET'
  }).done(function(response){

    var random = Math.floor(Math.random() *12);

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
});//document ready closer
