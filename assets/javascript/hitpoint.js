$("#hitplus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints + 1;
	$("#health").text(total);
});

$("#hitminus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints -1;
	$("#health").text(total);
});