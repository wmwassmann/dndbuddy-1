var hitpoints = 14;
var countplus = 0;
var countminus = 0;

$("#health").text(hitpoints);

$("#hitplus").click(function() {
    countplus ++;
    var total = hitpoints + countplus + countminus;
    $("#health").text(total);
});

$("#hitminus").click(function() {
    countminus --;
    var total = hitpoints + countplus + countminus;
    $("#health").text(total);
});

