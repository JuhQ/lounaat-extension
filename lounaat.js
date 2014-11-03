var random = function(min, max) {
  return min + Math.round(Math.random() * (max-min));
};

var appendCss = function(url) {
  var head = document.head;
  var link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  link.className = 'epic-css';

  head.appendChild(link);
};

if(!document.getElementsByClassName("epic-css").length) {
  appendCss('http://elrumordelaluz.github.io/csshake/css/csshake.min.css');
  appendCss('http://sandbox.psykedelia.org/lounaat.css');
}

var getStupidLunchPlace = function(event) {
  if (event) {
    event.preventDefault();
  }
  var places = $("section.menu");
  var placeForToday = $(places[random(0, places.length - 1)]);
  var epicStupidClassnames = "chosen-place shake shake-slow shake-constant hover-stop";
  $(".chosen-place").removeClass(epicStupidClassnames);
  placeForToday.addClass(epicStupidClassnames);

  $("body").scrollTop(placeForToday.offset().top);
};

var button = $("<button>");
button.addClass("randomize-button");
button.text("Get your lunch place for today");
button.on("click", getStupidLunchPlace);

$("body").append(button);
