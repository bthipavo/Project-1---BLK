$(document).ready(function() {
	$('#searchContent').hide();
});

var gameData = {};
var searchOptions = "";



$('#submit').on('click', function() {
	$('#searchContent').show();
	searchOptions = $('#userInput').val().trim();
	console.log(searchOptions);
	$.ajax({
	    url: 'http://localhost:3000/search',
	    data: {search: searchOptions},
	}).done(function(data) {
	    // console.log('data', data);
	    var searchResult = $('<div>');
	    for (var i in data) {
          			
                    var searchReturn = $('<p>');
                    searchReturn.html('Title: ' + data[i].name + '<br/>' +
                    				  'Rating: ' + data[i].total_rating + '<br/>');
                    				  // '<img src=' + data.i.images.downsized_still.url);
                    searchResult.append(searchReturn);
          	}
        $('#searchContent').append(searchResult);
	    console.log(data);
	});
});

//this is a comment

// $(document).ready(function() {

// 	$('#searchContent').hide();

// 	$('#submitUserData').on('click', function(event){
// 		$('#searchContent').empty(); //clear div of old content.
// 	    event.preventDefault(); //stop refresh of page
// 	    search = $('#userInput').val().trim();
// 	    // var searchReturn = '<p>' + search + '</p>';
// 	    $('#searchContent').slideDown(500);
// 	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=1" +"&api_key=dc6zaTOxFJmzC";//The API Key.
//      	$.ajax({url: queryURL, method: 'GET'})
//           .done(function(response) {
//           	for (var i = 0; i < response.data.length; i++) {
//           			var searchResult = $('<div>');
//                     var searchReturn = $('<p>');
//                     searchReturn.html('Title: ' + response.data[i].title + '<br/>' +
//                     				  'Rating: ' + response.data[i].rating + '<br/>' +
//                     				  '<img src=' + response.data[i].images.downsized_still.url);
//                     searchResult.append(searchReturn);
//           	}
//           	$('#searchContent').append(searchResult);
//           });
//     });
// }); 