
var gameData = {};
var searchOptions = "";

$('#submit').on('click', function() {
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
});;
// console.log('http://localhost:3000/search'+searchOptions);




// $.ajax({
//     url: 'http://localhost:3000/characters'
// }).done(function(data) {
//     // console.log('data', data);
//     console.log("characters");
//     gameData = data;
//     console.log(gameData);
// })

