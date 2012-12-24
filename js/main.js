var loves = ['l','o','v','e','s'], sums = [];
$(document).ready(function() {
	$("form").submit(function(event){
		event.preventDefault();

		var n1 = $("#name1").val();
		var n2 = $("#name2").val();

		for( var i = 0; i < loves.length; i++ ) {
			sums[i] = n1.split( loves[i] ).length - 1;
			sums[i] += n2.split( loves[i] ).length - 1;
		}

		for( var j = 0; j < 3; j++ ) {
			for( var i = 0; i < 4-j; i++ ) {
				sums[i] = sums[i] + sums[i+1];
			}
			sums.pop();
		}

		if( sums[0] > 9 || sums[1] > 9 ) {
			$("#result").text( sums[0] + sums[1] + "%" );
		} else {
			$("#result").text( sums[0] + "" + sums[1] + "%" );
		}
	});
});