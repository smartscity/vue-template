var _years = [];

function _getYears() {
  var maxYear = new Date().getFullYear();
  var minYear = 1900;
  for(var i=maxYear;i>=minYear;i--){
    var newYear = {};
    newYear.id = i+"";
    newYear.text = i+"";
    _years.push(newYear);
  }
}

$(function($) {
  _getYears();
});
