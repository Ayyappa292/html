var script = document.createElement('script');
script.src="https://code.jquery.com/jquery-3.5.0.js";
var arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
arr = jQuery.grep(arr, function( n, i ) {
return console.log(( n !== 5 && i > 4 ));
});
arr = jQuery.grep(arr, function( a ) {
return console.log((a !== 9));
});
