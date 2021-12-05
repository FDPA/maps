var counties = [
  "Adams", "Allegheny", "Armstrong", "Beaver", "Bedford", "Berks", "Blair", "Bradford", "Bucks", "Butler",
  "Cambria", "Cameron", "Carbon", "Centre", "Chester", "Clarion", "Clearfield", "Clinton", "Columbia",
  "Crawford", "Cumberland", "Dauphin", "Delaware", "Elk", "Erie", "Fayette", "Forest", "Franklin", "Fulton",
  "Greene", "Huntingdon", "Indiana", "Jefferson", "Juniata", "Lackawanna", "Lancaster", "Lawrence", "Lebanon",
  "Lehigh", "Luzerne", "Lycoming", "McKean", "Mercer", "Mifflin", "Monroe", "Montgomery", "Montour",
  "Northampton", "Northumberland", "Perry", "Philadelphia", "Pike", "Potter", "Schuylkill", "Snyder",
  "Somerset", "Sullivan", "Susquehanna", "Tioga", "Union", "Venango", "Warren", "Washington", "Wayne",
  "Westmoreland", "Wyoming", "York"
];

var baseUrl = "https://fdpa.github.io/maps/images";

var dropdown = document.getElementById('countyDropdown');
var chamberRadios;
var sourceRadios;
var mapImg = document.getElementById('mapImg');

function initialize() {
  for (var i = 0; i < counties.length; i++) {
    var opt = document.createElement("option");
    opt.textContent = counties[i];
    opt.value = counties[i].toLowerCase();
    dropdown.options.add(opt);
  }

  document.getElementById('chamberRadioDiv').innerHTML =
    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"pa_house\" onchange=\"displayMap()\" checked=\"checked\" />House</label>" +
    "<br />" +
    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"pa_senate\" onchange=\"displayMap()\" />Senate</label>";
//    "<br />" +
//    "<label><input type=\"radio\" name=\"chamberRadio\" value=\"us_congress\" onchange=\"displayMap()\" />Congress</label>";
  chamberRadios = document.getElementsByName('chamberRadio');

  document.getElementById('sourceRadioDiv').innerHTML =
    "<label><input type=\"radio\" name=\"sourceRadio\" value=\"current\" onchange=\"displayMap()\" checked=\"checked\" />Current</label>" +
    "<br />" +
//    "<label><input type=\"radio\" name=\"sourceRadio\" value=\"lrc\" onchange=\"displayMap()\" />LRC</label>" +
//    "<br />" +
    "<label><input type=\"radio\" name=\"sourceRadio\" value=\"fdpa\" onchange=\"displayMap()\" />FDPA</label>";
  sourceRadios = document.getElementsByName('sourceRadio');

  mapImg.style.width = "500px";
  mapImg.style.height = "500px";
  
  displayMap();
}

function displayMap() {
  var county = dropdown.value;
  var chamber = getRadioValue(chamberRadios);
  var source = getRadioValue(sourceRadios);
  var sourceString = "";
  if (source !== "current") {
    sourceString = source + "_";
  }
  mapImg.src = baseUrl + "/" + county + "_" + sourceString + chamber + ".jpg";
  return false;
}

function getRadioValue(radioElement) {
  for (i=0; i<radioElement.length; i++) {
    if (radioElement[i].checked) {
      return radioElement[i].value;
    }
  }
  return null;
}
