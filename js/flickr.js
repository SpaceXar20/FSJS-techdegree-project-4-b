$(document).ready(function () {
    //add event handler to all buttons
  $('button').click(function () {
      //remove selected class from all buttons when one button is clicked
      $('button').removeClass('selected');
      //when a button is clicked, add a class called "selected"
    $(this).addClass('selected');
    /*use Jquery's getJSON method to get data from flickr when a visitor pushes a button,
    first parameter is URL to resource, second is data we want to send along with URL,
    the third argument is a callback function
    */

    //put flickr api url inside a variable
   var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

   //store animals words inside a variable, (this) refers to the buttons that the visitor clicks
   var animal = $(this).text();

   /*create data to be sent by making a js object, 
   by using tags flickr will search for photos associated with animal*/
   var flickrOptions = {
    tags: animal,
    format: "json" 
  };
  function displayPhotos(data) {
    //create a variable to store HTML that will load into <ul class="filter-select">
    var photoHTML = '<ul>';
    $.each(data.items, function (i, photo) {
      //add li element
      photoHTML += '<li class=grid-25 tablet-grid-50>';
      //add a href
      photoHTML += '<a href="'+ photo.link + '" class="image">';
      //add img src
      photoHTML += '<img src="' + photo.media.m + '"></a>,</li>';
    });
    //close ul tag
    photoHTML += '</ul>';
    //add html to page
    $('#photos').html(photoHTML);
  }

    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });  
}) //end ready