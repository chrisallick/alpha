calculate = function( n1, n2 ) {
	if( n1 == '' || n2 == '' ) {
		return false;
	}

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
		per = (sums[0] = sums[1])/100;
		return sums[0] + sums[1] + "% match!";
	} else if( sums[0] == 0 && sums[1] == 0 ) {
		return "0% match!";
	} else {
		per = (sums[0] + "" + sums[1])/100;
		return sums[0] + "" + sums[1] + "% match!";
	}
}

var loves = ['l','o','v','e','s'], sums = [];
var meter;
var per = 0;
var per2 = 0;
$(document).ready(function() {
	$("form").submit(function(event){
		event.preventDefault();

		var n1 = $("#name1").val();
		var n2 = $("#name2").val();

		var result = calculate( n1, n2 );

		if( result != false ) {
			$("#result").text( result );	
		}
	});

    meter = new Canvas( $("#wrapper"), {
        width: 340,
        height: 340,
        autostart: false,
        draw: function(timestamp) {
            this.context.fillStyle = 'rgb(255,255,255)';
            this.context.fillRect( 0, 0, this.w, this.h );

			this.context.fillStyle = 'rgb(255, 0, 0)';
			this.context.fillRect( this.canvas.width/2 - 25, this.canvas.height/2 - 22 - (145*per), 40, (145*per) );

			this.context.drawImage(this.meter, this.canvas.width/2 - this.meter.width/4, 0, this.meter.width/2, this.meter.height/2);
        }
    }).setup();
});