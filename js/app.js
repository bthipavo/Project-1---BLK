
$(document).ready(function() {

	$('#searchContent').hide();

	$('#submitUserData').on('click', function(event){
		$('#searchContent').empty(); //clear div of old content.
	    event.preventDefault(); //stop refresh of page
	    search = $('#userInput').val().trim();
	    // var searchReturn = '<p>' + search + '</p>';
	    $('#searchContent').slideDown(500);
	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=1" +"&api_key=dc6zaTOxFJmzC";//The API Key.
     	$.ajax({url: queryURL, method: 'GET'})
          .done(function(response) {
          	for (var i = 0; i < response.data.length; i++) {
          			var searchResult = $('<div>');
                    var searchReturn = $('<p>');
                    searchReturn.html('Title: ' + response.data[i].title + '<br/>' +
                    				  'Rating: ' + response.data[i].rating + '<br/>' +
                    				  '<img src=' + response.data[i].images.downsized_still.url);
                    searchResult.append(searchReturn);
          	}
          	$('#searchContent').append(searchResult);
          });
    });
}); //End of document ready

	// $.ajax({url: 'http://localhost:3000/igdb'})
	// 	.done(function(data) {
	// 	$('#submitUserData').on('click', function(event) {
	// 		$('#searchContent').empty(); //clear div of old content.
	// 		event.preventDefault(); //stops page from refreshing
	// 		var search = $('#userInput').val().trim(); //capture value
	// 		$('#searchContent').slideDown(1000);
	// 		var searchResult = $('<div>');
	// 		for (var i = 0; i < data.length; i++) {
	// 			var searchReturn = $('<p>');
	// 			searchReturn.text(data[i].name);
	// 			searchResult.append(searchReturn);
	// 			console.log(data[i].name)
	// 		}
	// 		$('#searchContent').append(searchResult);//append html to #searchContent div.
	// 	});
	// })
