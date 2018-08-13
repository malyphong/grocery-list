$(document).ready(function() {
  $('#items').submit(function(event) {
    var divIds = ['item1', 'item2', 'item3', 'item4']
    var sortedGroceries = []
    // var alphabetical = groceries.sort(function(grocery) {
    //   return grocery.toUpperCase();
    divIds.forEach(function(divId){
      sortedGroceries.push($('input#' + divId).val());
      console.log(sortedGroceries)
      sortedGroceries.sort().forEach(function(grocery) {
        var index = sortedGroceries.indexOf(grocery)

        console.log("printing " + grocery + " index " + index)
        // var lists = $('input#' + grocery).val();
        console.log('.item' + (index+1))
        $('.item' + (index+1)).text(grocery);
      });
    });
    // sortedGroceries.sort().forEach(function(grocery) {
    //   var lists = $('input#' + grocery).val();
    //   $("." + grocery).text(grocery);
    // });

$('#output').show();
$('#items').hide();

event.preventDefault();
  });
});
