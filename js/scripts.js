$(document).ready(function() {
  $("#food").submit(function(event) {
    event.preventDefault();
    var foodLists = [$("input#food1").val(), $("input#food2").val()];
    var groceries = foodLists.map(function(foodList) {
      return foodList.toUpperCase();

    });
    groceries.sort();
    console.log(groceries);

    var one = groceries[0];
    var two = groceries[1];

    $(".unstyled").append("<li>" + one);
    $(".unstyled").append("<li>" + two);

    

  });
});
